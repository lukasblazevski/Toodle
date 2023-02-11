import CustomNav from 'components/CustomNav';
import CustomNavLogin from 'components/CustomNavLogin';

import Head from 'next/head';
import '../styles/globals.scss';
import '../styles/class.scss';


export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Toodle</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CustomNav/>

			<Component {...pageProps} />
		</>
	);
}
