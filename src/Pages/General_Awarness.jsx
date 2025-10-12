import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const General_Awarness = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex flex-col">
        {/* 🌟 Hero Section */}
        <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-16 text-center shadow-md">
          <h1 className="text-4xl font-bold mb-3">Health & Wellness Awareness</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Stay informed with trusted health education, prevention tips, and awareness resources.
          </p>
        </section>

        {/* 🎥 Health Awareness Videos */}
        <section className="py-12 px-6 md:px-16 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Watch: Trusted Health Awareness Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <iframe
              className="rounded-xl shadow-md w-full h-64"
              src="https://www.youtube.com/embed/6zZbX4P5yBk"
              title="Healthy Eating Habits"
              allowFullScreen
            ></iframe>

            <iframe
              className="rounded-xl shadow-md w-full h-64"
              src="https://www.youtube.com/embed/HeaV2b9C9Kg"
              title="Mental Health Awareness"
              allowFullScreen
            ></iframe>

            <iframe
              className="rounded-xl shadow-md w-full h-64"
              src="https://www.youtube.com/embed/lhZx4cVvT_g"
              title="Prevention of Infectious Diseases"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* 🩺 Prevention Measures */}
        <section className="py-12 px-6 md:px-16 bg-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Preventive Health Measures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Personal Hygiene",
                desc: "Wash your hands frequently, maintain oral hygiene, and bathe daily to reduce disease risk.",
              },
              {
                title: "Balanced Diet",
                desc: "Eat more fruits, vegetables, and whole grains while avoiding junk food and excessive sugar.",
              },
              {
                title: "Regular Exercise",
                desc: "Stay active for at least 30 minutes daily to improve heart health and immunity.",
              },
              {
                title: "Adequate Sleep",
                desc: "Get 7–8 hours of quality sleep to help your body recover and strengthen immunity.",
              },
              {
                title: "Stay Hydrated",
                desc: "Drink enough water daily to maintain metabolism and prevent dehydration.",
              },
              {
                title: "Vaccinations",
                desc: "Keep your vaccinations updated to protect against seasonal and viral infections.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-pink-600">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🌦️ Seasonal Awareness */}
        <section className="py-12 px-6 md:px-16 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Seasonal Awareness Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-yellow-100 rounded-2xl shadow-md">
              <h3 className="text-lg font-bold text-yellow-700 mb-2">Summer</h3>
              <p className="text-sm text-gray-700">
                Stay hydrated, avoid prolonged sun exposure, and eat light meals to prevent heat-related illnesses.
              </p>
            </div>
            <div className="p-6 bg-blue-100 rounded-2xl shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Monsoon</h3>
              <p className="text-sm text-gray-700">
                Avoid stagnant water, use mosquito repellents, and consume boiled water to stay safe from infections.
              </p>
            </div>
            <div className="p-6 bg-gray-200 rounded-2xl shadow-md">
              <h3 className="text-lg font-bold text-gray-700 mb-2">Winter</h3>
              <p className="text-sm text-gray-700">
                Wear warm clothes, eat nutritious foods, and maintain good ventilation to prevent respiratory diseases.
              </p>
            </div>
          </div>
        </section>

        {/* 🌐 Useful Resources */}
        <section className="py-12 px-6 md:px-16 bg-gray-100 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Useful Health Resources
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.who.int/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-xl px-6 py-4 hover:shadow-lg transition text-blue-700 font-semibold"
            >
              WHO Official Website
            </a>
            <a
              href="https://www.mohfw.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-xl px-6 py-4 hover:shadow-lg transition text-green-700 font-semibold"
            >
              Ministry of Health (India)
            </a>
            <a
              href="https://www.cdc.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-xl px-6 py-4 hover:shadow-lg transition text-red-700 font-semibold"
            >
              CDC Health Resources
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default General_Awarness;
