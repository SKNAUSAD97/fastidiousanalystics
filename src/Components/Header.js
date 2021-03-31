import React, {Component} from "react";
import { Link } from "react-router-dom";
 
class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <header className="header-nav header-white">
                <div className="fixed-header-bar">
                    {/* <!-- Header Nav --> */}
                    <div className="navbar navbar-main navbar-expand-lg">
                        <div className="container">
                            <Link to="/" className="navbar-brand">
                                <img className="logo-dark" alt="" title="" src="static/img/logo.png" height="90px" />
                                <img className="logo-light" alt="" title="" src="static/img/logo.png" height="90px" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse navbar-collapse-overlay" id="navbar-main-collapse">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item ">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item  px-dropdown">
                                        <Link to="/about" className="nav-link">About</Link>
                                    </li>
                                    <li className="nav-item  px-mega">
                                        <Link className="nav-link" to="/services">Services</Link>
                                        <i className="fa fa-angle-down px-nav-toggle"></i>
                                    </li>
                                    <li className="nav-item mm-in px-dropdown">
                                        <a className="nav-link" href="#">Portfolio</a>
                                        <i className="fa fa-angle-down px-nav-toggle"></i>
                                        <ul className="px-dropdown-menu mm-dorp-in">
                                            <li><a href="portfolio.html">Portfolio</a></li>
                                            <li><a href="portfolio-single.html">Portfolio single</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item px-dropdown">
                                        <Link className="nav-link" to="/contact" >Contact</Link>
                                        <i className="fa fa-angle-down px-nav-toggle"></i>
                                    </li>
                                </ul>
                                <a className="d-none d-lg-inline-block m-btn m-btn-radius m-btn-theme2nd m-btn-sm m-20px-l" href="#">Login</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Header Nav --> */}
                </div>
            </header>
            </>
        );
    }
}

export default Header;