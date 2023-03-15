import CourseContainer from 'components/CourseContainer';
import Timestamp from 'components/Timestamp';
import { Field, Formik } from 'formik';
import api from 'lib/api';
import DataContext from 'lib/DataContext';
import useCourse from 'lib/useCourse';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

export default function Component() {
	const { user } = useContext(DataContext);

	const course = useCourse();

	const router = useRouter();
	const { itemID } = router.query;
	const item = course.items[itemID];

	const submission = item.submissions.find(submission => submission.student === user.email);

	const addSubmission = () => {
		const fileInput = document.createElement('input');
		fileInput.type = 'file';

		fileInput.addEventListener('change', event => {
			const file = event.target.files[0];
			const reader = new FileReader();
			reader.addEventListener('load', async event => {
				const buffer = event.target.result;

				const { data: { name } } = await api.post(`/attachments/${encodeURIComponent(file.name)}`, buffer);

				await api.post(`/courses/${course.id}/items/${itemID}/submissions`, {
					attachment: name
				});

				location.reload();
			});
			reader.readAsArrayBuffer(file);
		});

		fileInput.click();
	};

	const removeSubmission = async () => {
		await api.delete(`/courses/${course.id}/items/${itemID}/submissions`);

		location.reload();
	};

	const [editing, setEditing] = useState(false);

	const isProfessor = user.email === course.professor;

	if (editing) {
		const initialDueDate = new Date(item.dueDate);

		return (
			<CourseContainer>
				<Formik
					initialValues={{
						name: item.name,
						dueDate: initialDueDate.toLocaleDateString('sv'),
						dueTime: initialDueDate.toLocaleTimeString('sv'),
						description: item.description
					}}
					onSubmit={async values => {
						await api.put(`/courses/${course.id}/items/${itemID}`, values);

						location.reload();
					}}
				>
					<div className='prof-assign-main-div'>
						<div className='prof-assign-title-chng-div'>
							<label htmlFor='prof-assign-title-chng' className="prof-assign-title-chng-lable prof-assign-label">Title:</label>
							<Field type="text" id="prof-assign-title-chng" name="name" placeholder="Enter New Title" size={50} required />
						</div>

						<div className="prof-assign-dates-div">
							<div className="prof-assign-duedate-chng-div">
								<label htmlFor="prof-assign-duedate-chng" className="prof-assign-duedate-chng-label prof-assign-label">Due Date:</label>
								<Field type="date" id="prof-assign-duedate-chng" name="dueDate" required />
								<Field type="time" id="prof-assign-duetime-chng" name="dueTime" required />
							</div>
						</div>

						<div className="prof-assign-desc-chng-div">
							<label htmlFor="prof-assign-desc-chng" className="prof-assign-desc-chng-lable prof-assign-label">Change Description</label>
							<Field as="textarea" name="description" type="text" id="prof-assign-desc-chng" />
						</div>

						<div className='prof-assign-sc-button-div'>
							<button
								type="button"
								className='prof-assign-cancel-button'
								onClick={() => {
									setEditing(false);
								}}
							>
								Cancel
							</button>
							<button type="submit" className='prof-assign-save-button'>
								Save
							</button>
					</div>
					</div>
				</Formik>
			</CourseContainer>
		);
	}

	const professorStuff = isProfessor && (
		<div className='prof-assign-edit-div'>
			<button
				type="button"
				className='prof-assign-edit-button'
				onClick={() => {
					setEditing(true);
				}}
			>
				Edit Assignment Details
			</button>
		</div>
	);

	const studentStuff = !isProfessor && (
		<>
			{submission ? (
				<div>
					<button className='assign-assign-submit-button' onClick={removeSubmission}>
						Remove Submission
					</button>
				</div>
			) : (
				<div>
					<button className='assign-assign-submit-button big' onClick={addSubmission}>
						Add Submission
					</button>
				</div>
			)}

			<div className='assign-status-main'>
				<h4 className='assign-status-header'>Status</h4>

				<div className='assign-status-table'>
					<table className='assign-table-tab'>
						<tbody>
							{submission && (
								<tr>
									<td className='assign-status-table-col1'>Submission:</td>
									<td>
										<a href={`/api/attachments/${encodeURIComponent(submission.attachment)}`} target="_blank">
											{submission.attachment}
										</a>
									</td>
								</tr>
							)}
							<tr>
								<td className='assign-status-table-col1'>Status:</td>
								<td>
									{submission ? (
										'Submitted (not graded)'
									) : (
										'Not Submitted'
									)}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);

	return (
		<CourseContainer>
			<div id="assign-main-div">
				<div className='assign-header'>
					<h1 className='assign-header'>{item.name}</h1>
				</div>

				<div className='assign-table-div'>
					<table className='assign-due-dates'>
						<tbody>
							<tr className='assign-due-dates-row'>
								<td className='assign-due-table-c1'>Opened:</td>
								<td>
									<Timestamp value={item.date} />
								</td>
							</tr>
							<tr className='assign-due-dates-row'>
								<td className='assign-due-table-c1'>Due:</td>
								<td>
									<Timestamp value={item.dueDate} />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='assign-time-remain'>
					<h3 className='assign-time-remain'>
						Due <Timestamp relative value={item.dueDate} />
					</h3>
				</div>

				<div className='assign-assign-body-div'>
					<div className='assign-assign-body'>
						{item.description}
					</div>

					{item.attachments.length !== 0 && (
						<div className='assign-assign-attachments'>
							<ul className='assign-assign-attachments-list'>
								{item.attachments.map(attachment => 'TODO')}
							</ul>
						</div>
					)}
				</div>

				{professorStuff}
				{studentStuff}
			</div>
		</CourseContainer>
	);
}
