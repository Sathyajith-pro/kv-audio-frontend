import './App.css';
import AdminPage from './pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';

function App() {
 

  return (
<BrowserRouter>
<Toaster position="top-right"/>

  <Routes path="/*"> 
    
    <Route path = "/admin/*" element = {<AdminPage/>}/>
    <Route path = "/*" element = {<HomePage/>}/>
    <Route path = "/login" element = {<LoginPage/>}/>
    

  </Routes>
 
 </BrowserRouter>
 

)
}
export default App
