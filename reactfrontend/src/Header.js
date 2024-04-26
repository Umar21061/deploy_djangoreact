import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css';

const Header = () => {
    return (
        <div>
            <div className="header-row bg-green-yellow text-black py-1 text-center ">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <span style={{ fontSize: '30px' }}>Discover excellence: Your gateway to top-tier services and expertise.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
