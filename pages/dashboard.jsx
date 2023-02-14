import CustomNav from 'components/CustomNav';

export default function Component() {
	return (
		<>
		<CustomNav/>
		<div id='dash-main-div'>
		  
		  <main id='dash-main'>
			<h2 id='dash-course-name'>Courses</h2>
			<ul className='dash-class-list'>
			  <div className='dash-class-container'>
				<div className='dash-class-title'>
					<h3>CSI 3620</h3>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing edivt.</p>
				<a href="#">Join Zoom Meeting</a>
			  </div>
			  <div className='dash-class-container'>
				<h3>CSI 3370</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing edivt.</p>
				<a href="#">Join Zoom Meeting</a>
			  </div>
			  <div className='dash-class-container'>
				<h3>CSI 4999</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing edivt.</p>
				<a href="#">Join Zoom Meeting</a>
			  </div>
			</ul>
		  </main>
		  <footer id='dash-footer'>
			<h2 id='dash-upcoming-assignments-name'>Upcoming Assignments</h2>
			<ul className='dash-upcoming-assignments-list'>
			  <div className='class-container-time'>
				CSI 3370 Report 2
				&nbsp;
				Due In: 2 days
			  </div>
			  <div className='class-container-time'>
				CSI 3370 HW 2
				&nbsp;
				Due In: 3 days
			  </div>
			  <div className='class-container-time'>
				CSI 4999 Report 3
				&nbsp;
				Due In: 7 days
			  </div>
			</ul>
		  </footer>
		</div>
		</>
		);
	}