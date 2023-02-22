export default function RelativeDate({ value }) {
	const now = Date.now();
	const dateNumber = +new Date(value);

	const msFromNow = dateNumber - now;
	let minsFromNow = Math.floor(msFromNow / 1000 / 60);

	let hoursFromNow = Math.floor(minsFromNow / 60);
	minsFromNow -= hoursFromNow * 60;

	const daysFromNow = Math.floor(hoursFromNow / 24);
	hoursFromNow -= daysFromNow * 24;

	if (daysFromNow === 0 && hoursFromNow === 0) {
		return <>in {minsFromNow} min</>;
	}

	if (daysFromNow === 0) {
		return <>in {hoursFromNow}h{minsFromNow && `${minsFromNow}m`}</>;
	}

	return <>in {daysFromNow}d{hoursFromNow && `${hoursFromNow}h`}</>;
}
