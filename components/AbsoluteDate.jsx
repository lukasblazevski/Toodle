const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', "Sep", 'Oct', 'Nov', 'Dec'];

export default function AbsoluteDate({ value }) {
	const date = new Date(value);

	const hour = date.getHours();
	const amOrPM = hour < 12 ? 'am' : 'pm';

	return <>{weekDays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()} at {(hour % 12) || 12}:{`0${date.getMinutes()}`.slice(-2)}{amOrPM}</>;
}
