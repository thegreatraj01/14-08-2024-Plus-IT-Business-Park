import { useEffect } from 'react';
import '../css/Header.css';
import logo from '/assets/header/logo.svg';
import menuIcon from '/assets/header/menu_icon.svg';
import cartIcon from '/assets/header/cart_icon.svg';
import closeIcon from '/assets/header/close_icon.svg';
import notificationIcon from '/assets/header/well_icon.svg';

function Header() {
    useEffect(() => {
        const openMenuButton = document.querySelector(".menu-icon-container");
        const closeMenuButton = document.querySelector("#close-menu");
        const navigationBar = document.querySelector(".navigation-bar");

        if (openMenuButton && closeMenuButton && navigationBar) {
            openMenuButton.addEventListener('click', openMenu);
            closeMenuButton.addEventListener('click', closeMenu);
        }

        return () => {
            if (openMenuButton) {
                openMenuButton.removeEventListener('click', openMenu);
            }
            if (closeMenuButton) {
                closeMenuButton.removeEventListener('click', closeMenu);
            }
        };
    }, []);

    function openMenu() {
        const navigationBar = document.querySelector(".navigation-bar");
        if (navigationBar) {
            navigationBar.classList.add("open");
            console.log('Menu opened');
        }
    }

    function closeMenu() {
        const navigationBar = document.querySelector(".navigation-bar");
        if (navigationBar) {
            navigationBar.classList.remove("open");
            console.log('Menu closed');
        }
    }

    return (
        <header id="header-placeholder">
            <div className="header">
                {/* for mobile view only */}
                <div className="menu-icon-container">
                    <img src={menuIcon} alt="menu icon" />
                </div>
                {/* for mobile view only */}
                <div className="mobile-icons-container">
                    <div>
                        <p>Hi, Raj</p>
                    </div>
                    <div id="icons-container">
                        <span>
                            <img src={notificationIcon} alt="notification icon" />
                        </span>
                        <span>
                            <img src={cartIcon} alt="cart icon" />
                        </span>
                    </div>
                </div>
                {/* for tablet and desktop */}
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                    <h1>
                        <span>IT </span>
                        <span>Trainings</span>
                    </h1>
                </div>
                <nav className="navigation-bar">
                    <ul>
                        <li id="close-menu">
                            <img src={closeIcon} alt="close menu" />
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Materials</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#Course-details-icon">Course</a>
                        </li>
                        <li>
                            <a href="#">Pages</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li id="log-in-button">
                            <button>Log-in</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
