import CustomNav from 'components/CustomNav';

export default function Component() {
	return (
		<>
		<CustomNav/>
		<div>
		  
		  <main>
			<h2>Courses</h2>
			<ul>
			  <li>
				<h3>CSI 3620</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="#">Join Zoom Meeting</a>
			  </li>
			  <li>
				<h3>CSI 3370</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="#">Join Zoom Meeting</a>
			  </li>
			  <li>
				<h3>CSI 4999</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<a href="#">Join Zoom Meeting</a>
			  </li>
			</ul>
		  </main>
		  <footer>
			<h2>Upcoming Assignments</h2>
			<ul>
			  <li>
				CSI 3370 Report 2
				<br />
				Due In: 2 days
			  </li>
			  <li>
				CSI 3370 HW 2
				<br />
				Due In: 3 days
			  </li>
			  <li>
				CSI 4999 Report 3
				<br />
				Due In: 7 days
			  </li>
			</ul>
		  </footer>
		</div>
		</>
		);
	}