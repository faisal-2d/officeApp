import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Courses from "./Components/Courses";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ForgotPassword from "./Components/Login/ForgotPassword";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import NotFound from "./Components/NotFound";
import Aqeedah from "./Components/NoticeBoard/Aqeedah/Aqeedah";
import AqeedahDetails from "./Components/NoticeBoard/Aqeedah/AqeedahDetails";
import AqeedahResultPage from "./Components/NoticeBoard/Aqeedah/AqeedahResultPage";
import NoticeBoard from "./Components/NoticeBoard/NoticeBoard";
import Registration from "./Components/Registration";
import Schedule from "./Components/Schedule/Schedule";
// import Aqeedah3ResultUpdate from './Components/NoticeBoard/Aqeedah/Aqeedah3ResultUpdate';
import AqeedahDue from "./Components/CourseRegistration/AqeedahDue";
import AqeedahRegistration from "./Components/CourseRegistration/AqeedahRegistration";
import NewRegAqeedah from "./Components/CourseRegistration/NewRegAqeedah";
import RequireAdmin from "./Components/Login/RequireAdmin";
import ReqiureAuth from "./Components/Login/RequireAuth";
import AlQuranInfo from "./Components/NoticeBoard/AlQuran/AlQuranInfo";
import AqeedahInfo from "./Components/NoticeBoard/Aqeedah/AqeedahInfo";
import Aqeedah1LeaderBoard from "./Components/NoticeBoard/Aqeedah/LeaderBoard/Aqeedah1LeaderBoard";
import Arabic from "./Components/NoticeBoard/Arabic/Arabic";
import ArabicInfo from "./Components/NoticeBoard/Arabic/ArabicInfo";
import ArabicRegistration from "./Components/NoticeBoard/Arabic/ArabicRegistration";
import ArabicDetails from "./Components/NoticeBoard/Arabic/ArabicResultPage/ArabicDetails";
import ArabicResultPage from "./Components/NoticeBoard/Arabic/ArabicResultPage/ArabicResultPage";
import NewRegArabic from "./Components/NoticeBoard/Arabic/NewRegArabic";
import DuaInfo from "./Components/NoticeBoard/Dua/DuaInfo";
import DuaRegistration from "./Components/NoticeBoard/Dua/DuaRegistration";
import Fiqh from "./Components/NoticeBoard/Fiqh/Fiqh";
import FiqhInfo from "./Components/NoticeBoard/Fiqh/FiqhInfo";
import FiqhDetails from "./Components/NoticeBoard/Fiqh/FiqhResult/FiqhDetails";
import FiqhResultPage from "./Components/NoticeBoard/Fiqh/FiqhResult/FiqhResultPage";
import FiqhLeaderboard from "./Components/NoticeBoard/Fiqh/LeaderBoard/FiqhLeaderboard";
import SeeratInfo from "./Components/NoticeBoard/Seerat/SeeratInfo";
import TafseerInfo from "./Components/NoticeBoard/Tafseer/TafseerInfo";
import TajweedInfo from "./Components/NoticeBoard/Tajweed/TajweedInfo";
import AddReview from "./Components/Reviews/AddReview";
import AqeedahReviews from "./Components/Reviews/AqeedahReviews";

import SeeratLeaderboard from "./Components/NoticeBoard/Seerat/LeaderBoard/SeeratLeaderboard";
import Seerat from "./Components/NoticeBoard/Seerat/Seerat";
import SeeratDetails from "./Components/NoticeBoard/Seerat/SeeratResult/SeeratDetails";
import SeeratResultPage from "./Components/NoticeBoard/Seerat/SeeratResult/SeeratResultPage";
import TafseerLeaderboard from "./Components/NoticeBoard/Tafseer/LeaderBoard/TafseerLeaderboard";
import Tafseer from "./Components/NoticeBoard/Tafseer/Tafseer";
import TafseerDetails from "./Components/NoticeBoard/Tafseer/TafseerResult/TafseerDetails";
import TafseerResultPage from "./Components/NoticeBoard/Tafseer/TafseerResult/TafseerResultPage";
import Office from "./Components/Office";

import CertificateNameQuery from "./Components/CertificateNameQuery/CertificateNameQuery";
import RequireModerator from "./Components/Login/RequireModerator";
import MessengerPlugin from "./Components/MessengerPlugin";
import MeritList from "./Components/NoticeBoard/Aqeedah/LeaderBoard/MeritList";
import Dua from "./Components/NoticeBoard/Dua/Dua";
import DuaDetails from "./Components/NoticeBoard/Dua/DuaResultPage/DuaDetails";
import DuaResultPage from "./Components/NoticeBoard/Dua/DuaResultPage/DuaResultPage";
import NewRegDua from "./Components/NoticeBoard/Dua/NewRegDua";
import ScholarshipBoard from "./Components/Scholarship/ScholarshipBoard";
import ScholarshipDetails from "./Components/Scholarship/ScholarshipDetails";
import ScholarshipList from "./Components/Scholarship/ScholarshipList";
import ScholarshipUpdater from "./Components/Scholarship/Updater/ScholarshipUpdater";
import ResultUpdater from "./Components/Updater/ResultUpdater";
import StudentImport from "./Components/Updater/StudentImport";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="w-full">
        <MessengerPlugin></MessengerPlugin>
      </div>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="courses" element={<Courses />}></Route>
        <Route path="courses/aqeedah" element={<AqeedahInfo />}></Route>
        <Route path="courses/arabic" element={<ArabicInfo />}></Route>
        <Route path="courses/dua" element={<DuaInfo />}></Route>
        <Route path="courses/fiqh" element={<FiqhInfo />}></Route>
        <Route path="courses/tafseer" element={<TafseerInfo />}></Route>
        <Route path="courses/seerat" element={<SeeratInfo />}></Route>
        <Route path="courses/tajweed" element={<TajweedInfo />}></Route>
        <Route path="courses/alquran" element={<AlQuranInfo />}></Route>

        <Route path="noticeboard" element={<NoticeBoard />}></Route>
        <Route path="aqeedah" element={<Aqeedah />}></Route>
        <Route path="aqeedah-due" element={<AqeedahDue />}></Route>
        <Route path="aqeedah-:batch" element={<AqeedahResultPage />}></Route>
        <Route path="aqeedah-:batch/:sn" element={<AqeedahDetails />}></Route>
        <Route
          path="meritlist-aqeedah-:batch/:sn"
          element={<MeritList />}
        ></Route>
        <Route
          path="leaderboard-aqeedah1-:batch/:sn"
          element={<Aqeedah1LeaderBoard />}
        ></Route>

        <Route path="fiqh" element={<Fiqh />}></Route>
        <Route path="fiqh-due" element={<AqeedahDue />}></Route>
        <Route path="fiqh-:batch" element={<FiqhResultPage />}></Route>
        <Route path="fiqh-:batch/:sn" element={<FiqhDetails />}></Route>
        <Route
          path="leaderboard:level-fiqh-:batch/:sn"
          element={<FiqhLeaderboard />}
        ></Route>

        <Route path="seerat" element={<Seerat />}></Route>
        <Route path="seerat-due" element={<AqeedahDue />}></Route>
        <Route path="seerat-:batch" element={<SeeratResultPage />}></Route>
        <Route path="seerat-:batch/:sn" element={<SeeratDetails />}></Route>
        <Route
          path="leaderboard:level-seerat-:batch/:sn"
          element={<SeeratLeaderboard />}
        ></Route>

        <Route path="tafseer" element={<Tafseer />}></Route>
        <Route path="tafseer-due" element={<AqeedahDue />}></Route>
        <Route path="tafseer-:batch" element={<TafseerResultPage />}></Route>
        <Route path="tafseer-:batch/:sn" element={<TafseerDetails />}></Route>
        <Route
          path="leaderboard:level-tafseer-:batch/:sn"
          element={<TafseerLeaderboard />}
        ></Route>

        <Route path="dua" element={<Dua />}></Route>
        <Route path="dua-due" element={<AqeedahDue />}></Route>
        <Route path="dua-:batch" element={<DuaResultPage />}></Route>
        <Route path="dua-:batch/:sn" element={<DuaDetails />}></Route>
        <Route
          path="new-dua-registration"
          element={
            <ReqiureAuth>
              <RequireAdmin>
                <NewRegDua />
              </RequireAdmin>
            </ReqiureAuth>
          }
        ></Route>

        {/* <Route path='aqeedah-14/:sn/update-result' element={<RequireAdmin><Aqeedah3ResultUpdate></Aqeedah3ResultUpdate></RequireAdmin>}></Route> */}
        <Route path="reviews" element={<AqeedahReviews />}></Route>
        <Route path="add-review" element={<AddReview />}></Route>
        <Route path="arabic" element={<Arabic />}></Route>
        <Route path="arabic-:batch" element={<ArabicResultPage />}></Route>
        <Route path="arabic-:batch/:sn" element={<ArabicDetails />}></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route path="schedule" element={<Schedule></Schedule>}></Route>
        <Route path="registration" element={<Registration />}></Route>

        <Route
          path="new-aqeedah-registration"
          element={
            <ReqiureAuth>
              <RequireAdmin>
                <NewRegAqeedah />
              </RequireAdmin>
            </ReqiureAuth>
          }
        ></Route>
        <Route
          path="new-arabic-registration"
          element={
            <ReqiureAuth>
              <RequireAdmin>
                <NewRegArabic />
              </RequireAdmin>
            </ReqiureAuth>
          }
        ></Route>
        <Route
          path="result-update"
          element={
            <ReqiureAuth>
              <RequireAdmin>
                <ResultUpdater></ResultUpdater>
              </RequireAdmin>
            </ReqiureAuth>
          }
        ></Route>
        <Route
          path="office"
          element={
            <ReqiureAuth>
              <RequireAdmin>
                <Office></Office>
              </RequireAdmin>
            </ReqiureAuth>
          }
        ></Route>

        <Route
          path="scholarship/"
          element={
            <ReqiureAuth>
              <RequireModerator>
                <ScholarshipBoard></ScholarshipBoard>
              </RequireModerator>
            </ReqiureAuth>
          }
        ></Route>
        <Route
          path="scholarship/:course"
          element={
            <ReqiureAuth>
              <RequireModerator>
                <ScholarshipList></ScholarshipList>
              </RequireModerator>
            </ReqiureAuth>
          }
        ></Route>
        <Route
          path="scholarship/:course/:sn"
          element={
            <ReqiureAuth>
              <RequireModerator>
                <ScholarshipDetails></ScholarshipDetails>
              </RequireModerator>
            </ReqiureAuth>
          }
        ></Route>
        <Route
          path="scholarship/updater"
          element={
            <ReqiureAuth>
              <RequireModerator>
                <ScholarshipUpdater></ScholarshipUpdater>
              </RequireModerator>
            </ReqiureAuth>
          }
        ></Route>

        <Route
          path="registration-aqeedah"
          element={<AqeedahRegistration />}
        ></Route>
        <Route
          path="registration-arabic"
          element={<ArabicRegistration />}
        ></Route>
        <Route path="registration-dua" element={<DuaRegistration />}></Route>
        <Route
          path="all-student-names"
          element={<CertificateNameQuery />}
        ></Route>
        <Route path="student-import" element={<StudentImport />}></Route>

        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="forgot-password" element={<ForgotPassword />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
