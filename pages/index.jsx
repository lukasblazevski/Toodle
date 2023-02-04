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
				<Field type="text" name="username" id="username" class="up-format" placeholder="Username or Email" required autoFocus autoComplete="off" />
				<br />
				<br />
				<Field type="password" name="password" id="password" class="up-format" placeholder="Password" required />
				<br />
				<br />
				

				<div>
					<button type="submit" id="login-button">Log In</button> 
				</div>
			</Form>
		</Formik>
		</div>
	</>
);

export default Component;