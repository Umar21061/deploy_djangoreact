// RecentDevelopment.js

import React from 'react';
import './RecentDevelopment.css';

const RecentDevelopment = () => {
    return (
        <div className="recent-development-container">
            <div className="row">
                <div className="col-md-4">
                    <div className="development-item">
                        <h3>Development 1</h3>
                        <p>Description of Development 1</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="development-item">
                        <h3>Development 2</h3>
                        <p>Description of Development 2</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="development-item">
                        <h3>Development 3</h3>
                        <p>Description of Development 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentDevelopment;
