import React, { useRef, createContext, useState } from 'react';
import LandingPage from './components/LandingContainer';
import TopBar from './components/TopBar';
import About from './components/AboutContainer';
import Social from './components/SocialContainer';
import Contact from './components/ContactContainer';
import { divInView, toggleTopBarTitle } from './modules';

export const appContext: any = createContext(null);

function App() {
	const [displayTitle, setDisplayTitle] = useState(false)
	const AboutContainer = useRef<HTMLDivElement>(null),
		LandingContainer = useRef<HTMLDivElement>(null),
		SocialContainer = useRef<HTMLDivElement>(null),
		ContactContainer = useRef<HTMLDivElement>(null),
		landingTitleDiv = useRef<HTMLDivElement>(null),
		topBarTitle = useRef<HTMLDivElement>(null);

	window.addEventListener('scroll', () => {
		divInView(landingTitleDiv) === true ? setDisplayTitle(true): setDisplayTitle(false) ;
	});

	return (
		<appContext.Provider
			value={{
				AboutContainer,
				LandingContainer,
				SocialContainer,
				ContactContainer,
				landingTitleDiv,
				topBarTitle,
			}}
		>
			<div className="App">
				<TopBar displayTitle={displayTitle}/>
				<LandingPage />
				<About />
				<Social />
				<Contact />
			</div>
		</appContext.Provider>
	);
}

export default App;
