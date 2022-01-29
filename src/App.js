import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/details/:id' element={<Detail />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
