import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './Components/Courses';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Registration from './Components/Registration';
import NotFound from './Components/NotFound';
import Schedule from './Components/Schedule/Schedule';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path='/schedule' element={<Schedule></Schedule>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
