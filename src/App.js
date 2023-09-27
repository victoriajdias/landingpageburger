import Navbar from './components/Navbar'
import Início from './components/Início'
import Sobre from './components/Sobre'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './components/Menu.css';
import './components/Footer.css';
import './App.css';

function App() {
  return (
    <div className="App">
    

    <Navbar />
    <Início />
    <Sobre />
    <Menu />
    <Footer />
    </div>
    
  );
}

export default App;
