import React from 'react'
import { Link } from 'react-router-dom';
import "./ActiviteLayout.css"
const ActiviteLayout = () => {

    return (
        <div className="activate">
            <p>
                ready to login ? 👉🏻
                <Link to="/">
                        here
                </Link>
            </p>
        </div>
    );
};

export default ActiviteLayout