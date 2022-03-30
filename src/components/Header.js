// import logo from '../logo.svg';
import logo from '../assets/logo.svg';
// import React from 'react';

export default function Header(toggle) {
  // let [theme, setTheme] = React.useState('light');
  // function toggleTheme() {
  //   setTheme((theme === 'light') ? 'dark' : 'light');
  // }
  return (
    <div className="">
      <header className="App-header">
        <nav className="nav">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" width="60px" />
            <span>ReactFacts</span>
          </div>
          <div className="nav-items">
            {/* React Course - Project 1 */}
            <span className={toggle.theme === 'light' ? 'toggle-text active' : 'toggle-text'}>Light</span>
            <button onClick={toggle.handleClick} className="toggleBtn">
              <span className="toggle-ball"></span></button>
            <span className={toggle.theme === 'dark' ? 'toggle-text active' : 'toggle-text'}>Dark</span>
          </div>
        </nav>
      </header>
    </div>
  );
}
