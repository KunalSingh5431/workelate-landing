import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyTeamsFail from './components/WhyTeamsFail';
import AppGrid from './components/AppGrid';
import WorkdayComparison from './components/WorkdayComparison';
import TimelineSection from './components/TimelineSection';
import QuizSection from './components/QuizSection';
import ResultCard from './components/ResultCard';

const App = () => (
  <Layout style={{ background: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
    <Navbar />
    <HeroSection />
    <WhyTeamsFail />
    <AppGrid />
    <WorkdayComparison />
    <TimelineSection />

    {/* ✅ This block replaces the quiz area (one at a time) */}
    <Routes>
      <Route path="/" element={<QuizSection />} />
      <Route path="/quiz" element={<QuizSection />} />
      <Route path="/result" element={<ResultCard />} />
    </Routes>
  </Layout>
);

export default App;
