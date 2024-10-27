import VideoHeader from "../components/VideoHeader";
import React from "react";
import '../components/Home.css'; // Import the CSS for styling
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faHouse, faQuestion, faHandsHelping, faBullhorn, faBoxOpen, faPlane, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons';
import ImageHeader from "../components/ImageHeader";

const Home = () => {
    return (
        <div>
            {/*<VideoHeader/>*/}
            <ImageHeader/>

            <section className="who-are-we-section">
                <div className="who-are-we-content">
                    <h2>Who Are We?</h2>
                    <p>Medonations is a non-governmental organization (NGO) that provides free, equal,
                        and fair medical assistance to all vulnerable Lebanese patients living in the
                        country. It was founded by Marina El Khawand, a Law Graduate and Social Activist,
                        in response to the devastating explosion that hit Beirut in August 2020.
                        Medonations aims to deliver medical supplies, equipment, and services to families
                        in the affected areas of Beirut and all over the nation.</p>
                </div>
                <div className="who-are-we-image">
                    <img src={"volunteer.png"} alt="Medonations volunteers"/>
                </div>
            </section>


            <section className="next-section">
                <div className="next-section-image">
                    <img src={"donation_hands.png"} alt="New Context"/>
                </div>
                <div className="next-section-content">
                    <h2>Time To Save A Life</h2>
                    <p>The 4 years in numbers, our NGO has provided the basic needs of more than 20,000 families
                        regarding medical assistance (free medications, medical equipment), we have covered up to 200
                        treatments and surgeries operated inside Lebanese hospitals. In addition, we bought 7 oxygen
                        machines for covid patients under our NAFAS Beirut campaign and till now since January 2021 -
                        Oct 2022 (double operations to pulmonary diseases infected patients) we were able to save 290
                        lives and still going. 2,690 Covid-19 Rapid tests have been done, 3,100 medical supplies
                        covered,
                        30,000 medical masks and hand sanitizers distributed. Moreover, we've distributed up to 4,074
                        packs of milk and 4,116 diapers to babies from 0-2 years. 10,890 sanitary pads. 6,150 cooked
                        meals distributed in collab with a Lebanese initiative called beautiful people. 150 rental fees
                        covered.</p>
                </div>
            </section>

            <div className="home-container">
                {/* ... other sections ... */}

                <div className="features-section">
                    <div className="feature-item">
                        <img src="/pills.png" alt="Pills" className="feature-icon"/>
                        <h3>Medicine Access</h3>
                        <p>Ensuring access to essential medications for those in need.</p>
                    </div>
                    <div className="feature-item">
                        <img src="/pill_box.png" alt="Pill Box" className="feature-icon"/>
                        <h3>Health Support</h3>
                        <p>Providing health support and medical equipment.</p>
                    </div>
                    <div className="feature-item">
                        <img src="/heart.png" alt="Heart" className="feature-icon"/>
                        <h3>Volunteer Love</h3>
                        <p>Join our team of passionate volunteers making a difference.</p>
                    </div>
                    <div className="feature-item">
                        <img src="/board.png" alt="Board" className="feature-icon"/>
                        <h3>Our Impact</h3>
                        <p>See the positive impact we've had on communities.</p>
                    </div>
                </div>

                {/* ... other sections ... */}
            </div>

            <section className="education-initiative-section">
                <div className="education-initiative-card">
                    <div className="education-initiative-image">
                        {/*<img src={"volunteer.png"} alt="Education Initiative"/>*/}
                    </div>
                    <div className="education-initiative-content">
                        <h2>An Education Dream</h2>
                        <p>Education is the most empowering force in the world. It creates knowledge,
                            builds confidence, and breaks down barriers to opportunity. For children, it is
                            their key to open the door to a better life. However, it is a sad reality of our
                            world today that millions of children will never receive this key. At Medonations,
                            our mission is to create, lead and do the change. And it's never possible without
                            empowering and educating our future generations. From here we distributed more than
                            100 refurbished laptops to the neediest school students (year 2021), 350 solar panel
                            backpacks designed to help the students endure with the electricity crisis and cuts
                            (year 2022), Moreover, we covered 25 school tuitions.</p>
                    </div>
                </div>
            </section>

            <section className="medical-crisis-section">
                <div className="medical-crisis-header">
                    <h2>The Alarming Medical Crisis in Lebanon</h2>
                </div>
                <div className="medical-crisis-content">
                    <p>Lebanon is experiencing an unprecedented medical crisis where 78% of the population is living
                        below the poverty line. There is a huge shortage of chronic medication. The sky-rocketing prices
                        of medication that is available make it inaccessible for the Lebanese. The rate of child
                        fatalities is rapidly increasing due to this crisis.</p>
                </div>
                <div className="steps-to-help">
                    <h3>Steps to Help</h3>
                    <div className="steps-grid">
                        <div className="step">
                            <FontAwesomeIcon icon={faBullhorn} className="step-icon"/>
                            <h4>Talk about Lebanon</h4>
                            <p>Spread the word on TVs, newspapers, web platforms, and social media accounts</p>
                        </div>
                        <div className="step">
                            <FontAwesomeIcon icon={faBoxOpen} className="step-icon"/>
                            <h4>Launch Medical Collection Points</h4>
                            <p>Set up collection points in your area. Contact us for details.</p>
                        </div>
                        <div className="step">
                            <FontAwesomeIcon icon={faPlane} className="step-icon"/>
                            <h4>Carry Donations</h4>
                            <p>Travel to Lebanon and become one of our suitcase heroes!</p>
                        </div>
                        <div className="step">
                            <FontAwesomeIcon icon={faHandHoldingHeart} className="step-icon"/>
                            <h4>Support Our Free Clinic</h4>
                            <p>Donate or start a fundraiser to help our cause.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};


export default Home;
