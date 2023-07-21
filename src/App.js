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
import SignUp from './Components/Login/SignUp';
import ForgotPassword from './Components/Login/ForgotPassword';
import Aqeedah3ResultUpdate from './Components/NoticeBoard/Aqeedah/Aqeedah3ResultUpdate';
import RequireAdmin from './Components/Login/RequireAdmin';
import AqeedahReviews from './Components/Reviews/AqeedahReviews';
import AddReview from './Components/Reviews/AddReview';
import NewRegAqeedah from './Components/CourseRegistration/NewRegAqeedah';
import ReqiureAuth from './Components/Login/RequireAuth';
import Aqeedah1LeaderBoard from './Components/NoticeBoard/Aqeedah/LeaderBoard/Aqeedah1LeaderBoard';
import AqeedahInfo from './Components/NoticeBoard/Aqeedah/AqeedahInfo';
import ArabicInfo from './Components/NoticeBoard/Arabic/ArabicInfo';
import FiqhInfo from './Components/NoticeBoard/Fiqh/FiqhInfo';
import TafseerInfo from './Components/NoticeBoard/Tafseer/TafseerInfo';
import SeeratInfo from './Components/NoticeBoard/Seerat/SeeratInfo';
import Arabic from './Components/NoticeBoard/Arabic/Arabic';
import ArabicResultPage from './Components/NoticeBoard/Arabic/ArabicResultPage/ArabicResultPage';
import ArabicDetails from './Components/NoticeBoard/Arabic/ArabicResultPage/ArabicDetails';
import AqeedahDue from './Components/CourseRegistration/AqeedahDue';
import DuaInfo from './Components/NoticeBoard/Dua/DuaInfo';
import DuaRegistration from './Components/NoticeBoard/Dua/DuaRegistration';
import NewRegArabic from './Components/NoticeBoard/Arabic/NewRegArabic';
import ArabicRegistration from './Components/NoticeBoard/Arabic/ArabicRegistration';
import AqeedahRegistration from './Components/CourseRegistration/AqeedahRegistration';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='courses' element={<Courses/>}></Route>
        <Route path='courses/aqeedah' element={<AqeedahInfo/>}></Route>
        <Route path='courses/arabic' element={<ArabicInfo/>}></Route>
        <Route path='courses/dua' element={<DuaInfo/>}></Route>
        <Route path='courses/fiqh' element={<FiqhInfo/>}></Route>
        <Route path='courses/tafseer' element={<TafseerInfo/>}></Route>
        <Route path='courses/seerat' element={<SeeratInfo/>}></Route>
        <Route path='noticeboard' element={<NoticeBoard/>}></Route>
        <Route path='aqeedah' element={<Aqeedah/>}></Route>
        <Route path='aqeedah-due' element={<AqeedahDue/>}></Route>
        <Route path='aqeedah-:batch' element={<AqeedahResultPage/>}></Route>
        <Route path='aqeedah-:batch/:sn' element={<AqeedahDetails/>}></Route>
        <Route path='aqeedah-14/:sn/update-result' element={<RequireAdmin><Aqeedah3ResultUpdate></Aqeedah3ResultUpdate></RequireAdmin>}></Route>
        <Route path='meritlist-aqeedah-:batch/:sn' element={<MeritList/>}></Route>
        <Route path='leaderboard-aqeedah1-:batch/:sn' element={<Aqeedah1LeaderBoard/>}></Route>
        <Route path='reviews' element={<AqeedahReviews/>}></Route>
        <Route path='add-review' element={<AddReview/>}></Route>
        <Route path='arabic' element={<Arabic/>}></Route>
        <Route path='arabic-:batch' element={<ArabicResultPage/>}></Route>
        <Route path='arabic-:batch/:sn' element={<ArabicDetails/>}></Route>
        <Route path='about-us' element={<AboutUs/>}></Route>
        <Route path='schedule' element={<Schedule></Schedule>}></Route>
        <Route path='registration' element={<Registration/>}></Route>
        <Route path='new-aqeedah-registration' element={<ReqiureAuth><RequireAdmin><NewRegAqeedah/></RequireAdmin></ReqiureAuth>}></Route>
        <Route path='new-arabic-registration' element={<ReqiureAuth><RequireAdmin><NewRegArabic/></RequireAdmin></ReqiureAuth>}></Route>
        <Route path='registration-aqeedah' element={<AqeedahRegistration/>}></Route>
        <Route path='registration-arabic' element={<ArabicRegistration/>}></Route>
        <Route path='registration-dua' element={<DuaRegistration/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<SignUp/>}></Route>
        <Route path='forgot-password' element={<ForgotPassword/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Messenger></Messenger>
      <Footer></Footer>
    </div>
  );
}

export default App;
