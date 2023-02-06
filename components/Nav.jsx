export default function Nav() {
	return (
		<nav>
			<div className="nav-items nav-items-left">
				<a><img id="navbar-toodle-logo" src="favicon.ico"/> </a>
				<div className="nav-item">
					<div className="dropdown">
						<button className="dropbtn" id="first-drop-btn">Current Courses <span>&#62;</span> </button>
						<div className="dropdown-content">
							<a href="#">CSI-4999-Capstone</a>
							<a href="#">CSI-4160-Integrated Computing Systems</a>
							<a href="#">CSI-4480-Information Security</a>
						</div>
					</div>
				</div>
				<div className="nav-item">
					<div className="dropdown">
						<button className="dropbtn" onclick="window.location.href='https://mysail.oakland.edu';">MySail</button>
					</div>
				</div>
				<div className="nav-item">
					<div className="dropdown">
						<button className="dropbtn" onclick="window.location.href='https://www2.oakland.edu/secure/esp/';">Get Help</button>
					</div>
				</div>
			</div>

			<div className="nav-items nav-items-right">
				<div className="dropdown">
					<a><img className="dropdown" id="nav-profile-photo" src="default_user_profile.svg"/> </a>
					<div className="dropdown-content">
						<div className="dropdown-content-right">
							<a>Preferences</a>
							<a>Logout</a>
						</div>
					</div>
				</div>
				<a href="https://google.com"><img id="OU-logo" src="OU_Dark.svg"/></a>
			</div>
		</nav>
	);
}
