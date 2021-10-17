import React from "react";

export interface appContextType {
	AboutContainer: React.MutableRefObject<HTMLDivElement | null>
	LandingContainer: React.MutableRefObject<HTMLDivElement | null>
	SocialContainer: React.MutableRefObject<HTMLDivElement | null>
	ContactContainer: React.MutableRefObject<HTMLDivElement | null>
	DonateContainer: React.MutableRefObject<HTMLDivElement | null>
	landingTitleDiv: React.MutableRefObject<HTMLDivElement | null>
	topBarTitle: React.MutableRefObject<HTMLDivElement | null>
	setAssetsLoaded: React.Dispatch<React.SetStateAction<loaded>>
}
export interface loaded{
	Landing: boolean
	About: boolean
	Social: boolean
	Contact: boolean
	Donate: boolean
}