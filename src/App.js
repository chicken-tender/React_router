import './App.css';
import Home from './pages/Home';
import FindMentor from './pages/FindMentor';
import InformationBoard from './pages/InformationBoard';
import PortfolioBoard from './pages/PortfolioBoard';
import WorkersBoard from './pages/WorkersBorad';
import BestBoard from './pages/BestBoard';
import QnABoard from './pages/QnABoard';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// <Route path="주소 규칙" element={보여줄 컴포넌트 JSX} />
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mentor' element={<FindMentor />} />
        <Route path='/information' element={<InformationBoard />} />
        <Route path='/portfolio' element={<PortfolioBoard />} />
        <Route path='/workers' element={<WorkersBoard />} />
        <Route path='/best' element={<BestBoard />} />
        <Route path='/qna' element={<QnABoard />} />
        <Route path='/best/home' element={<Home />} />
        <Route path='/profiles/:username' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
