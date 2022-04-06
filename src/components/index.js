
function Index() {
    return (
      <div className="Index">
        <div id="preloader">
            <div id="status">
                <div className="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
                </div>
            </div>
        </div>
        <header className="navbar-fixed-top">
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">experience</a></li>
                    <li><a href="#projects">projects</a></li>
                
                </ul>
            </nav>
        </header>
        <div className="section" id="home" data-stellar-background-ratio="0.5">
        <div className="container">
            <div className="disply-table">
                <div className="table-cell" data-aos="fade-up" data-aos-delay="0">
                    <h4>Quách Hà Phương Anh</h4>
                    <h1 style={{ color: 'white'}}>Senior Front End Developer</h1> </div>
            </div>
        </div>
        </div>
        <div className="section" id="about">
        <div className="container">
            <div className="col-md-6" data-aos="fade-up">
                <h4>01</h4>
                <h1 className="size-50">Know <br /> About me</h1>
                <div className="h-50"></div>
                <p>Brithday: 16/08/1989</p>
                <p>Address: 79/32/10 Phạm Viết Chánh F19 Quận Bình Thạnh</p>
                <p>Phone: 0909581321</p>
                <p>Email: family.happy89@gmail.com</p>
            </div>
            <div className="col-md-6 about-img-div">
                <div className="about-border" data-aos="fade-up" data-aos-delay=".5"></div>
                <img src="img/about-img.jpg" width="400" className="img-responsive" alt="" align="right" data-aos="fade-right" data-aos-delay="0" />
            </div>
        </div>
    </div>
    <div className="section" id="experience">
        <div className="container">
            <div className="col-md-12">
                <h4>02</h4>
                <h1 className="size-50">My <br /> Experience</h1>
                <div className="h-50"></div>
            </div>
            <div className="col-md-12">
                <ul className="timeline">
                <li className="timeline-event" data-aos="fade-up">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">11/2021-Now</p>
                            <h3>TAT MART</h3>
                            <h4>Senior Front End Developer</h4>
                            <p>Developer website on PHP,CSCART,HTML,CSS,FIGMA,REACTJS</p>
                        </div>
                    </li>
                <li className="timeline-event" data-aos="fade-up">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">2/2020-10/2021</p>
                            <h3>Intec Việt Nam</h3>
                            <h4>Senior Web Developer</h4>
                            <p>Developer website on ASP.NET VB,HTML,CSS,PHOTOSHOP,FIGMA,REACTJS</p>
                        </div>
                    </li>
               
                <li className="timeline-event" data-aos="fade-up">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">8/2019-1/2020</p>
                            <h3>TransCosmos Technologic Arts</h3>
                            <h4>Senior Web Developer</h4>
                            <p>Developer website on PHP,HTML,CSS,DRUPAL 7,8</p>
                        </div>
                    </li>
                <li className="timeline-event" data-aos="fade-up">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">11/2014-7/2019</p>
                            <h3>NGUYỄN KIM</h3>
                            <h4>Senior Front End Developer</h4>
                            <p>Developer website on PHP,HTML,CSS,PHOTOSHOP,FIGMA,CSCART</p>
                        </div>
                    </li>
                <li className="timeline-event" data-aos="fade-up">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">7/2013-10/2014</p>
                            <h3>Itassist</h3>
                            <h4>Senior Web Developer</h4>
                            <p>Developer website on PHP,HTML,CSS,PHOTOSHOP</p>
                        </div>
                    </li>
                   <li className="timeline-event" data-aos="fade-up">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">7/2011-6/2013</p>
                            <h3>Heart Digital Media JSC</h3>
                            <h4>Senior Web Developer</h4>
                            <p>Developer website on PHP,HTML,CSS,PHOTOSHOP,DRUPAL 6,7</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
    <div className="section" id="projects">
        <div className="container">
            <div className="col-md-12">
                <h4>03</h4>
                <h1 className="size-50">My <br /> Projects</h1> 
            </div>
            <div className="main-container portfolio-inner clearfix">
            <div className="portfolio-div">
                    <div className="portfolio">
                    <div className="categories-grid wow fadeInLeft">
                            <nav className="categories">
                                <ul className="portfolio_filter">
                                    <li><a href="" className="active" data-filter="*">All</a></li>
                                    
                                </ul>
                            </nav>
                        </div>
                <div className="no-padding portfolio_container clearfix" data-aos="fade-up">
                <div className="col-md-4 col-sm-6  fashion logo">
                                <a id="demo01" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/01.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info"> <span>PauJa Group</span></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-6  fashion logo">
                                <a id="demo01" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/02.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info"> <span>Itassist</span></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-6  fashion logo">
                                <a id="demo01" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/03.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info"> <span>Nguyễn Kim</span></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-6  fashion logo">
                                <a id="demo01" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/04.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info"> <span>TutuAntenna</span></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-6  fashion logo">
                                <a id="demo01" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/05.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info"> <span>Renesas</span></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-6  fashion logo">
                                <a id="demo01" href="#animatedModal" className="portfolio_item"> <img src="img/portfolio/06.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info"> <span>TAT Mart</span></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                </div>
                </div>
                </div>
            
            </div>
        </div>
    </div>
      </div>
    );
  }
  
  export default Index;
  