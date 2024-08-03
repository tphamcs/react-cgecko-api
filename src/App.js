import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route } from 'react-router-dom';
import Header from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  const basePath = '/react-cgecko-api'

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path={`${basePath}/`} element={<Home/>} />
        <Route path={`${basePath}/contact`} element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
