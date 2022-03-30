
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import React from 'react';


function App() {
  // function toggleTheme(theme) {
  // function toggleTheme() {
  //   console.log('theme');
  // }
  let [theme, setTheme] = React.useState('light');
  function toggleTheme() {
    setTheme((theme === 'light') ? 'dark' : 'light');
  }
  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <Header handleClick={toggleTheme} theme={theme}></Header>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
