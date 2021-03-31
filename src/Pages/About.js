import React, { Comonent, Component } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

class About extends Component{
    render(){
        return(
            <>
            <Layout>
            <main>
            {/* <!-- Home Banner --> */}
            <section className="section parallax effect-section" style={{ backgroundImage: "url(static/img/bg-2.jpg)" }}>
                <div className="mask dark-bg opacity-8"></div>
                <div className="container position-relative">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="display-4 white-color m-0px">About us</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Home Banner -->
            <!-- Section --> */}
            <section className="section border-style bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 m-15px-tb">
                            <div className="overflow-hidden border-radius-5 box-shadow">
                                <img src="static/img/ai-2.svg" title="" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 m-15px-tb">
                            <div className="p-40px-lr lg-p-0px-lr">
                                <h6 className="theme-color m-10px-b">Wide range of web development services</h6>
                                <h2 className="h2 m-20px-b">We know that good design means good business.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <div className="p-10px-t">
                                    <Link className="m-btn m-btn-radius m-btn-theme" to="/services">
                                        <span className="m-btn-inner-text">Our Services</span>
                                        <span className="m-btn-inner-icon arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Home Banner -->
            <!-- Section --> */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 lg-m-15px-tb">
                            <div className="media">
                                <div className="only-icon-50 theme-color">
                                    <i className="icon-tools"></i>
                                </div>
                                <div className="media-body p-15px-l">
                                    <h6 className="m-5px-b">Pixel Perfect Design</h6>
                                    <p className="m-0px">Lorem Ipsum is simply text the printing and typesetting.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 lg-m-15px-tb">
                            <div className="media">
                                <div className="only-icon-50 theme-color">
                                    <i className="icon-layers"></i>
                                </div>
                                <div className="media-body p-15px-l">
                                    <h6 className="m-5px-b">Full Documentation</h6>
                                    <p className="m-0px">Lorem Ipsum is simply text the printing and typesetting.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 lg-m-15px-tb">
                            <div className="media">
                                <div className="only-icon-50 theme-color">
                                    <i className="icon-scissors"></i>
                                </div>
                                <div className="media-body p-15px-l">
                                    <h6 className="m-5px-b">Reasonable Pricing</h6>
                                    <p className="m-0px">Lorem Ipsum is simply text the printing and typesetting.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 lg-m-15px-tb">
                            <div className="media">
                                <div className="only-icon-50 theme-color">
                                    <i className="icon-lock"></i>
                                </div>
                                <div className="media-body p-15px-l">
                                    <h6 className="m-5px-b">User-friendly Admin</h6>
                                    <p className="m-0px">Lorem Ipsum is simply text the printing and typesetting.</p>
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
                        <div className="col-lg-4 m-15px-tb">
                            <div className="card card-body box-shadow-lg hover-top theme-bg border-0">
                                <div className="media m-20px-b">
                                    <div className="only-icon-70 white-color font-w-700">
                                        01.
                                    </div>
                                    <div className="media-body p-15px-l  border-left-1 border-color-white-alt m-15px-l">
                                        <h6 className="h5 m-0px white-color">Technology.<br /> Expert analysis</h6>
                                    </div>
                                </div>
                                <p className="m-0px white-color-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 m-15px-tb">
                            <div className="card card-body box-shadow-lg hover-top theme-bg border-0">
                                <div className="media m-20px-b">
                                    <div className="only-icon-70 white-color font-w-700">
                                        02.
                                    </div>
                                    <div className="media-body p-15px-l  border-left-1 border-color-white-alt m-15px-l">
                                        <h6 className="h5 m-0px white-color">Technology.<br/> Expert analysis</h6>
                                    </div>
                                </div>
                                <p className="m-0px white-color-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 m-15px-tb">
                            <div className="card card-body box-shadow-lg hover-top theme-bg border-0">
                                <div className="media m-20px-b">
                                    <div className="only-icon-70 white-color font-w-700">
                                        03.
                                    </div>
                                    <div className="media-body p-15px-l  border-left-1 border-color-white-alt m-15px-l">
                                        <h6 className="h5 m-0px white-color">Technology.<br/> Expert analysis</h6>
                                    </div>
                                </div>
                                <p className="m-0px white-color-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Section -->
            <!-- Section --> */}
            <section className="section">
                <div className="container">
                    <div className="row md-m-25px-b m-40px-b justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h6 className="body-color font-w-400 m-20px-b">About Digital Agency</h6>
                            <h3 className="font-w-400">Raino is a HTML5 template based on Sass and Bootstrap 4 with <mark className="font-w-700">modern and creative multipurpose</mark> design you can use it as a startups.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md m-15px-tb">
                            <div className="min-h-250px bg-cover bg-no-repeat border-radius-5 box-shadow" style={{ backgroundImage: "url(static/img/blog-1.jpg)" }}>
                            </div>
                        </div>
                        <div className="col-md-3 m-15px-tb">
                            <div className="min-h-250px bg-cover bg-no-repeat border-radius-5 box-shadow" style={{ backgroundImage: "url(static/img/blog-2.jpg)"  }}>
                            </div>
                        </div>
                        <div className="col-md m-15px-tb">
                            <div className="min-h-250px bg-cover bg-no-repeat border-radius-5 box-shadow" style={{ backgroundimage: "url(static/img/blog-3.jpg)" }}>
                            </div>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md m-15px-tb">
                            <div className="min-h-250px bg-cover bg-no-repeat border-radius-5 box-shadow" style={{ backgroundImage: "url(static/img/blog-4.jpg)" }}>
                            </div>
                        </div>
                        <div className="col-md-4 m-15px-tb">
                            <div className="min-h-250px bg-cover bg-no-repeat border-radius-5 box-shadow" style={{ backgroundImage: "url(static/img/blog-5.jpg)" }}>
                            </div>
                        </div>
                        <div className="col-md m-15px-tb">
                            <div className="min-h-250px bg-cover bg-no-repeat border-radius-5 box-shadow" style={{ backgroundImage: "url(static/img/blog-6.jpg)" }}>
                            </div>
                        </div>
                    </div>
                    <div className="row p-40px-t">
                        <div className="col-lg-4 m-15px-tb">
                            <h5>We're fortunate to work with fantastic clients from across the globe in over 25 countries on design and branding.</h5>
                        </div>
                        <div className="col-lg-4 m-15px-tb">
                            <h6>Pixel Perfect Design</h6>
                            <p className="m-0px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>
                        <div className="col-lg-4 m-15px-tb">
                            <h6>Reasonable Pricing</h6>
                            <p className="m-0px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
            </Layout>
            </>
        );
    };
}

export default About;