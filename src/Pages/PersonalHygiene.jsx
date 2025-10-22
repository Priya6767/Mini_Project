import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PersonalHygiene = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-16 text-center shadow-md">
          <h1 className="text-4xl font-bold mb-3">Personal Hygiene</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Good hygiene is your first line of defense against infections. Learn daily habits that protect your health.
          </p>
        </section>

        {/* Main Content Section */}
        <section className="py-12 px-6 md:px-20 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Personal Hygiene Matters</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Personal hygiene refers to the practices that help maintain cleanliness and promote good health. It includes everything from washing your hands regularly to bathing, brushing your teeth, and keeping your clothes clean. Maintaining hygiene is essential for preventing the spread of diseases and for overall physical and mental well-being.
          </p>

          {/* Hygiene Practices Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hand Washing */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-blue-600 mb-2">👐 Hand Hygiene</h3>
              <p className="text-sm text-gray-700">
                Wash hands with soap and water for at least 20 seconds—especially before eating, after using the restroom, or touching surfaces in public places. Hand hygiene is crucial to prevent the spread of germs.
              </p>
            </div>

            {/* Oral Care */}
            <div className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-pink-600 mb-2">🦷 Oral Hygiene</h3>
              <p className="text-sm text-gray-700">
                Brush your teeth twice daily and floss once a day to prevent tooth decay, gum diseases, and bad breath. Use fluoride toothpaste and replace your toothbrush every 3 months.
              </p>
            </div>

            {/* Bathing & Skin Care */}
            <div className="bg-yellow-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-yellow-700 mb-2">🚿 Daily Bathing</h3>
              <p className="text-sm text-gray-700">
                Bathe daily using mild soap to remove sweat, dirt, and bacteria. Focus on areas prone to odor or infections like underarms and feet. Change into clean clothes afterward.
              </p>
            </div>

            {/* Nail & Hair Care */}
            <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-purple-700 mb-2">💇‍♀️ Hair & Nail Care</h3>
              <p className="text-sm text-gray-700">
                Keep your nails trimmed and clean. Wash hair regularly and keep your scalp healthy. These prevent dandruff, lice, and other scalp or skin infections.
              </p>
            </div>

            {/* Clothing Hygiene */}
            <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-green-700 mb-2">👕 Clean Clothing</h3>
              <p className="text-sm text-gray-700">
                Change clothes daily, especially undergarments and socks. Wearing clean clothes helps prevent skin irritation and odor-causing bacteria.
              </p>
            </div>

            {/* Public Hygiene */}
            <div className="bg-red-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-red-600 mb-2">🚻 Public Hygiene</h3>
              <p className="text-sm text-gray-700">
                Practice hygiene in public places—avoid spitting, dispose of waste properly, and maintain toilet cleanliness. This protects both personal and community health.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="bg-gray-100 py-10 px-6 md:px-20">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Hygiene Tips</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Always carry a hand sanitizer when traveling.</li>
            <li>Use deodorant to manage body odor.</li>
            <li>Don’t share personal items like towels or toothbrushes.</li>
            <li>Stay clean during menstruation by changing sanitary products regularly.</li>
            <li>Clean your phone and commonly touched items regularly.</li>
          </ul>
        </section>

        {/* External Resources */}
        <section className="bg-white py-10 px-6 md:px-20 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Learn More</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.cdc.gov/handwashing/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700"
            >
              CDC Handwashing Guide
            </a>
            <a
              href="https://www.who.int/news-room/questions-and-answers/item/personal-hygiene"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-5 py-2 rounded-md shadow hover:bg-green-700"
            >
              WHO on Personal Hygiene
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PersonalHygiene;
