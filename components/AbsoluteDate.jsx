const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', "Sep", 'Oct', 'Nov', 'Dec'];

export default function AbsoluteDate({ value }) {
	const date = new Date(value);

	return <>{weekDays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}</>;
}
