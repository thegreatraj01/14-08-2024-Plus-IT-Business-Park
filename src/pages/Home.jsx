// import React from 'react';
import '../css/Home.css';

function Home() {
    const butterflies = [
        { id: "first-butterfly", src: '/assets/home/butterfly_one.svg', alt: "First butterfly" },
        { id: "second-butterfly", src: '/assets/home/butterfly_two.svg', alt: "Second butterfly" },
        { id: "third-butterfly", src: '/assets/home/butterfly_three.svg', alt: "Third butterfly" }
    ];

    const mobileButterflies = [
        { id: "first-butterfly-mobile", src: '/assets/home/white-butterfly-1.png', alt: "First butterfly" },
        { id: "second-butterfly-mobile", src: '/assets/home/white-butterfly-2.png', alt: "Second butterfly" },
        { id: "third-butterfly-mobile", src: '/assets/home/white-butterfly-3.png', alt: "Third butterfly" }
    ];

    const gridItems = [
        { src: '/assets/home/data-seience-icon.svg', alt: 'Data Science', text: 'Data Science' },
        { src: '/assets/home/Machine-Learning-icon.svg', alt: 'Machine Learning', text: 'Machine Learning' },
        { src: '/assets/home/Code-Analytics-icon.svg', alt: 'Code Analytics', text: 'Code Analytics' },
        { src: '/assets/home/Data-Engineer-icon.svg', alt: 'Data Engineer', text: 'Data Engineer' }
    ];

    const testimonials = [
        { src: '/assets/home/Theresa-Webb.png', name: 'Theresa Webb', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...' },
        { src: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp', name: 'Brooklyn Simmons', text: 'Thousands of easy‑to‑install add‑ons mean you’ll never outgrow your website...' },
        { src: '/assets/home/Eleanor-Pena.png', name: 'Eleanor Pena', text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor...' }
    ];

    return (
        <main>
            <div className="butterfly-container">
                {butterflies.map((butterfly) => (
                    <img
                        key={butterfly.id}
                        id={butterfly.id}
                        src={butterfly.src}
                        alt={butterfly.alt}
                    />
                ))}
            </div>

            <div className="butterfly-container-mobile">
                {mobileButterflies.map((butterfly) => (
                    <img
                        key={butterfly.id}
                        id={butterfly.id}
                        src={butterfly.src}
                        alt={butterfly.alt}
                    />
                ))}
            </div>

            <section className="hero-section">
                <div className="ellipse-container"></div>
                <div className="hero-left">
                    <div>
                        <h2>
                            <span>Learning</span> <span>keeps</span>
                            <br />
                            <span>you</span> <span>in the lead</span>
                        </h2>
                        <button className="blue-button browse-course-button">
                            Browse Course
                        </button>
                    </div>
                </div>
                <div className="hero-right">
                    <img src="/assets/home/hero_girl.png" alt="A girl holding books" />
                </div>
            </section>

            <section id="course-details">
                <div id="Course-details-icon">
                    <div>
                        <img
                            src="/assets/home/course_details_icon.svg"
                            alt="Course details"
                        />
                        <span>Course details</span>
                    </div>
                </div>
                <h2 id="course-details-heading">Explore Our Categories</h2>
                <div className="grid-container">
                    {gridItems.map((item, index) => (
                        <div key={index} className="grid-item">
                            <div>
                                <img src={item.src} alt={item.alt} />
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h3 id="join-community">
                    Join a community of 3,000+ Professional Web
                    <br className="br-wrapper" />
                    Designer & Developers
                </h3>
                <div className="join-community-grid">
                    {['Help From Experts', 'Build Your Network', 'Real-life Lessons'].map((title, index) => (
                        <div key={index} className="join-community-grid-item">
                            <div className="mobile-device-ellipse" />
                            <div>
                                <h4>{title}</h4>
                                <p>
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                    amet sint.et.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="art-business">
                <div id="pill-container">
                    <img src="/assets/home/ellipse-26.svg" alt="ellipse shape" />
                    <p>Learn the art & business of web design</p>
                    <img src="/assets/home/ellipse-27.svg" alt="ellipse shape" />
                </div>
                <div id="quote-container">
                    <p id="quote">
                        Learning often happens in classrooms but it doesn’t have to. Eduflow to{" "}
                        <br className="br-wrapper" />
                        facilitate learning experiences no matter the context.
                    </p>
                </div>

                <div className="hide-scrollbar">
                    <div className="course-enrollment-grid">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="course-enrollment-grid-item">
                                <div id="course-enroll-img-container">
                                    <img
                                        src="/assets/home/course-enroll.png"
                                        alt="course cover image"
                                    />
                                </div>
                                <div className="course-enroll-text-container">
                                    <div>
                                        {[...Array(4)].map((_, idx) => (
                                            <img
                                                key={idx}
                                                className="star_icon"
                                                src="/assets/home/star_icon.svg"
                                                alt="star icon"
                                            />
                                        ))}
                                        <img
                                            className="star_icon"
                                            src="/assets/home/blank_star_icon.svg"
                                            alt="star icon"
                                        />
                                        <span id="review-marks">4.67 (3)</span>
                                    </div>
                                    <p>Perfect Diet & Meal Plan for everyday</p>
                                </div>
                                <button>Enroll Now</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="course-enroll-btn-container">
                    <button>Browse Courses</button>
                </div>
            </section>

            <section id="iframe-section">
                <h2>
                    Everything is a learning
                    <br />
                    experience
                </h2>
                <p id="iframe-quote">
                    Learning often happens in classrooms but it doesn’t have to. Use Eduflow
                    to <br />
                    facilitate learning experiences no matter the context.
                </p>
                <div id="iframe-container">
                    <div>
                        <iframe
                            width={650}
                            height={350}
                            src="https://www.youtube.com/embed/z0n1aQ3IxWI?si=nEJ1qepVwBP7Pec-"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div>
                        <p>
                            <span>Jessica Felicio</span>
                            <br />
                            Featured Teacher
                        </p>
                    </div>
                </div>
            </section>

            <section id="Tutor-Success-Stories">
                <div className="Tutor-Success-Stories-pill" id="pill-container">
                    <img src="/assets/home/ellipse-26.svg" alt="ellipse shape" />
                    <p>Tutor Success Stories</p>
                    <img src="/assets/home/ellipse-27.svg" alt="ellipse shape" />
                </div>
                <p>Real students, real results</p>
                <div className="hide-scrollbar">
                    <div id="testimonial-grid-container">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-grid-item">
                                <div className="testimonial-grid-item-profile">
                                    <img
                                        height={60}
                                        width={60}
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                    />
                                    <p>{testimonial.name}</p>
                                </div>
                                <div className="testimonial-grid-item-text">
                                    <p>{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="newsletter-container">
                <div>
                    <p>Want to get special offers and Course updates?</p>
                    <input type="text" placeholder="Your email address here"/>
                    <button className="blue-button">Subscribe</button>
                </div>
            </div>
               
            </section>

        </main>
    );
}

export default Home;
