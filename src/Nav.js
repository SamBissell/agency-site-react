import React, { useState } from 'react';

function Nav() {

    const [hidden, setHidden] = useState("hidden")

    // Toggling the mobile menu
    // state = true or false
    // handle click changes state

    function handleClick() {
        hidden ? setHidden("") : setHidden("hidden");
        console.log(hidden);
    };

    return (
        <nav className="flex header">
            <div class="logo"><h2>Agency.</h2></div>
            <ul class="nav-links">
                <li class="nav-link"><a href="#services">Services</a></li>
                <li class="nav-link"><a href="#work">Work</a></li>
                <li class="nav-link"><a href="#about">About</a></li>
                <li class="nav-link"><a href="#contact">Contact</a></li>
            </ul>
            <div onClick={handleClick} className="mobile-menu">
                <div id="mobile-span-1" class="mobile-span"></div>
                <div id="mobile-span-2" class="mobile-span"></div>
                <div id="mobile-span-3" class="mobile-span"></div>
            </div>
            <ul onClick={handleClick} className={`nav-mobile && ${hidden}`}>
                <li><a class="mobile-nav-link" href="#services">Services</a></li>
                <li><a class="mobile-nav-link" href="#work">Work</a></li>
                <li><a class="mobile-nav-link" href="#about">About</a></li>
                <li><a class="mobile-nav-link" href="#contact">Contact</a></li>
            </ul>
        </nav >
    )
}

export default Nav;