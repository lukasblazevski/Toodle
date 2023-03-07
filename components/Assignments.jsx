import { Container, Table } from 'react-bootstrap';

export default function Assignments() {
	return (
		<>
		<div id="asign-main-div">
			<div className='assign-header'>
				<h1 className='assign-header'>Midterm Submission</h1>
			</div>





			<div className='assign-table-div'>
				<table className='assign-due-dates'>
					<tr className='assign-due-dates-row'>
						<td className='assign-due-table-c1'>Opened:</td>
						<td>Wednesday, February 8, 2023, 12:00 AM</td>
					</tr>
					<tr className='assign-due-dates-row'>
						<td className='assign-due-table-c1'>Due:</td>
						<td>Tuesday, March 7, 2023, 11:55 PM</td>
					</tr>

				</table>
			</div>
						<div className='assign-time-remain'>
				<h3 className='assign-time-remain'>1 day, 3 hours remaining</h3>
			</div>
			



			<div className='assign-assign-body-div'>
				<p className='assign-assign-body'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Auctor elit sed vulputate mi sit. Rhoncus est pellentesque elit ullamcorper. Elementum pulvinar etiam non quam lacus. 
				Urna molestie at elementum eu. Suspendisse in est ante in. Velit ut tortor pretium viverra suspendisse potenti nullam. 
				Tristique et egestas quis ipsum suspendisse ultrices. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. 
				Gravida neque convallis a cras. Diam volutpat commodo sed egestas. Erat nam at lectus urna duis convallis convallis.
				</p>

				<div className='assign-assign-attachments'>
					<ul className='assign-assign-attachments-list'>
						<div>File 1.pdf</div>
						<div>File2.pdf</div>
					</ul>
				</div>
			</div>




			<div>
				<button className='assign-assign-submit-button'>Add Submission</button>
			</div>


			<div className='assign-status-main'>
				<h4 className='assign-status-header'>Status</h4>

				<div className='assign-status-table'>
					<table className='assign-table-tab'>
						<tr>
							<td className='assign-status-table-col1'>Status:</td>
							<td>Submitted</td>
						</tr>
						<tr>
							<td className='assign-status-table-col1'>Grade:</td>
							<td>100/120</td>
						</tr>
					</table>
				</div>

			</div>

		</div>
		</>
		);
	}