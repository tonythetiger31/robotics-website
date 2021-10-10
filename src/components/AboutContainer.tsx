import React, { useContext, useRef } from 'react';
import { appContext } from '../App';
import { ABOUT } from '../strings';
import { appContextType } from '../types';

export default function About() {
	const { AboutContainer } = useContext(appContext) as appContextType;

	return (
		<div className="AboutContainer" ref={AboutContainer}>
			<div className="childContainer">
				<div className="subTitle">About</div>
					{ABOUT}
			</div>
		</div>
	);
}
