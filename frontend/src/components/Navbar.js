import React, { useState, useEffect, useRef } from 'react'
import './nav.css'
import { useHistory, Link } from "react-router-dom";
import logo from '../assets/logo.webp'

export default function NavBar() {

    const ANIMATION_TIMEOUT = 300

    // fullscreen => fadein and toggle
    // noscreen => Fadeout
    const [transitionIn, setTransitioningIn] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    let history = useHistory();

    function changePage(destination) {
        history.push(`/${destination}`);
    }
    // prevents rerendering on pageload
    const isFirstRun = useRef(false);
    // prevents reclicking and fuckinup the state
    const isIdle = useRef(true)

    useEffect(() => {
        if (isFirstRun.current) {
            isIdle.current = false
            setTimeout(() => {
                setIsMenuOpen(!isMenuOpen)
                isIdle.current = true
            }, ANIMATION_TIMEOUT);
        }
        isFirstRun.current = true;
    }, [transitionIn]);

    function handleToggle(page) {
        // page should be the url to another route

        // it can only work while in mobile mode
        if (document.body.clientWidth < 992) {
            if (isIdle.current) {
                setTransitioningIn(!transitionIn)

                // if page is a stirng,
                // i.e. if a url was passed, change page.
                setTimeout(() => {
                    if (typeof(page) == 'string') {
                        changePage(page)
                    }
                }, ANIMATION_TIMEOUT);

            }
        }

    }

    // There must be 4 states only:
    // Close, transitioning in, open, transitioning out

    // In each of these states, each variables has the following state: 
    // var   // Close // TransIn  //   navBar   // Toggle // X
    // state // True  //  false   //   hidden   // Toggle // hidden
    // state // True  //  true    //   fadein  //  toggle // fadein
    // state // False //  true    //   fadein  //  hidden // fadein 
    // state // False //  false   //   Fadeout //  toggle // fadeout  

    function navClassFunc() {
        if (!isMenuOpen && !transitionIn) {
            return 'collapse navbar-collapse'
        }
        else if (!isMenuOpen && transitionIn) {
            return 'fullscreen softOrange'
        }
        else if (isMenuOpen && transitionIn) {
            return 'fullscreen softOrange'
        }
        else if (isMenuOpen && !transitionIn) {
            return 'noscreen softOrange'
        }
    }

    function toggleClassFunc() {
        if (!isMenuOpen && !transitionIn) {
            return 'navbar-toggler-icon'
        }
        else if (!isMenuOpen && transitionIn) {
            return 'collapse'
        }
        else if (isMenuOpen && transitionIn) {
            return 'collapse'
        }
        else if (isMenuOpen && !transitionIn) {
            return 'navbar-toggler-icon'
        }
    }
    const toggleClass = toggleClassFunc()
    const navClass = navClassFunc()
    const XClass = toggleClass === 'collapse' ? 'close-icon' : "collapse"

    const navCorrection = {
        paddingLeft: `0px`
    }

    return (
        <nav className="nav navbar navbar-expand-lg navbar-light bg-light">

            {/* toggler  */}
            <img
                src={logo}
                className="nav-logo ml-3"
                alt="Logo"
                onClick={() => changePage('home')}
            />
            <button className="navbar-toggler"
                onClick={handleToggle}
                type="button"
                style={{ zIndex: '100' }}>
                <span className={toggleClass}></span>
                <span className={XClass}>
                    <div id="xIcon">✖</div>
                </span>

            </button>


            {/* Collapsed part 
      isMenuOpen handles the collapse, uncolapse */}
            <div className={"nav-content p-0 justify-content-center " + navClass} >

                <ul className="nav-items d-flex" style={navCorrection}>
                    <li
                        className="nav-item "
                    >
                        <p
                            onClick={() => handleToggle('home')}
                            className='p-3 smallText nav_item_mobile'

                        >
                            Home
                        </p>
                    </li>
                    <li className="nav-item">
                        <p
                            onClick={() => handleToggle('history')}
                            className='p-3 smallText nav_item_mobile'

                        >
                            Histórico
                     </p>
                    </li>
                </ul>
            </div>
        </nav>

    );
}
