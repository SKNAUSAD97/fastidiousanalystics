import React, {Component} from "react";
import Layout from "../Components/Layout";

class Services extends Component{
    render(){
        return(
            <>
            <Layout>
            <main>
                <section className="section parallax effect-section" style={{ backgroundImage: "url(static/img/bg-2.jpg)" }}>
                    <div className="mask dark-bg opacity-8"></div>
                    <div className="container position-relative">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-8 text-center">
                                {/* <h6 className="white-color-light font-w-500">We are awesome designer</h6> */}
                                <h1 className="display-4 white-color m-0px">Services</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 m-15px-tb">
                                <img src="static/img/ai-7.svg" title="" alt="" />
                            </div>
                            <div className="col-lg-6 m-15px-tb">
                                <div className="p-45px-l lg-p-0px-l">
                                    <h3 className="h2 m-15px-b">Stay focused on your business. Let us handle the design.</h3>
                                    <p className="lead">Beautiful and easy to use UI, professional animations and drag &amp; drop feature.</p>
                                    <ul className="list-type-03">
                                        <li>Beautiful and easy to understand UI, professional animations</li>
                                        <li>Theme advantages are pixel perfect design &amp; clear code delivered</li>
                                        <li>Present your services with flexible, convenient and multipurpose</li>
                                        <li>Find more creative ideas for your projects</li>
                                        <li>Unlimited power and customization possibilities</li>
                                    </ul>
                                    <div className="p-20px-t">
                                        <a className="m-btn m-btn-radius m-btn-theme m-10px-r" href="#">
                                            <span className="m-btn-inner-text">More About</span>
                                            <span className="m-btn-inner-icon arrow"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section gray-bg">
                            <div className="container">
                                <div className="tab-style-5">
                                    <div className="row justify-content-center m-35px-b">
                                        <div className="col-lg-10">
                                            <ul className="nav nav-fill nav-tabs">
                                                <li className="nav-item">
                                                    <a href="#tab5__sec1" data-toggle="tab" className="nav-link active box-shadow-lg">
                                                        <span>Product Onboarding</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#tab_5_sec2" data-toggle="tab" className="nav-link box-shadow-lg">
                                                        <span>Merchandising</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#tab_5_sec3" data-toggle="tab" className="nav-link box-shadow-lg">
                                                        <span>C.M Strategies</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#tab_5_sec4" data-toggle="tab" className="nav-link box-shadow-lg">
                                                        <span>Project Consultation</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#tab_5_sec5" data-toggle="tab" className="nav-link box-shadow-lg">
                                                        <span>Talent Management</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        {/* <!-- start tab content --> */}
                                        <div id="tab5__sec1" className="tab-pane fade in active show">
                                            <div className="row align-items-center justify-content-between">
                                            <div className="m-15px-tb">
                                            <h3>Product Onboarding</h3>
                                            <p className="font-2">
                                                    Upscaling the eCommerce market in this competitive sector and constantly being the best itself to align better with the market
                                                     demands is a necessity in today’s time. Be it online research, Showrooming, 
                                                     Reverse Showrooming, Wishlist’s, Comparison Websites, Social Media Feedback
                                                      are all various stages of eCommerce build up are necessary. The scarcity of 
                                                      options for modern shoppers, just providing access to product is not the end 
                                                      and sufficient, therefore in order to streamline the process one has to offer 
                                                      the right strategy and solution to make it a seamless journey.
                                            </p>
                                            </div>
                                                <div className="col-lg-5 m-15px-tb" style={{ justifyContent:'center' }}>
                                                    <label className="theme-bg-alt font-small font-w-500 p-20px-lr p-5px-tb theme-color border-radius-15 m-15px-b">Our Portal</label>
                                                    <p className="font-2" style={{ fontWeight: "bold" }}>
                                                    A quick and user-friendly website should be designed with the below pointers in mind:
                                                    </p>
                                                    <ul className="list-type-02 theme">
                                                        <li>Optimized Website Taxonomy (Category Structure)</li>
                                                        <li>Optimized Product onboarding process (Going live quickly)</li>
                                                        <li>Optimized Search Engine and Recommendations</li>
                                                        <li>Accurate, Good Quality Product Catalogues</li>
                                                        <li>Helpful Supplementary content (FAQs, Videos etc.)</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 m-15px-tb">
                                                    <img src="static/img/ai-4.svg" title="" alt="" />
                                                </div>
                                                <div style={{ marginTop: '20px' }}>
                                                <p className="font-2">
                                                <span style={{ fontWeight: 'bold' }}>Fastidious’s</span> effective merchandising solutions and with the excellent and up to date domain 
                                                strategies offer control of your end-to-end merchandising operations. 
                                                Our rich and vast knowledge holders and experienced, Six-Sigma trained 
                                                executives, Data analytics systems and proprietary AI-based tools, 
                                                will work alongside to make it website user friendly and truly stand out 
                                                from the crowd
                                                </p>
                                                    <ul className="list-type-02 theme">
                                                        <li>Process Onboarding and Management</li>
                                                        <li>Merchandise Consulting</li>
                                                        <li>Intelligent Content QA </li>
                                                        <li>Price & Assortment Intelligence </li>
                                                    </ul>
                                            </div>
                                            </div>
                                        </div>
                                        {/* <!-- end tab content -->
                                        <!-- start tab content --> */}
                                        <div id="tab_5_sec2" className="tab-pane fade in">
                                            <div className="row flex-row-reverse align-items-center justify-content-between">
                                                <div className="col-lg-5 m-15px-tb">
                                                    <label className="theme-bg-alt font-small font-w-500 p-20px-lr p-5px-tb theme-color border-radius-15 m-15px-b">Our Portal</label>
                                                    <h3 className="font-w-600 dark-color">Set your priorities and align your teams</h3>
                                                    <p className="font-1">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                                    <ul className="list-type-02 theme">
                                                        <li>Built with customization</li>
                                                        <li>Quality design and thoughfully</li>
                                                        <li>Created with the latest technologies</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 m-15px-tb">
                                                    <img src="static/img/ai-4.svg" title="" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end tab content -->
                                        <!-- start tab content --> */}
                                        <div id="tab_5_sec3" className="tab-pane fade in">
                                            <div className="row align-items-center justify-content-between">
                                                <div className="col-lg-5 m-15px-tb">
                                                    <label className="theme-bg-alt font-small font-w-500 p-20px-lr p-5px-tb theme-color border-radius-15 m-15px-b">Our Portal</label>
                                                    <h3 className="font-w-600 dark-color">Set your priorities and align your teams</h3>
                                                    <p className="font-1">Raino is a HTML5 template based on Sass and Bootstrap 4 with modern and creative</p>
                                                    <ul className="list-type-02 theme">
                                                        <li>Built with customization</li>
                                                        <li>Quality design and thoughfully</li>
                                                        <li>Created with the latest technologies</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 m-15px-tb">
                                                    <img src="static/img/ai-4.svg" title="" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab_5_sec4" className="tab-pane fade in">
                                            <div className="row align-items-center justify-content-between">
                                                <div style={{ marginTop: '20px' }}>
                                                    <p className="font-2">
                                                    The right strategy based on the data-driven insights from our skilled business executives, is what will ensure lasting growth.
                                                    </p>
                                                    <p className="font-2">
                                                    <span style={{ fontWeight: 'bold' }}>Fastidious’s</span> provides ecommerce consulting services to brands and retailers 
                                                    to help them choose the right data-driven methods of their business. Fastidious works 
                                                    with you bring out and implement customized solutions that will offer solution to
                                                     challenges and tomorrow’s opportunities.
                                                    </p>
                                                </div>
                                                <div className="col-lg-5 m-15px-tb">
                                                    <label className="theme-bg-alt font-small font-w-500 p-20px-lr p-5px-tb theme-color border-radius-15 m-15px-b">Our Portal</label>
                                                    <h4 className="font-w-600 dark-color">Multi-Channel Retail Strategy</h4>
                                                    <p className="font-1">
                                                    Identify the right eCommerce channels to sell on review your brand positioning as 
                                                    well assortment and pricing strategy for each retail channels
                                                    </p>

                                                    <h4 className="font-w-600 dark-color">Operations Consulting</h4>
                                                    <p className="font-1">
                                                    Fastidious helps your eCommerce operations to become productive and extremely cost-efficient
                                                     and align them with your future growth strategy. 
                                                    </p>

                                                    <ul className="list-type-02 theme">
                                                        <li>Merchandising Operations</li>
                                                        <li>Supply Chain Operations</li>
                                                        <li>Finance and Accounting Operations</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 m-15px-tb">
                                                    <img src="static/img/ai-4.svg" title="" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div id="tab_5_sec5" className="tab-pane fade in">
                                            <div className="row align-items-center justify-content-between">
                                                <div className="col-lg-5 m-15px-tb">
                                                    <label className="theme-bg-alt font-small font-w-500 p-20px-lr p-5px-tb theme-color border-radius-15 m-15px-b">Our Portal</label>
                                                    <h3 className="font-w-600 dark-color">Talent Management</h3>
                                                    <p className="font-1">
                                                    •	Goodbye to those staffing issues, be it a growing shortage of experienced IT 
                                                    professionals or evolving recruitment strategies Fastidious help you solve your 
                                                    staffing gap as we have a deep understanding of all things digital. Our recruiters
                                                     identify, source, screen and place IT professionals that meet your specific skill 
                                                     sets. With our domain expertise, IT staff augmentation services you get to shorten
                                                      hiring timelines and reduce cost of acquiring talent and based on your organizational
                                                       and business objectives, we engage in flexible engagement models.
                                                        </p>
                                                </div>
                                                <div className="col-lg-6 m-15px-tb">
                                                    <img src="static/img/ai-4.svg" title="" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end tab content --> */}
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

export default Services;