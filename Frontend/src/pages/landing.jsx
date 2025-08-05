import React from "react";  
import "../App.css";
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {

    const router = useNavigate();
    return (
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2 style={{marginLeft:"30px"}}>Chatzy</h2>
                </div>
                <div className="navList">
                    <p onClick={() => {
                        router("/cwec");
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth");
                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth");
                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color:"#FF9839"}}>Connect</span> with your loved ones</h1>
                    <p>Cover a distance by Chatzy</p>
                    <div role="button">
                        <Link to={"/auth"}>Get Started &rArr;</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="facetime"></img>
                </div>
            </div>
        </div>
    );
}