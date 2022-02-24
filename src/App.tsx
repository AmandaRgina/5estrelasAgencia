import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Space from './components/Body/Space';


function App() {
  return (
     <>
      <header className="App-header">
      
        <nav>

          <Navbar/>
        </nav>

      </header>
      <>
        <Space/>
      </>
      <Footer/>
      </>
    
  );
}

export default App;
