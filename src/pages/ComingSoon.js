import React from 'react';
import '../components/ComingSoon.css';

const ComingSoon = () => {
    return (
        <div className="coming-soon-container">
            <div className="content">
                <h1>Coming Soon</h1>
                <p>Our website is still under construction.</p>
                {/* You can include an email subscription form here if you want */}
            </div>
        </div>
    );
};

export default ComingSoon;
