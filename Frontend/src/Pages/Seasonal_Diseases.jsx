import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import summer from "../assets/summer.jpg";
import monsoon from "../assets/monsoon.jpeg";
import winter from "../assets/winter.jpeg";

const Seasonal_Diseases = () => {
  const navigate = useNavigate();

  const [showSummer, setShowSummer] = useState(false);
  const [showMonsoon, setShowMonsoon] = useState(false);
  const [showWinter, setShowWinter] = useState(false);

  // Navigate function for diseases
  const handleDiseaseSelect = (value) => {
    switch(value) {
      // Summer
      case "heat-stroke":
        navigate("/heatstrokeinfo");
        break;
      case "dehydration":
        navigate("/dehydration-info");
        break;
      case "food-poisoning":
        navigate("/food-poisoning-info");
        break;
      case "heat-rashes":
        navigate("/heat-rashes-info");
        break;
      case "measles-mumps-chickenpox":
        navigate("/measles-mumps-chickenpox-info");
        break;
      case "conjunctivitis":
        navigate("/conjunctivitis-info");
        break;
      // Monsoon
      case "dengue":
        navigate("/dengue-info");
        break;
      case "malaria":
        navigate("/malaria-info");
        break;
      case "chikungunya": 
        navigate("/chikungunya-info");
        break;
      case "typhoid":
        navigate("/typhoid-info");
        break;
      case "leptospirosis":
        navigate("/leptospirosis-info");
        break;
      case "cholera": 
        navigate("/cholera-info");  
        break; 
      case "Common-cold-flu":
        navigate("/common-cold-flu-info");
        break;
        
      // Winter
      case "common-cold":
        navigate("/common-cold-info");
        break;
      case "flu":
        navigate("/flu-info");
        break;
      case "asthma":
        navigate("/asthma-info");
        break;
      case "bronchitis":
        navigate("/bronchitis-info");
        break;
      case "pneumonia":
        navigate("/pneumonia-info");
        break;
      case "joint-pain":
        navigate("/jointpain-info");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 bg-pink-600 text-white p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-8">Seasonal Companion</h2>
            <nav className="flex-1">
              <ul className="space-y-4">
                {/* <li><button onClick={() => navigate("/home")} className="w-full text-left px-3 py-2 rounded hover:bg-blue-700">HOME</button></li> */}
                <li><button onClick={() => navigate("/seasonal")} className="w-full text-left px-3 py-2 rounded hover:bg-blue-700">SEASONAL DISEASES</button></li>
                <li><button onClick={() => navigate("/general-awareness")} className="w-full text-left px-3 py-2 rounded hover:bg-blue-700">GENERAL AWARENESS</button></li>
                <li><button onClick={() => navigate("/quiz")} className="w-full text-left px-3 py-2 rounded hover:bg-blue-700">QUIZ/CHATBOT</button></li>
                <li><button onClick={() => navigate("/nearby-phcs")} className="w-full text-left px-3 py-2 rounded hover:bg-blue-700">NEARBY PHCs</button></li>
                <li><button onClick={() => navigate("/blogs")} className="w-full text-left px-3 py-2 rounded hover:bg-blue-700">BLOGS & ARTICLES</button></li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 py-10 px-6 md:px-14">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
              Seasonal Diseases
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/*Summer Section */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <img src={summer} alt="Summer" className="rounded-lg mb-4 w-full h-40 object-cover"/>
                <button
                  className="text-xl font-bold mb-4 text-center text-white bg-blue-500 hover:bg-red-600 w-full rounded transition py-2"
                  onClick={() => setShowSummer(!showSummer)}
                >
                  Summer
                </button>
                <p className="text-gray-600 text-center mt-4">
                  Common diseases in summer include dehydration, heat stroke,
                  chickenpox, and food poisoning. Stay hydrated and avoid
                  excessive heat exposure.
                </p>

                {showSummer && (
                  <div className="mt-3">
                    <label htmlFor="summer-select" className="block mb-2 text-sm font-medium text-gray-700 text-center">
                       Summer Diseases
                    </label>
                    <select
                      id="summer-select"
                      className="block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-red-200"
                      onChange={(e) => handleDiseaseSelect(e.target.value)}
                      defaultValue=""
                    >
                      <option value="" disabled>Select a disease</option>
                      <option value="heat-stroke">Heat Stroke</option>
                      <option value="dehydration">Dehydration</option>
                      <option value="food-poisoning">Food Poisoning</option>
                      <option value="heat-rashes">Heat Rashes</option>
                      <option value="measles-mumps-chickenpox">Measles, Mumps & Chickenpox</option>
                      <option value="conjunctivitis">Conjunctivitis (Eye Flu)</option>
                    </select>
                  </div>
                )}
              </div>

              {/*Monsoon Section */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <img src={monsoon} alt="Monsoon" className="rounded-lg mb-4 w-full h-40 object-cover"/>
                <button
                  className="text-xl font-bold mb-4 text-center text-white bg-blue-500 hover:bg-red-600 w-full rounded transition py-2"
                  onClick={() => setShowMonsoon(!showMonsoon)}
                >
                  Monsoon
                </button>
                <p className="text-gray-600 text-center mt-4">
                  Monsoon brings water-borne and mosquito-borne diseases like
                  dengue, malaria, and cholera. Keep surroundings dry and use
                  mosquito repellents.
                </p>
                {showMonsoon && (
                  <div className="mt-3">
                    <label htmlFor="monsoon-select" className="block mb-2 text-sm font-medium text-gray-700 text-center">
                       Monsoon Diseases
                    </label>
                    <select
                      id="monsoon-select"
                      className="block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-red-200"
                      onChange={(e) => handleDiseaseSelect(e.target.value)}
                      defaultValue=""
                    >
                      <option value="" disabled>Select a disease</option>
                      <option value="dengue">Dengue</option>
                      <option value="malaria">Malaria</option>
                      <option value="chikungunya">Chikungunya</option>
                      <option value="typhoid">Typhoid</option>
                      <option value="leptospirosis">Leptospirosis</option>
                      <option value="cholera">Cholera</option>
                      <option value="common-cold">Common Cold & Flu</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Winter Section */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <img src={winter} alt="Winter" className="rounded-lg mb-4 w-full h-40 object-cover"/>
                <button
                  className="text-xl font-bold mb-4 text-center text-white bg-blue-500 hover:bg-red-600 w-full rounded transition py-2"
                  onClick={() => setShowWinter(!showWinter)}
                >
                  Winter
                </button>
                <p className="text-gray-600 text-center mt-4">
                  In winter, flu, pneumonia, and asthma are common. Stay warm,
                  eat healthy foods, and maintain good hygiene to prevent
                  infections.
                </p>
                {showWinter && (
                  <div className="mt-3">
                    <label htmlFor="winter-select" className="block mb-2 text-sm font-medium text-gray-700 text-center">
                       Winter Diseases
                    </label>
                    <select
                      id="winter-select"
                      className="block w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-red-200"
                      onChange={(e) => handleDiseaseSelect(e.target.value)}
                      defaultValue=""
                    >
                      <option value="" disabled>Select a disease</option>
                      <option value="common-cold">Common Cold</option>
                      <option value="flu">Flu (Influenza)</option>
                      <option value="asthma">Asthma</option>
                      <option value="bronchitis">Bronchitis</option>
                      <option value="pneumonia">Pneumonia</option>
                      <option value="joint-pain">Joint Pain & Arthritis</option>
                    </select>
                  </div>
                )}
              </div>

            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Seasonal_Diseases;
