import Head from 'next/head';
import '../styles/globals.scss';
import '../styles/navbar.scss';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Toodle</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />

			</Head>


			<ul class="navbar">
			<a><img id="navbar-toodle-logo" src="favicon.ico"/> </a>
			<li class="navbar-li">
				<div class="dropdown">
					<button class="dropbtn" id="first-drop-btn">Current Courses <span>&#62;</span> </button>
					<div class="dropdown-content">
					<a href="#">CSI-4999-Capstone</a>
					<a href="#">CSI-4160-Integrated Computing Systems</a>
					<a href="#">CSI-4480-Information Security</a>
					</div>
				</div> 
			</li>
			<li class="navbar-li">
				<div class="dropdown">
					<button class="dropbtn" onclick="window.location.href='https://mysail.oakland.edu';">MySail</button>
					
				</div> 
			</li>
			<li class="navbar-li">
				<div class="dropdown">
					<button class="dropbtn" onclick="window.location.href='https://www2.oakland.edu/secure/esp/';">Get Help</button>
				</div> 
			</li>

			<li class="navbar-li-right">
				<div class="dropdown">
					<a><img class="dropdown" id="nav-profile-photo" src="default_user_profile.svg"/> </a>
					<div class="dropdown-content">
					<div class="dropdown-content-right">
					<a>Preferences</a>
					<a>Logout</a>
					</div>
				</div>
				</div> 
				<a href="https://google.com"><img id="OU-logo" src="OU_Dark.svg"/></a>

			</li>

			

		</ul> 
			<Component {...pageProps} />
		</>
	);
}
