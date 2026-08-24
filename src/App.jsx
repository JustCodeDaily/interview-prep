import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Intro from './pages/Intro';
import Question1 from './pages/Question1';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="q1" element={<Question1 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

