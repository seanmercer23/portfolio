import React from 'react';

function Header() {
  return (
    <div className="Header" id="home">
        <header>
            <h2 className="name">Sean Mercer</h2>
            <ul className="nav">
                <li id="home-link"><a className="nav-link" href="#">Home</a></li>
                <li><a className="nav-link" href="#about">About</a></li>
                <li><a className="nav-link" href="#projects">Projects</a></li>
                <li><a className="nav-link" href="https://drive.google.com/file/d/1gNEcQ1Psh1-TPnD_EnzU40NpXAPHpfnv/view?usp=sharing">Resume</a></li>
            </ul>
        </header>
    </div>
  );
}

export default Header;
