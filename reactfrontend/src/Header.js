// Header.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
            <style>
                {`
                /* Add internal CSS for responsiveness */
                @media (max-width: 767px) {
                    body {
                        overflow-x: hidden; /* Hide horizontal scrollbar */
                    }
                }
                `}
            </style>
            <div className="header-row bg-green-yellow text-white py-1 text-center ">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <span className="header-text-header">Discover excellence: Your gateway to top-tier services and expertise.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
