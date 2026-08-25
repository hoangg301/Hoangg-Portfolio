import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import TopScrolling from './components/TopScrolling';


function App() {
  return (
    <BrowserRouter>
      <TopScrolling />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
