import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarContainer() {
	const [selectedDate, setSelectedDate] = useState(new Date());

	return (
		<div className='calendar'>
			<Calendar value={selectedDate} onChange={setSelectedDate} />
		</div>
	);
}
