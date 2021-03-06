import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './Components/Courses';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Registration from './Components/Registration';
import NotFound from './Components/NotFound';
import Schedule from './Components/Schedule/Schedule';
import Messenger from './Components/Messenger';
import AboutUs from './Components/AboutUs';
import NoticeBoard from './Components/NoticeBoard/NoticeBoard';
import Login from './Components/Login/Login';
import Aqeedah from './Components/NoticeBoard/Aqeedah/Aqeedah';
import AqeedahResultPage from './Components/NoticeBoard/Aqeedah/AqeedahResultPage';
import AqeedahDetails from './Components/NoticeBoard/Aqeedah/AqeedahDetails';
import MeritList from './Components/NoticeBoard/Aqeedah/MeritList';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='courses' element={<Courses/>}></Route>
        <Route path='noticeboard' element={<NoticeBoard/>}></Route>
        <Route path='aqeedah' element={<Aqeedah/>}></Route>
        <Route path='aqeedah-:batch' element={<AqeedahResultPage/>}></Route>
        <Route path='aqeedah-:batch/:sn' element={<AqeedahDetails/>}></Route>
        <Route path='meritlist-aqeedah-:batch' element={<MeritList/>}></Route>
        <Route path='about-us' element={<AboutUs/>}></Route>
        <Route path='schedule' element={<Schedule></Schedule>}></Route>
        <Route path='registration' element={<Registration/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Messenger></Messenger>
      <Footer></Footer>
    </div>
  );
}

export default App;
