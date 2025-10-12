import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import Dashboard from './components/Dashboard';
import Seasonal_Diseases from './Pages/Seasonal_Diseases';
import General_Awarness from './Pages/General_Awarness';
import Quiz from './Pages/Quiz';
import HeatStrokeInfo from './Pages/summer/HeatStrokeInfo';
import DengueInfo from './Pages/monsoon/Dengu';
import CommonColdInfo from './Pages/winter/Common_Cold';
import AsthmaInfo from './Pages/winter/Asthma'; 
import FluInfo from './Pages/winter/Flu';
import BronchitisInfo from './Pages/winter/Bronchitis';
import PneumoniaInfo from './Pages/winter/Pneumonia'; 
import JointPainArthritisInfo from './Pages/winter/JointPain';
import DehydrationInfo from './Pages/summer/Dehydration';
import FoodPoisoningInfo from './Pages/summer/FoodPoisoning';
import HeatRashesInfo from './Pages/summer/HeatRashes';
import MeaslesMumpsChickenpoxInfo from './Pages/summer/Measles';
import ConjunctivitisInfo from './Pages/summer/Conjunctivitis';
import MalariaInfo from './Pages/monsoon/Malaria';
import ChikungunyaInfo from './Pages/monsoon/Chikungunya';
import TyphoidInfo from './Pages/monsoon/Typhoid';
import CholeraInfo from './Pages/monsoon/Cholera';
import LeptospirosisInfo from './Pages/monsoon/Leptospirosis';
import CommonColdFluInfo from './Pages/monsoon/CommonCold_Flu';

function App() {
  return (
    <Router>
      {/* Always visible content, e.g. Navbar could go here */}
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        
        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/seasonal" element={<Seasonal_Diseases />} />
        <Route path="/general-awareness" element={<General_Awarness />
} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/heatstrokeinfo" element={<HeatStrokeInfo />} />
        <Route path="/dengue-info" element={<DengueInfo />} />
        <Route path="/common-cold-info" element={<CommonColdInfo />} />
        <Route path="/asthma-info" element={<AsthmaInfo />} />
        <Route path="/flu-info" element={<FluInfo />} />
        <Route path="/bronchitis-info" element={<BronchitisInfo />} />
        <Route path="/pneumonia-info" element={<PneumoniaInfo />} />
        <Route path="/jointpain-info" element={<JointPainArthritisInfo />} />
        <Route path="/dehydration-info" element={<DehydrationInfo />} />
        <Route path="/food-poisoning-info" element={<FoodPoisoningInfo />} />
        <Route path="/heat-rashes-info" element={<HeatRashesInfo />} />
        <Route path="/measles-mumps-chickenpox-info" element={<MeaslesMumpsChickenpoxInfo />} />
        <Route path="/conjunctivitis-info" element={<ConjunctivitisInfo />} />
        <Route path="/malaria-info" element={<MalariaInfo />} />
        <Route path="/chikungunya-info" element={<ChikungunyaInfo />} />
        <Route path="/typhoid-info" element={<TyphoidInfo />} />
        <Route path="/cholera-info" element={<CholeraInfo />} />
        <Route path="/leptospirosis-info" element={<LeptospirosisInfo />} />
        <Route path="/common-cold-flu-info" element={<CommonColdFluInfo />} />

      </Routes>
    </Router>
  );
}

export default App;
