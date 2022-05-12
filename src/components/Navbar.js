import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';

const Navbar = () => {
    return(
        <div className="w-100 bg-blue">
            <div className="mx-w-1100 pd-10 m-rl-auto flex-row">
                <div className="nav-head">
                    <Link to="/" className="nav-link">
                        Public Opinion
                    </Link>
                </div>
                <div className="flex-row bg-h m-l-auto pd-t-30 w-70">
                    <div className="m-rl-auto">
                        <Link to="/" className="nav-link nav-link-s">
                            Main Page
                        </Link>
                    </div>
                    <div className="m-rl-auto">
                        <Link to="/all" className="nav-link nav-link-s">
                            All Questions
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;