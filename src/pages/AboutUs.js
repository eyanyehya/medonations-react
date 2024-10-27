import React from 'react';
import '../components/AboutUs.css';
import Carousel from "react-bootstrap/Carousel"; // Link to the CSS file

const AboutUs = () => {
    return (
        <div className="about-us-page">

            {/* Introduction Section */}
            <section className="about-intro">
                <h1>About Us</h1>
                <p>Empowering Healthcare, One Donation at a Time</p>
            </section>

            {/* Who We Are Section */}
            <section className="about-section">
                <h2>Who We Are</h2>
                <p>
                    Empowered by a shared commitment to universal healthcare, we are a dynamic collective of passionate
                    volunteers dedicated to ensuring access to high-quality medical care, particularly during critical
                    moments. Originating as an independent endeavor, Medonations emerged from the urgency to assist our
                    compatriots in Lebanon following the Beirut blast. Since then, we have grown into a registered NGO
                    both in Lebanon and France, working with local and international partners to provide medical aid to
                    vulnerable communities across Lebanon.
                </p>
            </section>

            {/* What We Do Section */}
            <section className="about-section">
                <h2>What We Do</h2>
                <p>
                    We collect donations of medications, medical equipment, and personal protective equipment (PPE) from
                    donors around the world , in 60 countries. We distribute these donations to individuals who are in
                    urgent need of medical assistance, can not find or afford it. We also coordinate with health
                    professionals and volunteers to offer free medical consultations, check-ups, and treatments to
                    patients who cannot cover them. We operate with transparency, accountability, and efficiency to
                    ensure that every donation reaches its intended beneficiary.
                </p>
            </section>

            <section className="about-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={"carousel_1.JPG"} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={"carousel_2.JPG"} alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={"carousel_3.JPG"} alt="Third slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={"carousel_4.JPG"} alt="Third slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={"carousel_5.JPG"} alt="Third slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={"carousel_6.JPG"} alt="Third slide"/>
                    </Carousel.Item>
                </Carousel>
            </section>

            {/* Footer */}
            <footer className="about-footer">
                <p>© {new Date().getFullYear()} Medonations. All Rights Reserved.</p>
            </footer>

        </div>
    );
};

export default AboutUs;
