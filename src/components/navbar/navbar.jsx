import React, { useState } from "react";

import './navbar.css';
import Contact from "../contact/contact";

function Navbar(){


    const [toggleBar, setToggleBar] = useState("off");

    function barToggle(){
        if(toggleBar==='off'){
            setToggleBar('on');
        }
        else if(toggleBar==='on'){
            setToggleBar('off');
        }
    }

    return (
        <div>
            <div className="navbar">
                <h2 className="logoName">Study<span>Monk</span></h2>
                <ul className="navbar_links">
                    <a href="/"><li>Partners</li></a>
                    <a href="/"><li>Services</li></a>
                    <a href="/"><li>Resources</li></a>
                    <a href="/"><li>ContactUs</li></a>
                    <a href="#" onClick={barToggle}><li>Search</li></a>
                </ul>
                <div>
                    <a href="/login"><button className="login">Login</button></a>
                </div>
                <button className="option_bar" onClick={barToggle}><i className="fa-solid fa-bars"></i></button>
            </div>

            {
                toggleBar==='on' ? <>
                <div className="searchBar">
                    <Contact />
                </div>
                </>
                : 
                <></>
            }
            
            {
                toggleBar==='on' ? <>
                <div className="menuItem">
                    <a href="/">Services</a>
                    <a href="/">Partners</a>
                    <a href="/">Resources</a>
                    <a href="/contact">Contact</a>
                </div>
                </>
                : 
                <></>

            }
        </div>
    )
}

export default Navbar;