import React, { Ref } from 'react';
import ReactDOM from 'react-dom';
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
export function toggleTopBarTitle(
	topBarTitle: React.MutableRefObject<HTMLDivElement | null>,
	setDisplayTitle: React.Dispatch<React.SetStateAction<boolean>>
) {
		console.log('trigger')
}
