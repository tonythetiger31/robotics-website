import React, { FC, useContext, useState } from 'react';
import { appContext } from '../App';
import { scrollToRef } from '../modules';
import { MOTO, TEAM_NAME } from '../strings';
import { appContextType } from '../types';

const LandingPage: FC<{ backgroundImage: HTMLImageElement }> = ({
	backgroundImage,
}) => {
	const {
		LandingContainer,
		AboutContainer,
		landingTitleDiv,
		setAssetsLoaded,
	} = useContext(appContext) as appContextType;
	const [backGroundImageToBeDisplayed, setbackGroundImageToBeDisplayed] =
		useState('none');
	backgroundImage.onload = () => {
		setAssetsLoaded(prev => {
			if (prev.Landing !== true) {
				var newLoaded = { ...prev }
				newLoaded.Landing = true
				return newLoaded ;
			}
			return prev
		});
		setbackGroundImageToBeDisplayed(backgroundImage.src)
	};

	return (
		<div className="LandingContainer" ref={LandingContainer} style={{
			backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.699), rgba(255, 255, 255, 0.699)), url(${backGroundImageToBeDisplayed})`,
		}} >
			<div>
				<div className="title" ref={landingTitleDiv}>
					{TEAM_NAME}
				</div>
				<div className="moto">{MOTO}</div>
				<button onClick={() => scrollToRef(AboutContainer)}>
					About our team
				</button>
			</div>
		</div>
	);
};
export default LandingPage;
