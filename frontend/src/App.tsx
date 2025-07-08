import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectDetailsPage from "./components/ProjectDetailsPage";

function App() {
  return (
    <Router basename="/portfolio-canda">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
