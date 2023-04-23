import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function LandingPage() {
    return (
        <header className="header-page">
            <h1 className="main-title text-right">Spender</h1>
            <h3 className="main-para text-right">Join us and Track your expenses</h3>
            <div className="buttons text-right main-para-button">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}
