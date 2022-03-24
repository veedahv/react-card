// import logo from '../logo.svg';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <div className="">
      <header className="App-header">
        <nav className="nav">
          <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" width="60px" />
            <span>ReactFacts</span>
          </div>
        <div className="nav-items">
        React Course - Project 1
        </div>
        </nav>
      </header>
    </div>
  );
}
