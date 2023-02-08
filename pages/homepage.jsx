var NewComponent = React.createClass({
	render: function() {
	  return (
		<div>
		  <meta charSet="utf-8" />
		  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
		  <meta name="viewport" content="width=device-width, initial-scale=1" />    
		  <title>Oakland University</title>
		  <link rel="shortcut icon" href="../public/img/ou_logo.png" type="Oakland University Logo" />
		  {/* Font awesome */}
		  <link href="../public/css/font-awesome.css" rel="stylesheet" />
		  {/* Bootstrap */}
		  <link href="../public/css/bootstrap.css" rel="stylesheet" />   
		  {/* Slick slider */}
		  <link rel="stylesheet" type="text/css" href="../public/css/slick.css" />          
		  {/* Fancybox slider */}
		  <link rel="stylesheet" href="../public/css/jquery.fancybox.css" type="text/css" media="screen" /> 
		  {/* Theme color */}
		  <link id="switcher" href="../public/css/theme-color/default-theme.css" rel="stylesheet" />  
		  {/* Main style sheet */}
		  <link href="../public/css/style.css" rel="stylesheet" />    
		  {/* Google Fonts */}
		  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
		  <link href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,300,300italic,500,700" rel="stylesheet" type="text/css" />
		  {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
		  {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
		  {/*[if lt IE 9]>
		
		
	  <![endif]*/}
		  {/*START SCROLL TOP BUTTON */}
		  <a className="scrollToTop" href="#">
			<i className="fa fa-angle-up" />      
		  </a>
		  {/* END SCROLL TOP BUTTON */}
		  {/* Start header  */}
		  <header id="mu-header">
			<div className="container">
			  <div className="row">
				<div className="col-lg-12 col-md-12">
				  <div className="mu-header-area">
					<div className="row">
					  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="mu-header-top-left">
						  <div className="mu-top-email">
							<i className="fa fa-envelope" />
							<span>@oakland.edu</span>
						  </div>
						  <div className="mu-top-phone">
							<i className="fa fa-phone" />
							<span>(248) 370-2100</span>
						  </div>
						</div>
					  </div>
					  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="mu-header-top-right">
						  <nav>
							<ul className="mu-top-social-nav">
							  <li><a href="#"><span className="fa fa-facebook" /></a></li>
							  <li><a href="#"><span className="fa fa-twitter" /></a></li>
							  <li><a href="#"><span className="fa fa-google-plus" /></a></li>
							  <li><a href="#"><span className="fa fa-linkedin" /></a></li>
							  <li><a href><span className="fa fa-youtube" /></a></li>
							</ul>
						  </nav>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </header>
		  {/* End header  */}
		  {/* Start menu */}
		  <section id="mu-menu">
			<nav className="navbar navbar-default" role="navigation">  

			  {/*put nav bar HERE */}

			</nav>
		  </section>
		  {/* End menu */}
		
		  {/* Page breadcrumb */}
		  <section id="mu-page-breadcrumb">
			<div className="container">
			  <div className="row">
				<div className="col-md-12">
				  <div className="mu-page-breadcrumb-area">
					<h2>Gallery</h2>
					<ol className="breadcrumb">
					  <li><a href="#">Home</a></li>            
					  <li className="active">Courses</li>
					</ol>
				  </div>
				</div>
			  </div>
			</div>
		  </section>
		  {/* End breadcrumb */}
		  {/* Start gallery  */}
		  <section id="mu-gallery">
			<div className="container">
			  <div className="row">
				<div className="col-md-12">
				  <div className="mu-gallery-area">
					{/* start title */}
					<div className="mu-title">
					  <h2>Courses</h2>
					  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ut laboriosam corporis doloribus, officia, accusamus illo nam tempore totam alias!</p>
					</div>
					{/* end title */}
					{/* start gallery content */}
					<div className="mu-gallery-content">
					  {/* Start gallery menu */}
					  <div className="mu-gallery-top">              
						<ul>
						  <li className="filter active" data-filter="all">All</li>
						  <li className="filter" data-filter=".lab">CSI</li>
						  <li className="filter" data-filter=".classroom">LAB</li>
						  <li className="filter" data-filter=".library">OTHER</li>
						</ul>
					  </div>
					  {/* End gallery menu */}
					  <div className="mu-gallery-body">
						<ul id="mixit-container" className="row">
						  {/* start single gallery image */}
						  <li className="col-md-4 col-sm-6 col-xs-12 mix lab">
							<div className="mu-single-gallery">                  
							  <div className="mu-single-gallery-item">
								<div className="mu-single-gallery-img">
								  <a href="#"><img alt="img" src="../public/img/gallery/small/1.jpg" /></a>
								</div>
								<div className="mu-single-gallery-info">
								  <div className="mu-single-gallery-info-inner">
									<h4>Image Title</h4>
									<p>Web Design</p>
									<a href="../public/img/gallery/big/1.jpg" data-fancybox-group="gallery" className="fancybox"><span className="fa fa-eye" /></a>
									<a href="#" className="aa-link"><span className="fa fa-link" /></a>
								  </div>
								</div>                  
							  </div>
							</div>
						  </li>
						  {/* start single gallery image */}
						  <li className="col-md-4 col-sm-6 col-xs-12 mix classroom">
							<div className="mu-single-gallery">                  
							  <div className="mu-single-gallery-item">
								<div className="mu-single-gallery-img">
								  <a href="#"><img alt="img" src="../public/img/gallery/small/4.jpg" /></a>
								</div>
								<div className="mu-single-gallery-info">
								  <div className="mu-single-gallery-info-inner">
									<h4>Image Title</h4>
									<p>English</p>
									<a href="../public/img/gallery/big/4.jpg" data-fancybox-group="gallery" className="fancybox"><span className="fa fa-eye" /></a>
									<a href="#" className="aa-link"><span className="fa fa-link" /></a>
								  </div>
								</div>
							  </div>
							</div>
						  </li>
						  {/* start single gallery image */}
						  <li className="col-md-4 col-sm-6 col-xs-12 mix others">
							<div className="mu-single-gallery">                  
							  <div className="mu-single-gallery-item">
								<div className="mu-single-gallery-img">
								  <a href="#"><img alt="img" src="../public/img/gallery/small/5.jpg" /></a>
								</div>
								<div className="mu-single-gallery-info">
								  <div className="mu-single-gallery-info-inner">
									<h4>Image Title</h4>
									<p>Graphics</p>
									<a href="../public/img/gallery/big/5.jpg" data-fancybox-group="gallery" className="fancybox"><span className="fa fa-eye" /></a>
									<a href="#" className="aa-link"><span className="fa fa-link" /></a>
								  </div>
								</div>
							  </div>
							</div>
						  </li>
						  {/* start single gallery image */}
						  <li className="col-md-4 col-sm-6 col-xs-12 mix others">
							<div className="mu-single-gallery">                  
							  <div className="mu-single-gallery-item">
								<div className="mu-single-gallery-img">
								  <a href="#"><img alt="img" src="../public/img/gallery/small/7.jpg" /></a>
								</div>
								<div className="mu-single-gallery-info">
								  <div className="mu-single-gallery-info-inner">
									<h4>Image Title</h4>
									<p>Sports</p>
									<a href="../public/img/gallery/big/7.jpg" data-fancybox-group="gallery" className="fancybox"><span className="fa fa-eye" /></a>
									<a href="#" className="aa-link"><span className="fa fa-link" /></a>
								  </div>
								</div>             
							  </div>
							</div> 
						  </li>
						  {/* start single gallery image */}
						  <li className="col-md-4 col-sm-6 col-xs-12 mix lab">
							<div className="mu-single-gallery">                  
							  <div className="mu-single-gallery-item">
								<div className="mu-single-gallery-img">
								  <a href="#"><img alt="img" src="../public/img/gallery/small/9.jpg" /></a>
								</div>
								<div className="mu-single-gallery-info">
								  <div className="mu-single-gallery-info-inner">
									<h4>Image Title</h4>
									<p>Sports</p>
									<a href="../public/img/gallery/big/9.jpg" data-fancybox-group="gallery" className="fancybox"><span className="fa fa-eye" /></a>
									<a href="#" className="aa-link"><span className="fa fa-link" /></a>
								  </div>
								</div>             
							  </div>
							</div> 
						  </li>
						</ul>            
					  </div>
					</div>
					{/* end gallery content */}
				  </div>
				</div>
			  </div>
			</div>
		  </section>
		  {/* End gallery  */}
		  {/* Start footer -Change this section to Upcoming assignments */}
		  <footer id="mu-footer">
			{/* start footer top */}
			<div className="mu-footer-top">
			  <div className="container">
				<div className="mu-footer-top-area">
				  <div className="row">
					<div className="col-lg-3 col-md-3 col-sm-3">
					  <div className="mu-footer-widget">
						<h4>Information</h4>
						<ul>
						  <li><a href="#">About Us</a></li>
						  <li><a href>Event</a></li>
						  <li><a href>Sitemap</a></li>
						</ul>
					  </div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-3">
					  <div className="mu-footer-widget">
						<h4>Student Help</h4>
						<ul>
						  <li><a href>Get Started</a></li>
						  <li><a href="#">My Questions</a></li>
						  <li><a href>My Courses</a></li>
						  <li><a href>Academic News</a></li>                  
						</ul>
					  </div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-3">
					  <div className="mu-footer-widget">
						<h4>News letter</h4>
						<p>Get latest update, news &amp; academic offers</p>
						<form className="mu-subscribe-form">
						  <input type="email" placeholder="Type your Email" />
						  <button className="mu-subscribe-btn" type="submit">Subscribe!</button>
						</form>               
					  </div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-3">
					  <div className="mu-footer-widget">
						<h4>Contact</h4>
						<address>
						  <p>Phone: (248) 530-3741 </p>
						  <p>Email: adonaghy@oakland.edu</p>
						</address>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
			{/* end footer top */}
			{/* start footer bottom */}
			<div className="mu-footer-bottom">
			  <div className="container">
				<div className="mu-footer-bottom-area">
				  <p>© All Right Reserved. Toodle</p>
				</div>
			  </div>
			</div>
			{/* end footer bottom */}
		  </footer>
		  {/* End footer */}
		  {/* jQuery library */}
		  {/* Include all compiled plugins (below), or include individual files as needed */}
		  {/* Slick slider */}
		  {/* Counter */}
		  {/* Mixit slider */}
		  {/* Add fancyBox */}        
		  {/* Custom js */}
		</div>
	  );
	}
  });