import { Routes, Route } from "react-router-dom";
import Jobs from "./components/Jobs";
import NavBar from "./components/NavBar";


const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/jobs" element={ <Jobs/> } />
        <Route path="/companies" element={ <Jobs/> } />
        <Route path="/projects" element={ <Jobs/> } />
        <Route path="/courses" element={ <Jobs/> } />
      </Routes>
    </div>
  )
};

export default App;