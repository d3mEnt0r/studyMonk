import './App.css';
import HomePage from './components/homePage/homePage';
import Contact from './components/contact/contact';
import Login from './components/login/login';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/login" element={ <Login /> }/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
