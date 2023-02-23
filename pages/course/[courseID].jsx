import React from "react";
import Classhomepage from 'components/Classhomepage';
import Classannouncements from 'components/Classannouncements'
import Classsyllabus from 'components/Classsyllabus';

export default function Component() {
	return (
		<>
		<div id='class-top-div'>
			<div id='class-title-top-div'>
				<div id='class-title-div'>
					<h3 id='class-title-name'>CSI-3500 - Human Computer Interaction</h3>
					<h5 id='class-location-link'>Class Location</h5>
				</div>
			</div>
			<div id='class-page-contents'>
				<div id="class-page-nav-container">
					<div id="class-item-div">
						<div className='class-sidebar-item'>
							<a href='#'>Home</a>
						</div>
						<div className='class-sidebar-item'>
							<a href='#'>Announcements</a>
						</div>
						<div className='class-sidebar-item'>
							<a href='#'>Assignments</a>
						</div>
						<div className='class-sidebar-item'>
							<a href='#'>People</a>
						</div>
						<div className='class-sidebar-item'>
							<a href='#'>Discussion</a>
						</div>
						<div className='class-sidebar-item'>
							<a href='#'>Syllabus</a>
						</div>
						<div className='class-sidebar-item'>
							<a href='#'>Files</a>
						</div>
						<div className='class-sidebar-item'>
							<a href='#'>Grades</a>
						</div>
						<div className='class-sidebar-item'>
							<a href='#'>Sidebar 9</a>
						</div>
						<div className='class-sidebar-item'>
							<a href='#'>Sidebar 10</a>
						</div>
					</div>


				</div>

				<div id="class-center-box">
					<div id='class-center-container'>
						<Classsyllabus/>
					</div>
				</div>

				<div id="class-nav-right-container">
					<div id="class-nav-right-div">
						<div className="class-nav-right-item">
							<a href="#">Test1</a>
						</div>



					</div>
				</div>


			</div>
		</div>
		</>
	);
}
