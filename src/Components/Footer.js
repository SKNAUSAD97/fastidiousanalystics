import React, { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <>
                <footer className="dark-bg footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 m-15px-tb">
                                <img src="static/img/logo.png" title="" alt="" height="100px" />
                            </div>
                            <div className="col-6 col-lg-2 m-15px-tb">
                                <h5 className="white-color footer-title">
                                    Useful
                                </h5>
                                <ul className="list-unstyled links-white footer-link-1">
                                    <li>
                                        <a href="#">Apps Store</a>
                                    </li>
                                    <li>
                                        <a href="#">Google Store</a>
                                    </li>
                                    <li>
                                        <a href="#">Latest News</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-2 m-15px-tb">
                                <h5 className="white-color footer-title">
                                    Services
                                </h5>
                                <ul className="list-unstyled links-white footer-link-1">
                                    <li>
                                        <a href="#">Documentation</a>
                                    </li>
                                    <li>
                                        <a href="#">Changelog</a>
                                    </li>
                                    <li>
                                        <a href="#">Pagebuilder</a>
                                    </li>
                                    <li>
                                        <a href="#">Web Services</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-5 m-15px-tb">
                                <h5 className="white-color footer-title">
                                    Stay up to date
                                </h5>
                                <form>
                                    <div className="d-flex flex-column flex-md-row m-5px-b">
                                        <input type="email" className="form-control m-5px-r md-m-0px-r md-m-10px-b" placeholder="Enter your username" />
                                        <button className="m-btn m-btn-theme2nd m-btn-radius flex-shrink-0" type="submit">Get Started</button>
                                    </div>
                                    <p className="white-color-light m-0px font-small p-10px-t">New UI kits or big discounts. Never spam.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom border-style top light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-right m-5px-tb">
                                <ul className="nav justify-content-center justify-content-md-start links-white font-small footer-link-1">
                                    <li><a href="#">Privace &amp; Policy</a></li>
                                    <li><a href="#">Faq's</a></li>
                                    <li><a href="#">Get a Quote</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 text-center text-md-right m-5px-tb">
                                <p className="m-0px font-small white-color-light">© 2020 copyright all right reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </>
        );
    };
}

export default Footer;