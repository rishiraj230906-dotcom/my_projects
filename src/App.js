import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Games from "./pages/all_games";
import Register from "./pages/register";
import Login from "./pages/login";
import Emulators from './pages/emulators';
import User from './pages/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [isAuth, setauth]=useState(false);
  const handleLogin =()=> setauth(true);
  const handleLogout =()=> setauth(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [ActiveTab, setActiveTab] = useState("friends");
  const [Username, setUsername] = useState("");
  return (
    <div className="App">
       <BrowserRouter>
        <Header setActiveLink={setActiveLink} activeLink={activeLink} isAuth={isAuth} onLogout={handleLogout} Username={Username}/>
          <Routes>
            <Route path='/' element={<Home setActiveLink={setActiveLink} isAuth={isAuth} ActiveTab={ActiveTab} setActiveTab={setActiveTab} Username={Username}/>}></Route>
            <Route path='/all_games' element={<Games/>}></Route>
            <Route path='/emulators' element={<Emulators/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login  onLogin={handleLogin} set_Username={setUsername}/>}></Route>
          </Routes>
        <Footer/>  
       </BrowserRouter>
    </div>
  );
}

export default App;
