
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <MainContent />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
