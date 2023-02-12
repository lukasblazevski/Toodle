import CustomNav from 'components/CustomNav';
import CustomNavLogin from 'components/CustomNavLogin';

import { Field, Form, Formik } from 'formik';
import api from 'lib/api';
import Link from 'next/link';


export default function Component() {
	return (
		<>
		<CustomNavLogin/>
		<div className="login-container">
			<div className="login-box">
				<h3>Log in to Toodle</h3>

				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					onSubmit={async ({ email, password }) => {
						await api.post('/session', {
							email,
							password
						});

						alert('logged in!');
					}}
				>
					<Form className="login-forum">
						<Field type="email" name="email" id="email" className="up-format" placeholder="Email" required autoFocus />
						<br />
						<br />
						<Field type="password" name="password" id="password" className="up-format" placeholder="Password" required />
						<br />


						<div>
							<button type="submit" id="login-button">Log In</button>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
		</>
	);
}
