import groupWork from './resources/groupWork.jpg';
import robot from './resources/robot.jpg';
import robot2 from './resources/robot2.jpg';
import sideWaysRobot from './resources/sideWaysRobot.jpg';
import sleepyRobotBall from './resources/sleepyRobotBall.jpg';
import React, { useRef, createContext, useState, useEffect } from 'react';
import LandingPage from './components/LandingContainer';
import TopBar from './components/TopBar';
import { divInView, Loader } from './modules';
import ContentContainer from './components/ContentContainer';
import { ABOUT, DONATE, RESPONSIVENESS_WARNING, OUR_GOAL, NON_PROFIT } from './strings';
import { loaded } from './types';
export const appContext: any = createContext(null);

function App() {
	const [displayTitle, setDisplayTitle] = useState(false);
	const [assetsLoaded, setAssetsLoaded] = useState<loaded>({
		Landing: false,
		About: false,
		OurGoal: false,
		NonProfit: false,
		Donate: false,
	});
	useEffect(() => {
		if (window.innerHeight > window.innerWidth) {
			alert(RESPONSIVENESS_WARNING)
		}
	},[])
	const AboutContainer = useRef<HTMLDivElement>(null),
		LandingContainer = useRef<HTMLDivElement>(null),
		OurGoalContainer = useRef<HTMLDivElement>(null),
		NonProfitContainer = useRef<HTMLDivElement>(null),
		DonateContainer = useRef<HTMLDivElement>(null),
		landingTitleDiv = useRef<HTMLDivElement>(null),
		topBarTitle = useRef<HTMLDivElement>(null),
		allImages: any = {
			groupWork,
			robot,
			robot2,
			sideWaysRobot,
			sleepyRobotBall,
		},
		loadingImages: any = {};

	window.addEventListener('scroll', () => {
		divInView(landingTitleDiv) === true
			? setDisplayTitle(true)
			: setDisplayTitle(false);
	});


	for (var image in allImages) {
		var newImage = new Image();
		newImage.src = allImages[image];
		loadingImages[image] = newImage;
	}
	var allAssetsAreLoaded = true;
	for (var asset in assetsLoaded) {
		(assetsLoaded as any)[asset] === false && (allAssetsAreLoaded = false);
	}

	return (
		<appContext.Provider
		value={{
			AboutContainer,
			LandingContainer,
			OurGoalContainer,
			NonProfitContainer,
			DonateContainer,
			landingTitleDiv,
			topBarTitle,
			setAssetsLoaded,
		}}
		>
			<Loader allAssetsAreLoaded={allAssetsAreLoaded} />
			<div
				className="App"
				style={{ display: `${allAssetsAreLoaded ? 'block' : 'none'}` }}
			>
				<TopBar displayTitle={displayTitle} />
				<LandingPage backgroundImage={loadingImages.groupWork} />
				<ContentContainer
					content={<>{ABOUT}</>}
					title="About"
					className="AboutContainer"
					backgroundImage={loadingImages.robot}
					elementRef={AboutContainer}
					imgAssetLoader="About"
				/>
				<ContentContainer
					content={<>{OUR_GOAL}</>}
					title="Our Goal"
					className="OurGoalContainer"
					backgroundImage={loadingImages.robot2}
					elementRef={OurGoalContainer}
					imgAssetLoader="OurGoal"
				/>
				<ContentContainer
					content={<>{NON_PROFIT}</>}
					title="Non Profit"
					className="NonProfitContainer"
					backgroundImage={loadingImages.sleepyRobotBall}
					elementRef={NonProfitContainer}
					imgAssetLoader="NonProfit"
				/>
				<ContentContainer
					content={<>{DONATE}</>}
					title="Donate"
					className="DonateContainer"
					backgroundImage={loadingImages.sideWaysRobot}
					elementRef={DonateContainer}
					imgAssetLoader="Donate"
				/>
				
			</div>
		</appContext.Provider>
	);
}
export default App;
