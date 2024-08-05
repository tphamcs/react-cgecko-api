import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
