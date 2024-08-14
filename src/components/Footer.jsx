// import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <footer>
            <section className="footer">
                {/* for logo and links  */}
                <div className="footer-upper">
                    {/* logo container  */}
                    <div id="footer-upper-logo_container">
                        <img src="/assets/footer/footer_logo.svg" alt="logo" />
                        <p>Learning often happens in classrooms </p>
                        <p>but it doesn’t have to.</p>
                    </div>
                    {/* Quick Links */}
                    <div className="footer-nav-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Course</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/* Courses */}
                    <div className="footer-nav-links">
                        <h2>Courses</h2>
                        <ul>
                            <li>
                                <a href="">Web Development</a>
                            </li>
                            <li>
                                <a href="">Ui/Ux Designer</a>
                            </li>
                            <li>
                                <a href="">Business Strategy</a>
                            </li>
                            <li>
                                <a href="">Software Development</a>
                            </li>
                            <li>
                                <a href="">Business English</a>
                            </li>
                        </ul>
                    </div>
                    {/* Stay Connected */}
                    <div className="footer-nav-links">
                        <h2>Stay Connected</h2>
                        <ul>
                            <li>
                                <img src="/assets/footer/email_icon.svg" alt="email icon" />
                                <a href="mailto:hello@itmavericksolutions.in">
                                    hello@itmavericksolutions.in
                                </a>
                            </li>
                            <li>
                                <img src="/assets/footer/globle_icon.svg" alt="globe icon" />
                                <a href="https://itmavericksolutions.in" target="_blank">
                                    https://itmavericksolutions.in
                                </a>
                            </li>
                            <li>
                                <img
                                    src="/assets/footer/location_icon.svg"
                                    alt="globe icon"
                                />
                                <span>Motihari, East Champaran, Bihar-845416</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* for copyright and social media links  */}
                <div id="footer-copyright-container">
                    <div>
                        <div className="navigation-icons">
                            {/* Replace with your navigation icons */}
                            <a href="#">
                                <img
                                    src="/assets/footer/linkedin_icon.svg"
                                    alt="linkedin_icon"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="/assets/footer/twitter_icon.svg"
                                    alt="twitter_icon"
                                />
                            </a>
                            <a href="#">
                                <img src="/assets/footer/fb_icon.svg" alt="fb_icon" />
                            </a>
                            <a href="#">
                                <img
                                    src="/assets/footer/instagram_icon.svg"
                                    alt="instagram_icon"
                                />
                            </a>
                        </div>
                        <p>
                            copyright <span className="copyright">© 2024 IT Trainings.</span> All
                            Rights Reserved.
                        </p>
                    </div>
                </div>
            </section>
            {/* for mobile only  */}
            <section className="footer-mobile">
                {/* for logo   */}
                <div className="mobile-footer-logo-container">
                    <img
                        width={45}
                        height={45}
                        src="/assets/footer/footer_logo.svg"
                        alt="logo"
                    />
                    <p>
                        IT Maverick <span>Trainings</span>
                    </p>
                </div>
                {/* quick link and stay Connected */}
                <div className="mobile-links-container">
                    <div className="footer-nav-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Course</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-nav-links">
                        <h2>Stay Connected</h2>
                        <ul>
                            <li>
                                <img src="/assets/footer/email_icon.svg" alt="email icon" />
                                <a href="mailto:hello@itTrainings.in">
                                    hello@itTrainings.in
                                </a>
                            </li>
                            <li>
                                <img src="/assets/footer/globle_icon.svg" alt="globe icon" />
                                <a href="https://itTrainings.in" target="_blank">
                                    https://itTrainings.in
                                </a>
                            </li>
                            <li>
                                <img
                                    src="/assets/footer/location_icon.svg"
                                    alt="globe icon"
                                />
                                <span>Motihari, East Champaran, Bihar-845416</span>
                            </li>
                        </ul>
                        <div className="navigation-icons">
                            {/* Replace with your navigation icons */}
                            <a href="#">
                                <img
                                    src="/assets/footer/linkedin_icon.svg"
                                    alt="linkedin_icon"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="/assets/footer/twitter_icon.svg"
                                    alt="twitter_icon"
                                />
                            </a>
                            <a href="#">
                                <img src="/assets/footer/fb_icon.svg" alt="fb_icon" />
                            </a>
                            <a href="#">
                                <img
                                    src="/assets/footer/instagram_icon.svg"
                                    alt="instagram_icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                {/* legal */}
                <div className="mobile-legal-container">
                    <h2>Legal</h2>
                    <div>
                        <a href="">Private Policy</a>
                        <a href="">Terms </a>
                        <a href="">Sitemap</a>
                        <a href="">Help and Support</a>
                    </div>
                </div>
                <hr />
                <div id="footer-copyright-container">
                    <p>
                        copyright <span className="copyright">© 2024 IT Trainings.</span> All
                        Rights Reserved.
                    </p>
                </div>
            </section>
        </footer>

    )
}

export default Footer