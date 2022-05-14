import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<Home/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
