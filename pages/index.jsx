import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import api from '../lib/api';

const Component = () => (
	<>

	<div class="login-container">
		<h2>Log in to Toodle</h2>

		<Formik
			initialValues={{
				username: '',
				password: '',
			}}
			onSubmit={async ({ username, password}) => {
				

				await api.post('/users', { username, password });

				location.href = '/user';
			}}
		>
			<Form>
				<label htmlFor="username">Username: </label>
				<Field type="text" name="username" id="username" required autoFocus autoComplete="off" />
				<br />
				<br />
				<label htmlFor="password">Password: </label>
				<Field type="password" name="password" id="password" required />
				<br />
				<br />
				

				<div>
					<button type="submit" class="login-button">Log In</button> 
				</div>
			</Form>
		</Formik>
		</div>
	</>
);

export default Component;