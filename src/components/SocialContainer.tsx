import React, { useContext } from 'react';
import { appContext } from '../App';
import { appContextType } from '../types';

function Social() {
	const { SocialContainer } = useContext(appContext) as appContextType;
	return (
		<div className="SocialContainer" ref={SocialContainer}>
			<div className="childContainer">
				<div className="subTitle">Social</div>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
				minus, architecto culpa aliquam asperiores quae quas qui expedita
				voluptatem eius molestias. Ipsa a delectus aliquam, laborum nobis
				unde ducimus libero!
			</div>
		</div>
	);
}

export default Social;
