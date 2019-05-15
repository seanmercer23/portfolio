import React from 'react';

function Header() {
  return (
    <div className="Header" id="home">
        <header>
            <h2 className="name">Sean Mercer</h2>
            <ul className="nav">
                <li><a className="nav-link" href="#home">Home</a></li>
                <li><a className="nav-link" href="#about">About</a></li>
                <li><a className="nav-link" href="#projects">Projects</a></li>
                <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
        </header>
    </div>
  );
}

export default Header;
