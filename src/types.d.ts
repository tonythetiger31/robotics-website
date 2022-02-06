import React from "react";

export interface appContextType {
	AboutContainer: React.MutableRefObject<HTMLDivElement | null>
	LandingContainer: React.MutableRefObject<HTMLDivElement | null>
	OurGoalContainer: React.MutableRefObject<HTMLDivElement | null>
	DonateContainer: React.MutableRefObject<HTMLDivElement | null>
	SponsorsContainer: React.MutableRefObject<HTMLDivElement | null>
	landingTitleDiv: React.MutableRefObject<HTMLDivElement | null>
	topBarTitle: React.MutableRefObject<HTMLDivElement | null>
	setAssetsLoaded: React.Dispatch<React.SetStateAction<loaded>>
}
export interface loaded{
	Landing: boolean
	About: boolean
	OurGoal: boolean
	Donate: boolean
	Sponsors: boolean
}
export type contentContainerType = {
		title: string;
		className: string;
		imgAssetLoader: string;
		backgroundImage: HTMLImageElement;
		elementRef: React.MutableRefObject<HTMLDivElement | null>;
		fullContainerAccess?: boolean;
		content: JSX.Element;
	}