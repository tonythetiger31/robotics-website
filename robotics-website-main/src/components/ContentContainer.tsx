import React, { FC, useContext, useState } from 'react';
import { appContext } from '../App';
import { appContextType, contentContainerType, loaded } from '../types';
const ContentContainer: FC<contentContainerType> = ({
	content,
	title,
	className,
	elementRef,
	backgroundImage,
	fullContainerAccess,
	imgAssetLoader,
}) => {
	const { setAssetsLoaded } = useContext(appContext) as appContextType;
	const [backGroundImageToBeDisplayed, setbackGroundImageToBeDisplayed] =
		useState('none');
	backgroundImage.onload = () => {
		setAssetsLoaded(prev => {
			if ((prev as any)[imgAssetLoader] !== true) {
				var newLoaded = { ...prev } as any;
				newLoaded[imgAssetLoader] = true;
				return newLoaded as loaded;
			}
			return prev;
		});
		setbackGroundImageToBeDisplayed(backgroundImage.src);
	};
	return (
		<div
			className={`ContentContainer ${className}`}
			style={{
				backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.699), rgba(255, 255, 255, 0.699)), url(${backGroundImageToBeDisplayed})`,
			}}
			ref={elementRef}
		>
			{!fullContainerAccess ? (
				<div className="childContainer">
					<div className="subTitle">{title}</div>
					{content}
				</div>
			) : (
				content
			)}
		</div>
	);
};
export default ContentContainer;
