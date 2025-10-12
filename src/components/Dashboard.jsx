import React from "react";
import { useNavigate } from "react-router-dom";  // ✅ Import this
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  { title: "Home", description: "Go to Home" },
  {
    title: "Seasonal Diseases",
    description: "Get information about current seasonal diseases.",
  },
  {
    title: "General Awareness",
    description: "Read tips and guides to stay healthy.",
  },
  {
    title: "Quiz/Chatbot",
    description: "Test your health knowledge with quizzes. Or ask any basic health related questions.",
  },
  {
    title: "Nearby PHCs",
    description: "Find hospitals and medical shops near you.",
  },
  {
    title: "Blogs & Articles",
    description: "Read health-related articles and government advisories.",
  },
];

const Dashboard = () => {
  const navigate = useNavigate(); // ✅ Call inside component

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 h-250 bg-pink-600 text-white p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-8">Seasonal Companion</h2>
            <nav className="flex-1">
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => navigate("/")} 
                    className="w-full text-left block px-3 py-2 rounded hover:bg-blue-700 transition"
                  >
                    HOME
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/seasonal")}
                    className="w-full text-left block px-3 py-2 rounded hover:bg-blue-700 transition"
                  >
                    SEASONAL DISEASES
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/general-awareness")}
                    className="w-full text-left block px-3 py-2 rounded hover:bg-blue-700 transition"
                  >
                    GENERAL AWARENESS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/quiz")}
                    className="w-full text-left block px-3 py-2 rounded hover:bg-blue-700 transition"
                  >
                    QUIZ/CHATBOT
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/nearby-phc")}
                    className="w-full text-left block px-3 py-2 rounded hover:bg-blue-700 transition"
                  >
                    NEARBY PHCs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/blogs")}
                    className="w-full text-left block px-3 py-2 rounded hover:bg-blue-700 transition"
                  >
                    BLOGS & ARTICLES
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 py-10 px-6 md:px-14">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
              Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center"
                >
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
