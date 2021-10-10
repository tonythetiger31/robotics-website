import React, { useContext } from 'react';
import { appContext } from '../App';
import { appContextType } from '../types';

function Contact() {
	const { ContactContainer } = useContext(appContext) as appContextType;
	return (
		<div className="ContactContainer" ref={ContactContainer}>
			<div className="childContainer">
				<div className="subTitle">Contact</div>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
				voluptas nam asperiores iusto eaque minima quos ratione labore autem
				exercitationem tenetur ab, quia voluptates consectetur et hic fugit.
				Porro, ex?
			</div>
		</div>
	);
}

export default Contact;
