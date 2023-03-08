import { useRouter } from 'next/router';
import { useContext } from 'react';
import DataContext from './DataContext';

export default function useCourse() {
	const { courses } = useContext(DataContext);
	const router = useRouter();

	const course = courses.find(course => course.id === router.query.courseID);

	return course;
}
