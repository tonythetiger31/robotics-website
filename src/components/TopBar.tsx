import React, { FC, useContext, useState } from 'react';
import { TEAM_NAME } from '../strings';
import { appContext } from '../App';
import { scrollToRef } from '../modules';
import { appContextType } from '../types';

const TopBar: FC<{ displayTitle: boolean }> = ({ displayTitle }) => {
	const {
		AboutContainer,
		LandingContainer,
		OurGoalContainer,
		DonateContainer,
		SponsorsContainer, 
		topBarTitle,
	} = useContext(appContext) as appContextType;
	const [animated, setAnimated] = useState(false);
	const [hamburgerMenuIsDisplayed, sethamburgerMenuIsDisplayed] =
		useState(false);
	function titleDiv(animation: 'appear' | 'disappear'): JSX.Element {
		return (
			<div
				className="title"
				style={{ animationName: animation }}
				ref={topBarTitle}
			>
				{TEAM_NAME}
			</div>
		);
	}
	function TopBarAnimationHandler(): null | JSX.Element {
		if (displayTitle === true) {
			animated === true && setAnimated(false);
			return titleDiv('appear');
		} else {
			if (animated === true) {
				return null;
			} else {
				setTimeout(() => setAnimated(true), 300 - 10);
				return titleDiv('disappear');
			}
		}
	}
	const TopBarSection: FC<{
		className?: string;
		containerRef: React.MutableRefObject<HTMLDivElement | null>;
		text: string;
	}> = ({ className, containerRef, text }) => {
		return (
			<div
				className={className ? className : 'topBarButton'}
				onClick={() => {
					scrollToRef(containerRef);
					sethamburgerMenuIsDisplayed(false);
				}}
			>
				{text}
			</div>
		);
	};
	const scrollLinks = (
		<>
			<TopBarSection containerRef={LandingContainer} text="Home" />
			<TopBarSection containerRef={AboutContainer} text="About" />
			<TopBarSection containerRef={OurGoalContainer} text="Our goal" />
			<TopBarSection containerRef={SponsorsContainer} text="Sponsors" />
			<TopBarSection containerRef={DonateContainer} text="Donate" />

		</>
	);
	const hamburgerButton = (
		<div
			className={`hamburgerButton-${
				hamburgerMenuIsDisplayed ? 'active' : 'normal'
			}`}
			onClick={() => sethamburgerMenuIsDisplayed(prev => !prev)}
		>
			<span className="line line-1"></span>
			<span className="line line-2"></span>
			<span className="line line-3"></span>
		</div>
	);
	return (
		<div className="TopBar">
			{TopBarAnimationHandler()}
			{scrollLinks}
			{hamburgerButton}
			{hamburgerMenuIsDisplayed && (
				<div className="hamburgerMenu">{scrollLinks}</div>
			)}
		</div>
	);
};
export default TopBar;
