import React, { FC, useContext, useRef, useState } from 'react';
import { TEAM_NAME } from '../strings';
import { appContext } from '../App';
import { scrollToRef } from '../modules';
import { appContextType } from '../types';

const TopBar: FC<{ displayTitle: boolean }> = ({ displayTitle }) => {
	const {
		AboutContainer,
		LandingContainer,
		SocialContainer,
		ContactContainer,
		topBarTitle,
	} = useContext(appContext) as appContextType;
	const [animated, setAnimated] = useState(false);
	function titleDiv(animation: "appear" | "disappear"): JSX.Element {
		return <div
			className="title"
			style={{ animationName: animation }}
			ref={topBarTitle}
		>
			{TEAM_NAME}
		</div>;
	}
	function TopBarAnimationHandler(): null | JSX.Element {
		if (displayTitle === true) {
			animated === true && setAnimated(false)
			return titleDiv('appear');
		} else {
			if (animated === true) {
				 return null
			} else {
				setTimeout(()=>setAnimated(true),300-10)
				return titleDiv('disappear');
			}

		}
	}
	return (
		<div className="TopBar">
			{TopBarAnimationHandler()}
			<div
				className="topBarButton"
				onClick={() => scrollToRef(LandingContainer)}
			>
				Home
			</div>
			<div
				className="topBarButton"
				onClick={() => scrollToRef(AboutContainer)}
			>
				About
			</div>
			<div
				className="topBarButton"
				onClick={() => scrollToRef(SocialContainer)}
			>
				Social
			</div>
			<div
				className="topBarButton"
				onClick={() => scrollToRef(ContactContainer)}
			>
				Contact
			</div>
		</div>
	);
};
export default TopBar;
