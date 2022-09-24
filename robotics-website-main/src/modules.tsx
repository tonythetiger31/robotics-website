import React, { FC } from 'react';
import { TOP_BAR_HEIGHT } from './strings';

export function scrollToRef(
	ref: React.MutableRefObject<HTMLDivElement | null>
) {
	ref?.current?.scrollIntoView({
		behavior: 'smooth',
		block: 'end',
	});
}
export function divInView(
	div: React.MutableRefObject<HTMLDivElement | null>
): Boolean | undefined {
	if (div && div.current) {
		const divPosition = div.current.getBoundingClientRect();
		const Y_ValToCheckFor =
			divPosition.y + divPosition.height - TOP_BAR_HEIGHT;

		if (Y_ValToCheckFor < 0) {
			return true;
		}
		return false;
	}
	return undefined;
}

const Loader: FC<{ allAssetsAreLoaded: boolean }> = ({
	allAssetsAreLoaded,
}) => {
	//note that each container much have a unique image, idk why it just must or else it wont work
	return (
		<>
			{!allAssetsAreLoaded && (
				<div className="loaderContainer">
					<div className="loader" />
				</div>
			)}
		</>
	);
};
export { Loader };
