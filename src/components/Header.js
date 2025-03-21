import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext'; 
import '../Styles/Header.css';

function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    const color = theme === 'light' ? 'rgb(170, 156, 156)' : 'rgb(40, 37, 37)';
    const buttonClass = theme === 'dark' ? 'btn btn-light' : 'btn btn-dark';

    return (
        <header>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: color }}>
                <div className="container-fluid d-flex justify-content-between">
                    <Link className={theme === 'dark' ? "navbar-brand text-white" : 'navbar-brand'} to="/">
                        Jenil Savaliya
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={theme === 'dark' ? "nav-link text-white" : 'nav-link'} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={theme === 'dark' ? "nav-link text-white" : 'nav-link'} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={theme === 'dark' ? "nav-link text-white" : 'nav-link'} to="/projects">Projects</Link>
                        </li>
                    </ul>
                    <button onClick={toggleTheme} className={buttonClass}>
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
