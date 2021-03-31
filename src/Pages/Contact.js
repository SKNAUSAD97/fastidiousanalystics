import React, { Component } from "react";
import Layout from "../Components/Layout";

class Contact extends Component{
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
                                {/* <h6 className="white-color-light font-w-500">We are awesome designer</h6> */}
                                <h1 className="display-4 white-color m-0px">Contact </h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Home Banner -->
                <!-- Section --> */}
                <section className="section gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-40px-lr hover-top white-bg">
                                    <div className="m-30px-b only-icon-70 theme-color">
                                        <i className="icon-map"></i>
                                    </div>
                                    <h5 className="m-15px-b">Contact Address</h5>
                                    <p className="m-0px">301 The Greenhouse, Custard Factory, LD, E2 8DY.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-40px-lr hover-top white-bg">
                                    <div className="m-30px-b only-icon-70 theme-color">
                                        <i className="icon-chat"></i>
                                    </div>
                                    <h5 className="m-15px-b">Let's Talk</h5>
                                    <p className="m-0px">Phone: 1-800-222-000<br />Fax: 1-800-222-002</p>
                                </div>
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <div className="box-shadow p-65px-tb p-40px-lr hover-top white-bg">
                                    <div className="m-30px-b only-icon-70 theme-color">
                                        <i className="icon-envelope"></i>
                                    </div>
                                    <h5 className="m-15px-b">Email Us</h5>
                                    <p className="m-0px links-dark">
                                        <a href="mailto:info@domain.com">info@domain.com</a><br />
                                        <a href="mailto:support@domain.com">support@domain.com</a><br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Home Banner -->
                <!-- Section --> */}
                <section className="section">
                    <div className="container">
                        <div className="row md-m-25px-b m-40px-b justify-content-center">
                            <div className="col-lg-7 text-center">
                                <h3 className="h1 m-15px-b p-15px-b after-50 theme-after">Get in touch!</h3>
                                <p className="m-0px font-2">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9 col-xl-8">
                                <form className="rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="static/plugin/mail/bat/rd-mailform.php">
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Your Name</label>
                                                <input id="contact-name" type="text" name="name" placeholder="Rachel Roth" data-constraints="@Required" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Email Address</label>
                                                <input id="contact-email" type="email" name="email" placeholder="name@example.com" data-constraints="@Required" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label >Company (optional)</label>
                                                <input type="text" name="contact-company" className="form-control" id="contact-company" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label >Phone (optional)</label>
                                                <input type="tel" name="contact-phone" className="form-control" id="contact-phone" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Message</label>
                                                <textarea className="form-control" id="contact-message" name="message" rows="3" placeholder="Hi there, I would like to ..." data-constraints="@Required"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="m-btn m-btn-theme m-btn-radius w-100" type="submit" name="send">Get Started</button>
                                            <div className="snackbars" id="form-output-global"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Section -->
                <!-- Section --> */}
                <div className="map-sm">
                    <div className="embed-responsive embed-responsive-16by9 h-100">
                        <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"></iframe>
                    </div>
                </div>
                {/* <!-- End Section --> */}
            </main>
                </Layout>
            </>
        );
    };
}

export default Contact;