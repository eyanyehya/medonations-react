import React from 'react';
import '../components/Donate.css';

const Donate = () => {
    return (
        <div className="donate-section">
            <div className="donate-content">
                <h1 className="donate-title">Save a life with Medonations</h1>
                <p className="donate-description">
                    Every donation, no matter how big or small, makes a profound difference.
                    With your contribution, we can provide life-saving medications, fund critical surgeries, and support essential treatments for those in need.
                    Together, we are life savers, change makers, and hope creators.
                    Because health is a fundamental right for all. Thank you for helping us make it accessible.
                </p>
                <div className="donate-button-container">
                    <a
                        href="https://www.helloasso.com/associations/medonations-france/formulaires/1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="donate-link"
                    >
                        <span className="star-icon">⭐</span> Donate to Medonations
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Donate;
