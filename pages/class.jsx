import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import api from '../lib/api';
import React from "react";
import {Container, Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import CustomNav from 'components/CustomNav';
import CustomNavLogin from 'components/CustomNavLogin';


export default function Component() {
	return (
		<>
		<CustomNav/>
		
		<div id='class-title-div'>
			<h3 id='class-title-name'>CSI-4999 - Senior Capstone</h3>
			<h5 id='class-location-link'>Class Location</h5>
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
					<body> test</body>
				</div>
			</div>

			<div id="class-nav-right-container">
				<div id="class-nav-right-div">
					<div class="class-nav-right-item">
						<a href="#">Test1</a>
					</div>



				</div>
			</div>

			
		</div>
		</>
	);
}
