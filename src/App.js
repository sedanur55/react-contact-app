import './App.css';
import Contacts from './components/Contacts/intex';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import Error404 from './components/Error404';
import Signup from './components/Signup';
import * as yup from 'yup'; 
import {BrowserRouter as Router, Route, Routes,NavLink} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      
    <header className="top-header">
      <nav className="top-nav">
        <ul>
          <li>
            <NavLink activeclassname="active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/users">Contacts</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/signup">Signup</NavLink>
          </li>
        </ul>
      </nav>
      </header>
      <Routes>
      <Route path="/"  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users/*" element={<Contacts />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  </Router>
  );
}
export default App;





