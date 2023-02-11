import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import api from '../lib/api';


export default function Component() {
	return (
		
		<div className="login-container">
			<div className="login-box">
				<h3>Log in to Toodle</h3>

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
					<Form class="login-forum">
						<Field type="text" name="username" id="username" className="up-format" placeholder="Username or Email" required autoFocus />
						<br />
						<br />
						<Field type="password" name="password" id="password" className="up-format" placeholder="Password" required />
						<br />
						<div id="forgot-pass-div">
							<a id="forgot-pass-link" href="#" >
								Forgot Your Password?
							</a>
						</div>
						

						<div>
							<button type="submit" id="login-button">Log In</button>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	);
}
