import React, { useContext } from 'react';
import { appContext } from '../App';
import { scrollToRef } from '../modules';
import { MOTO, TEAM_NAME } from '../strings';
import { appContextType } from '../types';

export default function LandingContainer() {
	const { LandingContainer, AboutContainer, landingTitleDiv } = useContext(
		appContext
	) as appContextType;

	return (
		<div className="LandingContainer" ref={LandingContainer}>
			<div>
				<div className="title" ref={landingTitleDiv}>{TEAM_NAME}</div>
				<div className="moto">{MOTO}</div>
				<button onClick={() => scrollToRef(AboutContainer)}>
					About our team
				</button>
			</div>
		</div>
	);
}
