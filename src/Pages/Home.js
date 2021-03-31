import React, {Component, loadjs} from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import rotateText from "./Default";

class Home extends Component{

    constructor(props){
        super(props);
    }

    // componentDidMount() {
    //     document.title = "About MA2WEB - Full-Stack Web Developer";
    //     if(window){
    //         rotateText();
    //     }
    //   }
    
    render(){
        return(
            <> 
                <Layout>
                <main>
                {/* <!-- Home Banner --> */}
                <section className="effect-section theme-g-bg">
                    <div className="effect-1 opacity-1">
                        <img src="static/img/effect/style-1.svg" title="" alt="" className="svg_img dark-color" />
                    </div>
                    <div className="svg-bottom">
                        <img src="static/img/effect/divider-4.svg" title="" alt="" className="svg_img gray-color" />
                    </div>
                    <div className="container">
                        <div className="row full-screen align-items-center p-100px-tb justify-content-center">
                            <div className="col-md-7 col-lg-6 m-50px-t m-100px-b md-m-0px-b">
                                <h1 className="display-4 m-10px-b white-color">Build audiance and Grow your Brand</h1>
                                <p className="font-2 white-color-light">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                                <div className="p-20px-t m-btn-wide">
                                    <a className="m-btn m-btn-radius m-btn-t-white m-10px-r" href="#">
                                        <span className="m-btn-inner-text">Sign Up</span>
                                        <span className="m-btn-inner-icon arrow"></span>
                                    </a>
                                    <a className="m-btn m-btn-radius m-btn-white" href="#">
                                        <span className="m-btn-inner-text">Free Try</span>
                                        <span className="m-btn-inner-icon arrow"></span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-6 m-50px-t m-100px-b">
                                <img className="max-width-120" src="static/img/ai-2.png" title="" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Home Banner -->
                <!-- Section --> */}
                <div className="p-0px-t section-top-up-100 gray-bg">
                    <div className="container">
                        <div className="owl-carousel white-bg md-p-25px p-45px border-radius-5 white-bg box-shadow-lg" data-items="7" data-nav-dots="false" data-md-items="6" data-sm-items="5" data-xs-items="4" data-xx-items="3" data-space="30" data-autoplay="true">
                            <div>
                                <img src="static/img/spotify.svg" title="" alt="" />
                            </div>
                            <div>
                                <img src="static/img/slack.svg" title="" alt="" />
                            </div>
                            <div>
                                <img src="static/img/paypal.svg" title="" alt="" />
                            </div>
                            <div>
                                <img src="static/img/airbnb.svg" title="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End section -->
                <!-- Section --> */}
                <section className="section g-bg-gray">
                    <div className="container">
                        <div className="row justify-content-center md-m-25px-b m-40px-b">
                            <div className="col-lg-8 text-center">
                                <div className="d-flex justify-content-center m-15px-b">
                                    <div className=" m-auto white-bg box-shadow d-flex align-items-center p-5px border-radius-5">
                                        <div className="icon-40 border-radius-5 theme-bg white-color">
                                            <i className="fas fa-cog"></i>
                                        </div>
                                        <div className="p-10px-l p-15px-r">Featured Services</div>
                                    </div>
                                </div>
                                <h3 className="h1 m-15px-b">Unlimited power and customization possibilities.</h3>
                                <p className="m-0px font-2">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 m-15px-tb">
                                <div className="theme-bg-alt p10 border-radius-15 text-center hover-top">
                                    <div className="p-30px-b">
                                        <img src="static/img/ai-3.png" title="" alt="" />
                                    </div>
                                    <h5 className="m-15px-b">Built for developers</h5>
                                    <p>Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                                    <div>
                                        <a className="m-link-theme font-w-600" href="#">
                                            Know More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="yellow-bg-alt p10 border-radius-15 text-center hover-top">
                                    <div className="p-30px-b">
                                        <img src="static/img/ai-4.png" title="" alt="" />
                                    </div>
                                    <h5 className="m-15px-b">Built for developers</h5>
                                    <p>Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                                    <div>
                                        <a className="m-link-theme font-w-600" href="#">
                                            Know More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="pink-bg-alt p10 border-radius-15 text-center hover-top">
                                    <div className="p-30px-b">
                                        <img src="static/img/ai-5.png" title="" alt="" />
                                    </div>
                                    <h5 className="m-15px-b">Built for developers</h5>
                                    <p>Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                                    <div>
                                        <a className="m-link-theme font-w-600" href="#">
                                            Know More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section -->
                <!-- Section --> */}
                <section className="section gray-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 m-15px-tb">
                                <h6 className="theme-color m-10px-b">We are Raino</h6>
                                <h3 className="h1 m-20px-b">The most useful resource ever created for designers</h3>
                                <p className="m-0px">Get the ultimate tool and learn how to grow your audience and build an online business.</p>
                                <div className="p-25px-t row">
                                    <div className="col-sm-6">
                                        <ul className="list-type-01">
                                            <li>Data driven quality review</li>
                                            <li>Secure work environment</li>
                                            <li>24x7 coverage</li>
                                            <li>Lifetime updates</li>
                                            <li>Tons of assets</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul className="list-type-01">
                                            <li>Compliance driven process</li>
                                            <li>Workforce management</li>
                                            <li>Management team</li>
                                            <li>Tech support</li>
                                            <li>Integration ready</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-30px-t">
                                    <a className="m-link-theme font-w-500" href="#">Getting Started Docs</a>
                                </div>
                            </div>
                            <div className="col-lg-6 ml-lg-auto align-self-center m-15px-tb">
                                <img className="max-width-120" src="static/img/ai-6.svg" title="" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section -->
                <!-- Section --> */}
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center md-m-25px-b m-40px-b">
                            <div className="col-lg-8 text-center">
                                <h3 className="h1 m-15px-b">Stay focused on your business. Let us handle the design.</h3>
                                <p className="m-0px font-2">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                            </div>
                        </div>
                        <div className="tab-style-5">
                            <div className="row justify-content-center m-35px-b">
                                <div className="col-lg-10">
                                    <ul className="nav nav-fill nav-tabs">
                                        <li className="nav-item">
                                            <a href="#tab5__sec1" data-toggle="tab" className="nav-link active box-shadow-lg">
                                                <span>Discussion</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#tab_5_sec2" data-toggle="tab" className="nav-link box-shadow-lg">
                                                <span>Creative Concept</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#tab_5_sec3" data-toggle="tab" className="nav-link box-shadow-lg">
                                                <span>Production</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-content">
                                {/* <!-- start tab content --> */}
                                <div id="tab5__sec1" className="tab-pane fade in active show">
                                    <div className="row align-items-center justify-content-around">
                                        <div className="col-lg-5 m-15px-tb">
                                            <label className="theme-bg-alt font-small font-w-500 p-20px-lr p-5px-tb theme-color border-radius-15 m-15px-b">Our Portal</label>
                                            <h3 className="h1">Set your priorities and align your teams</h3>
                                            <p className="font-2">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                            <ul className="list-type-01 theme">
                                                <li>
                                                    <h6>Built with customization</h6>
                                                    <p>Get the ultimate tool and learn how to grow your audience and build an online business.</p>
                                                </li>
                                                <li>
                                                    <h6>Quality design and thoughfully</h6>
                                                    <p>Get the ultimate tool and learn how to grow your audience and build an online business.</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 m-15px-tb">
                                            <img className="max-width-120" src="static/img/ai-3.svg" title="" alt="" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end tab content -->
                                <!-- start tab content --> */}
                                <div id="tab_5_sec2" className="tab-pane fade in">
                                    <div className="row flex-row-reverse align-items-center justify-content-around">
                                        <div className="col-lg-6 m-15px-tb">
                                            <img className="max-width-120" src="static/img/ai-4.svg" title="" alt="" />
                                        </div>
                                        <div className="col-lg-5 m-15px-tb">
                                            <label className="theme-bg-alt font-small font-w-500 p-20px-lr p-5px-tb theme-color border-radius-15 m-15px-b">Our Portal</label>
                                            <h3 className="h1">Set your priorities and align your teams</h3>
                                            <p className="font-2">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                            <ul className="list-type-01 theme">
                                                <li>
                                                    <h6>Built with customization</h6>
                                                    <p>Get the ultimate tool and learn how to grow your audience and build an online business.</p>
                                                </li>
                                                <li>
                                                    <h6>Quality design and thoughfully</h6>
                                                    <p>Get the ultimate tool and learn how to grow your audience and build an online business.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end tab content -->
                                <!-- start tab content --> */}
                                <div id="tab_5_sec3" className="tab-pane fade in">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-lg-5 m-15px-tb">
                                            <label className="theme-bg-alt font-small font-w-500 p-20px-lr p-5px-tb theme-color border-radius-15 m-15px-b">Our Portal</label>
                                            <h3 className="h1">Set your priorities and align your teams</h3>
                                            <p className="font-2">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                            <ul className="list-type-01 theme">
                                                <li>
                                                    <h6>Built with customization</h6>
                                                    <p>Get the ultimate tool and learn how to grow your audience and build an online business.</p>
                                                </li>
                                                <li>
                                                    <h6>Quality design and thoughfully</h6>
                                                    <p>Get the ultimate tool and learn how to grow your audience and build an online business.</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 m-15px-tb">
                                            <img className="max-width-120" src="static/img/ai-5.svg" title="" alt="" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end tab content --> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section -->
                <!-- Section --> */}
                <section className="section gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 m-15px-tb lg-p-15px-r p-40px-r m-15px-tb">
                                <h3 className="h1">We help to create visual strategies.</h3>
                                <p className="font-2">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                <div className="p-20px-t">
                                    <div className="skill-lt">
                                        <h6 className="dark-color">HTML5</h6>
                                        <div className="skill-bar">
                                            <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" style={{ width: "92%" }}>
                                                <span>92%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-lt">
                                        <h6 className="dark-color">WordPress</h6>
                                        <div className="skill-bar">
                                            <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{ width: "72%" }}>
                                                <span>75%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-lt">
                                        <h6 className="dark-color">Magento</h6>
                                        <div className="skill-bar">
                                            <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{ width: "86%" }}>
                                                <span>86%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-40px-t">
                                    <a className="m-btn m-btn-radius m-btn-theme" href="#">
                                        <span className="m-btn-inner-text">More About Us</span>
                                        <span className="m-btn-inner-icon arrow"></span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 m-15px-tb">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="p-15px md-p-0px-lr">
                                            <div className="icon-70 white-bg border-radius-5 box-shadow m-20px-b theme-color">
                                                <i className="icon-tools"></i>
                                            </div>
                                            <h5>Powerful Options</h5>
                                            <p className="m-0px">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-15px md-p-0px-lr">
                                            <div className="icon-70 white-bg border-radius-5 box-shadow m-20px-b theme-color">
                                                <i className="icon-heart"></i>
                                            </div>
                                            <h5>Made with Love</h5>
                                            <p className="m-0px">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-15px md-p-0px-lr">
                                            <div className="icon-70 white-bg border-radius-5 box-shadow m-20px-b theme-color">
                                                <i className="icon-layers"></i>
                                            </div>
                                            <h5>Visual Page Builder</h5>
                                            <p className="m-0px">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-15px md-p-0px-lr">
                                            <div className="icon-70 white-bg border-radius-5 box-shadow m-20px-b theme-color">
                                                <i className="icon-expand"></i>
                                            </div>
                                            <h5>User Experience</h5>
                                            <p className="m-0px">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section -->
                <!-- Section --> */}
                <section className="section effect-section">
                    <div className="effect-2">
                        <img src="static/img/effect/style-1.svg" title="" alt="" className="svg_img gray-color" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center md-m-25px-b m-40px-b">
                            <div className="col-lg-8 text-center">
                                <h3 className="h1 m-15px-b">Stay focused on your business. Let us handle the design.</h3>
                                <p className="m-0px font-2">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-lg-6 m-15px-tb">
                                <img className="max-width-120" src="static/img/ai-7.svg" title="" alt="" />
                            </div>
                            <div className="col-lg-5 m-15px-tb">
                                <div className="media box-shadow-lg p5 m-30px-b">
                                    <div className="icon-70 theme-color theme-bg-alt border-radius-50">
                                        <i className="icon-tools"></i>
                                    </div>
                                    <div className="media-body p-15px-l">
                                        <h5>Powerful Options</h5>
                                        <p className="m-0px">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                    </div>
                                </div>
                                <div className="media box-shadow-lg p5 m-30px-b">
                                    <div className="icon-70 green-color green-bg-alt border-radius-50">
                                        <i className="icon-heart"></i>
                                    </div>
                                    <div className="media-body p-15px-l">
                                        <h5>Made with Love</h5>
                                        <p className="m-0px">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                    </div>
                                </div>
                                <div className="media box-shadow-lg p5">
                                    <div className="icon-70 yellow-color yellow-bg-alt border-radius-50">
                                        <i className="icon-layers"></i>
                                    </div>
                                    <div className="media-body p-15px-l">
                                        <h5>Visual Page Builder</h5>
                                        <p className="m-0px">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section -->
                <!-- Section --> */}
                <section className="section effect-section">
                    <div className="mask-65 bg-cover bg-no-repeat" style={{ backgroundImage: "url(static/img/bg-4.jpg)" }}></div>
                    <div className="container">
                        <div className="row md-m-25px-b m-45px-b justify-content-center text-center">
                            <div className="col-lg-7">
                                <h3 className="h1 m-15px-b white-color">How do we create amazing products</h3>
                                <p className="m-0px font-2 white-color-light">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 m-15px-t m-30px-b">
                                <div className="box-shadow-lg white-bg hover-top border-radius-10 text-center">
                                    <div className="icon-70 white-bg theme-color border-radius-10 shadow d-inline-block mt-n3">
                                        <i className="fab fa-apple"></i>
                                    </div>
                                    <div className="p-20px">
                                        <h5>Apple</h5>
                                        <p className="m-0px">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative.</p>
                                        <div className="p-15px-t">
                                            <a className="m-btn m-btn-theme-light m-btn-radius m-btn-sm" href="#">Tye Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 m-15px-t m-30px-b">
                                <div className="box-shadow-lg white-bg hover-top border-radius-10 text-center">
                                    <div className="icon-70 white-bg theme-color border-radius-10 shadow d-inline-block mt-n3">
                                        <i className="fab fa-behance-square"></i>
                                    </div>
                                    <div className="p-20px">
                                        <h5>Behance</h5>
                                        <p className="m-0px">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative.</p>
                                        <div className="p-15px-t">
                                            <a className="m-btn m-btn-theme-light m-btn-radius m-btn-sm" href="#">Tye Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 m-15px-t m-30px-b">
                                <div className="box-shadow-lg white-bg hover-top border-radius-10 text-center">
                                    <div className="icon-70 white-bg theme-color border-radius-10 shadow d-inline-block mt-n3">
                                        <i className="fab fa-google-play"></i>
                                    </div>
                                    <div className="p-20px">
                                        <h5>Google Play</h5>
                                        <p className="m-0px">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative.</p>
                                        <div className="p-15px-t">
                                            <a className="m-btn m-btn-theme-light m-btn-radius m-btn-sm" href="#">Tye Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 m-15px-t m-30px-b">
                                <div className="box-shadow-lg white-bg hover-top border-radius-10 text-center">
                                    <div className="icon-70 white-bg theme-color border-radius-10 shadow d-inline-block mt-n3">
                                        <i className="fab fa-google-drive"></i>
                                    </div>
                                    <div className="p-20px">
                                        <h5>Google Drive</h5>
                                        <p className="m-0px">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative.</p>
                                        <div className="p-15px-t">
                                            <a className="m-btn m-btn-theme-light m-btn-radius m-btn-sm" href="#">Tye Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section -->
                <!-- Section --> */}
                <section className="section p-0px-t">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 m-15px-tb">
                                <img className="max-width-120 float-lg-right" src="static/img/ai-8.svg" title="" alt="" />
                            </div>
                            <div className="col-lg-6 m-15px-tb">
                                <h3 className="h2">Lightning-fast development with pre-built solutions</h3>
                                <p className="font-2">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                <ul className="list-type-03 m-20px-b">
                                    <li>Built with customization</li>
                                    <li>Quality design and thoughfully</li>
                                    <li>Created with the latest technologies</li>
                                </ul>
                                <a className="m-btn m-btn-radius m-btn-theme" href="#">
                                    <span className="m-btn-inner-text">More About Us</span>
                                    <span className="m-btn-inner-icon arrow"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section -->
                <!-- Section --> */}
                <section className="section gray-bg">
                    <div className="container">
                        <div className="row justify-content-center md-m-25px-b m-40px-b">
                            <div className="col-lg-8 text-center">
                                <h3 className="h1 m-15px-b">Number speaks louder than words</h3>
                                <p className="m-0px font-2">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="overflow-hidden border-radius-5">
                                    <a className="video-btn white popup-youtube p-center" href="https://www.youtube.com/watch?v=dNIfsv1rKJo"><span></span></a>
                                    <img src="static/img/bg-3.jpg" title="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section -->
                <!-- Section --> */}
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center md-m-25px-b m-40px-b">
                            <div className="col-lg-8 text-center">
                                <h3 className="h1 m-15px-b">Our pricing plans</h3>
                                <p className="m-0px font-2">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow-hover white-bg border-radius-10 hover-top card">
                                    <div className="p-25px-lr p-50px-t">
                                        <ul className="list-type-01 theme">
                                            <li>Drag &amp; Drop Builder</li>
                                            <li>1,000s of Templates Ready</li>
                                            <li>Blog Tools</li>
                                            <li>eCommerce Store</li>
                                            <li>30+ Webmaster Tools</li>
                                        </ul>
                                        <div className="text-center p-25px-t">
                                            <h6 className="p-25px-lr p-5px-tb border-radius-5 theme-bg d-inline-block white-color font-w-400">Basic</h6>
                                        </div>
                                    </div>
                                    <div className="text-center p-25px">
                                        <h5 className="display-2 font-w-200 dark-color d-flex align-items-center justify-content-center m-0px"><sup className="h2 m-0px-b font-w-300">$</sup>49<span className="h3 font-w-200 theme-color mt-auto">/Mo</span></h5>
                                        <p className="m-0px p-10px-t font-w-300 font-2">Per user</p>
                                    </div>
                                    <div className="p-30px-lr p-50px-b">
                                        <a className="m-btn w-100 m-btn-t-theme m-btn-radius" href="#">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow-hover theme-bg border-radius-10 hover-top">
                                    <div className="p-25px-lr p-50px-t">
                                        <ul className="list-type-01 white white-color">
                                            <li>Drag &amp; Drop Builder</li>
                                            <li>1,000s of Templates Ready</li>
                                            <li>Blog Tools</li>
                                            <li>eCommerce Store</li>
                                            <li>30+ Webmaster Tools</li>
                                        </ul>
                                        <div className="text-center p-25px-t">
                                            <h6 className="p-25px-lr p-5px-tb border-radius-5 white-bg d-inline-block theme-color font-w-400">Basic</h6>
                                        </div>
                                    </div>
                                    <div className="text-center p-25px">
                                        <h5 className="display-2 font-w-200 dark-color d-flex align-items-center justify-content-center m-0px white-color"><sup className="h2 m-0px-b font-w-300">$</sup>49<span className="h3 font-w-200 mt-auto">/Mo</span></h5>
                                        <p className="m-0px p-10px-t font-w-300 font-2 white-color-light">Per user</p>
                                    </div>
                                    <div className="p-30px-lr p-50px-b">
                                        <a className="m-btn w-100 m-btn-t-white m-btn-radius" href="#">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow-hover white-bg border-radius-10 hover-top card">
                                    <div className="p-25px-lr p-50px-t">
                                        <ul className="list-type-01 theme">
                                            <li>Drag &amp; Drop Builder</li>
                                            <li>1,000s of Templates Ready</li>
                                            <li>Blog Tools</li>
                                            <li>eCommerce Store</li>
                                            <li>30+ Webmaster Tools</li>
                                        </ul>
                                        <div className="text-center p-25px-t">
                                            <h6 className="p-25px-lr p-5px-tb border-radius-5 theme-bg d-inline-block white-color font-w-400">Basic</h6>
                                        </div>
                                    </div>
                                    <div className="text-center p-25px">
                                        <h5 className="display-2 font-w-200 dark-color d-flex align-items-center justify-content-center m-0px"><sup className="h2 m-0px-b font-w-300">$</sup>49<span className="h3 font-w-200 theme-color mt-auto">/Mo</span></h5>
                                        <p className="m-0px p-10px-t font-w-300 font-2">Per user</p>
                                    </div>
                                    <div className="p-30px-lr p-50px-b">
                                        <a className="m-btn w-100 m-btn-t-theme m-btn-radius" href="#">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section -->
                <!-- Section --> */}
                <section className="section gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 m-15px-tb">
                                <h3 className="h1 m-15px-b">This is what our esteemed clients have to say</h3>
                                <p className="m-0px font-2">There are many variations of lorem passages of Lorem Ipsum available, but the majority.</p>
                            </div>
                            <div className="col-lg-7 m-15px-tb">
                                <div className="owl-carousel" data-items="2" data-nav-dots="true" data-md-items="2" data-sm-items="2" data-xs-items="1" data-xx-items="1" data-space="20" data-autoplay="true">
                                    <div className="card p-25px box-shadow m-20px-b">
                                        <p className="m-0px">I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.</p>
                                        <div className="media m-20px-t">
                                            <div className="avatar-60 border-radius-50">
                                                <img src="static/img/avatra-1.jpg" alt="" title="" />
                                            </div>
                                            <div className="media-body p-15px-l align-self-center">
                                                <h6 className="m-0px">Shoko Mugikura</h6>
                                                <span className="font-small">Graphic Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card p-25px box-shadow m-20px-b">
                                        <p className="m-0px">I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.</p>
                                        <div className="media m-20px-t">
                                            <div className="avatar-60 border-radius-50">
                                                <img src="static/img/avatra-1.jpg" alt="" title="" />
                                            </div>
                                            <div className="media-body p-15px-l align-self-center">
                                                <h6 className="m-0px">Shoko Mugikura</h6>
                                                <span className="font-small">Graphic Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card p-25px box-shadow m-20px-b">
                                        <p className="m-0px">I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.</p>
                                        <div className="media m-20px-t">
                                            <div className="avatar-60 border-radius-50">
                                                <img src="static/img/avatra-1.jpg" alt="" title="" />
                                            </div>
                                            <div className="media-body p-15px-l align-self-center">
                                                <h6 className="m-0px">Shoko Mugikura</h6>
                                                <span className="font-small">Graphic Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card p-25px box-shadow m-20px-b">
                                        <p className="m-0px">I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.</p>
                                        <div className="media m-20px-t">
                                            <div className="avatar-60 border-radius-50">
                                                <img src="static/img/avatra-1.jpg" alt="" title="" />
                                            </div>
                                            <div className="media-body p-15px-l align-self-center">
                                                <h6 className="m-0px">Shoko Mugikura</h6>
                                                <span className="font-small">Graphic Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section -->
                <!-- Section --> */}
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center md-m-25px-b m-40px-b">
                            <div className="col-lg-8 text-center">
                                <h3 className="h1 m-15px-b">Trending blogs & articles</h3>
                                <p className="m-0px font-2">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 m-15px-tb">
                                <div className="hover-top card box-shadow-only-hover overflow-hidden">
                                    <div>
                                        <a href="#">
                                            <img src="static/img/blog-3.jpg" title="" alt="" />
                                        </a>
                                    </div>
                                    <div className="p-20px">
                                        <label className="font-small">Nancy Bayers – 10 hours ago</label>
                                        <h5 className="m-10px-b font-w-600"><a className="dark-color" href="#">How to make trust your competitive advantage</a></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                        <div className="nav font-small border-top-1 border-color-dark-gray p-15px-t">
                                            <a className="m-15px-r body-color font-w-500" href="#"><i className="fas fa-calendar-alt "></i> 30 Aug, 2019</a>
                                            <a className="body-color font-w-500" href="#"><i className="fas fa-comments"></i> 8</a>
                                            <a className="body-color font-w-500 ml-auto" href="#">Read More <i className="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="hover-top card box-shadow-only-hover overflow-hidden">
                                    <div>
                                        <a href="#">
                                            <img src="static/img/blog-5.jpg" title="" alt="" />
                                        </a>
                                    </div>
                                    <div className="p-20px">
                                        <label className="font-small">Nancy Bayers – 10 hours ago</label>
                                        <h5 className="m-10px-b font-w-600"><a className="dark-color" href="#">How to make trust your competitive advantage</a></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                        <div className="nav font-small border-top-1 border-color-dark-gray p-15px-t">
                                            <a className="m-15px-r body-color font-w-500" href="#"><i className="fas fa-calendar-alt "></i> 30 Aug, 2019</a>
                                            <a className="body-color font-w-500" href="#"><i className="fas fa-comments"></i> 8</a>
                                            <a className="body-color font-w-500 ml-auto" href="#">Read More <i className="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="hover-top card box-shadow-only-hover overflow-hidden">
                                    <div>
                                        <a href="#">
                                            <img src="static/img/blog-1.jpg" title="" alt="" />
                                        </a>
                                    </div>
                                    <div className="p-20px">
                                        <label className="font-small">Nancy Bayers – 10 hours ago</label>
                                        <h5 className="m-10px-b font-w-600"><a className="dark-color" href="#">How to make trust your competitive advantage</a></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                        <div className="nav font-small border-top-1 border-color-dark-gray p-15px-t">
                                            <a className="m-15px-r body-color font-w-500" href="#"><i className="fas fa-calendar-alt "></i> 30 Aug, 2019</a>
                                            <a className="body-color font-w-500" href="#"><i className="fas fa-comments"></i> 8</a>
                                            <a className="body-color font-w-500 ml-auto" href="#">Read More <i className="fas fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section --> */}
            </main>
                </Layout>
            </>
        );
    };
}

export default Home;