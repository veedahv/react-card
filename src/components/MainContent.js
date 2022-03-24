export default function MainContent() {
    return (
      <div className="main-container">
        <div className="">
          <h1 className="main_title">Fun facts about React</h1>
          <ul className="list_container">
            <li className="facts">Was first released in 2013</li>
            <li className="facts">Was originally created by Jordan Walke</li>
            <li className="facts">Has well over 100K stars on GitHub</li>
            <li className="facts">Is maintained by Facebook</li>
            <li className="facts">Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </div>
      </div>
    );
  }