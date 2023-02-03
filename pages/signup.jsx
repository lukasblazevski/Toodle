import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import api from '../lib/api';

const Component = () => (
	<>
		<h1>Sign Up</h1>
		<br />

		<Formik
			initialValues={{
				username: '',
				password: '',
				confirmPassword: ''
			}}
			onSubmit={async ({ username, password, confirmPassword }) => {
				if (password !== confirmPassword) {
					alert('Error: Passwords do not match');
					return;
				}

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
				<label htmlFor="confirm-password">Confirm: </label>
				<Field type="password" name="confirmPassword" id="confirm-password" required />
				<br />
				<br />
				<br />

				<div>
					<button type="submit">Sign Up</button> <Link href="/">Back to Login</Link>
				</div>
			</Form>
		</Formik>
	</>
);

export default Component;