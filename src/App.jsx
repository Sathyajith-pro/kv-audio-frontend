import './App.css';
import AdminPage from './pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import LoginPage from './pages/login/login';

function App() {
 

  return (
<BrowserRouter>

  <Routes path="/*"> 
    
    <Route path = "/admin/*" element = {<AdminPage/>}/>
    <Route path = "/*" element = {<HomePage/>}/>
    <Route path = "/login" element = {<LoginPage/>}/>
    

  </Routes>
 
 </BrowserRouter>

)
}
export default App
