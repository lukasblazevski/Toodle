import Head from 'next/head';
import App from 'next/app'; // @server-only
import { getUserFromCookies } from '../lib/cookies'; // @server-only
import '../styles/globals.scss';
import '../styles/class.scss';
import db from 'lib/db'; // @server-only
import DataContext from 'lib/DataContext';
import CustomNav from 'components/CustomNav';
import RequireLogin from 'components/RequireLogin';
import { SSRProvider } from 'react-bootstrap';

export default function MyApp({ Component, pageProps }) {
	return (
		<SSRProvider>
			<DataContext.Provider value={pageProps.initialProps}>
				<Head>
					<title>Toodle</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<CustomNav />

				<RequireLogin>
					<Component {...pageProps} />
				</RequireLogin>
			</DataContext.Provider>
		</SSRProvider>
	);
}

// @server-only {
MyApp.getInitialProps = async function (appContext) {
	const appProps = await App.getInitialProps(appContext);

	appProps.pageProps.initialProps = {
		classes: []
	};

	const { req, res } = appContext.ctx;

	req.initialProps = appProps.pageProps.initialProps;

	const user = await getUserFromCookies(req, res);
	if (user) {
		req.user = user;

		delete user.password;
		appProps.pageProps.initialProps.user = user;

		const courses = db.collection('courses');

		appProps.pageProps.initialProps.courses = await courses.find({
			$or: [
				{ 'students.email': user.email },
				{ professor: user.email }
			]
		}).toArray();
	}

	return appProps;
};
// @server-only }
