import './App.css';
import SelectServices from './Pages/Appoinment/SelectServices';
import SelectProfessional from './Pages/Appoinment/SelectProfessional';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectServices />} />
        <Route path="/professional" element={<SelectProfessional />} />
      </Routes>
    </Router>
  );
} 

export default App;
