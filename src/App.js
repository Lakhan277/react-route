
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { Routes,Route } from 'react-router-dom';
import Notfound from './Pages/Notfound';
import UserInfo from './Pages/UserInfo';
import Header from './Components/Header';
import index from './index.css';
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <>
      
    <Header/>
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<Notfound/>}/>
      <Route path="/UserInfo" element={<UserInfo/>}/>
         </Routes>
      </>
    
    
  );
}

export default App;
