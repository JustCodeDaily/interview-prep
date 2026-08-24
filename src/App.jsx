import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Intro from './pages/Intro';
import GridSequence from './pages/GridSequence/GridSequence';
import GridSequenceProblem from './pages/GridSequence/GridSequenceProblem';
import JosephProblem from './pages/JosephProblem/JosephProblem';
import StarComponent from './pages/StarComponent/StarComponent';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="q1" element={<Navigate to="/q1/problem" replace />} />
          <Route path="q1/problem" element={<GridSequenceProblem />} />
          <Route path="q1/solution" element={<GridSequence />} />
          <Route path="q2" element={<JosephProblem />} />
          <Route path="q3" element={<StarComponent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

