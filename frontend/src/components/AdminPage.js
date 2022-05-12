import React from "react";
import { useState } from "react";

import '../styles/styles.css';

const AdminPage = () => {

    const [adminPass, setAdminPass] = useState(['']);

    const handleInputChange = (e) => {
        setAdminPass(e.target.value);
    }

    return(
        <div className="w-100">
            <div className="mx-w-1050 m-rl-auto pd-t-30">
                <div className="m-rl-auto centered flex-col m-t-10">
                    <input className="m-rl-auto m-t-5" type="text" value={adminPass} onChange={handleInputChange}/>
                    <div className="m-t-5">
                        <button>Enter Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage