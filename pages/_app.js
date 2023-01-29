import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Toodle</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Component {...pageProps} />
		</>
	);
}
