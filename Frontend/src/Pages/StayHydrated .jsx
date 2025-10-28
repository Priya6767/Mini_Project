import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StayHydrated = () => {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-400 to-teal-400 text-white py-16 text-center shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Stay Hydrated</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Drinking enough water daily is essential for your metabolism, energy, and overall health. Learn tips to stay properly hydrated.
          </p>
        </section>

        {/* Hydration Content */}
        <section className="py-12 px-6 md:px-20 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-blue-600 mb-4">💧 Stay Hydrated</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Drinking enough water daily is vital to maintain metabolism, prevent dehydration, support digestion, and keep your skin healthy. Most adults should aim for 8–10 glasses of water per day, but individual needs may vary depending on activity level and climate.
          </p>

          <h4 className="text-md font-semibold text-gray-800 mb-2">Tips to Stay Hydrated:</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Carry a reusable water bottle wherever you go.</li>
            <li>Drink a glass of water before meals.</li>
            <li>Eat water-rich fruits and vegetables like watermelon and cucumber.</li>
            <li>Monitor urine color; pale yellow indicates proper hydration.</li>
            <li>Avoid excessive sugary drinks.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default StayHydrated;
