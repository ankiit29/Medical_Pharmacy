import Front from './components/Front'
import Login from './components/Login'
import Header from './components/Header'
import PUpload from './components/PUpload';
import VUpload from './components/VUpload';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  './styles/front.css';
import  './styles/login.css';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/"element={<Front/>}/>
          <Route path="/CLogin" element={<Login name="Customer"/>}/>
          <Route path="/PLogin" element={<Login name="Pharmacist"/>}/>
          <Route path="/PUpload" element={<PUpload/>}/>
          <Route path="/VUpload" element={<VUpload/>}/>
        </Routes>
      </Router>
  );
}

export default App;
