const shortWeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const longWeekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', "Sep", 'Oct', 'Nov', 'Dec'];
const longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', "September", 'October', 'November', 'December'];

export default function Timestamp({ value, relative, short }) {
	const date = new Date(value);

	if (!relative) {
		const weekDays = short ? shortWeekDays : longWeekDays;
		const months = short ? shortMonths : longMonths;

		const hour = date.getHours();
		const amOrPM = hour < 12 ? 'am' : 'pm';

		return <>{weekDays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()} at {(hour % 12) || 12}:{`0${date.getMinutes()}`.slice(-2)}{amOrPM}</>;
	}

	const dateNumber = +date;
	const now = Date.now();

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
