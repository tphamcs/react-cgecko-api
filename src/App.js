import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route } from 'react-router-dom';
import Header from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
