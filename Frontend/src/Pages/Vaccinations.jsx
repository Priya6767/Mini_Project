import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Vaccinations = () => {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16 text-center shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Vaccinations</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Keeping your vaccinations up-to-date is essential to protect yourself and others from seasonal and viral infections.
          </p>
        </section>

        {/* Vaccination Content */}
        <section className="py-12 px-6 md:px-20 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-purple-600 mb-4">💉 Keep Your Vaccinations Updated</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Vaccinations help prevent serious diseases and protect your immune system. Staying current with recommended vaccines reduces the risk of seasonal infections such as influenza, as well as viral diseases like measles, hepatitis, and COVID-19.
          </p>

          <h4 className="text-md font-semibold text-gray-800 mb-2">Tips for Staying Vaccinated:</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Follow the vaccination schedule recommended by your healthcare provider.</li>
            <li>Keep a record of all vaccines you have received.</li>
            <li>Get booster doses on time as advised.</li>
            <li>Consult your doctor before traveling abroad for required vaccines.</li>
            <li>Encourage family members to stay vaccinated too.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Vaccinations;
