import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MalariaInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-green-600 text-center">
          Malaria
        </h1>

        {/* What is Malaria */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">What is Malaria?</h2>
          <p>
            Malaria is a life-threatening disease caused by Plasmodium parasites, transmitted through the bites of infected female Anopheles mosquitoes. 
            It is prevalent in tropical and subtropical regions, especially during the monsoon season when mosquito breeding increases.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Bites from infected female Anopheles mosquitoes</li>
            <li>Transmission through blood transfusion (rare)</li>
            <li>From mother to child during pregnancy (congenital malaria)</li>
            <li>Sharing of contaminated needles (rare)</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Fever and chills</li>
            <li>Headache and muscle aches</li>
            <li>Nausea and vomiting</li>
            <li>Fatigue and weakness</li>
            <li>Sweating and rapid heart rate</li>
            <li>In severe cases: anemia, jaundice, or organ failure</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Prescription antimalarial medications, such as chloroquine, artemisinin-based combination therapy (ACT), or others depending on the region and resistance.</li>
            <li>Hospitalization in severe cases to manage complications.</li>
            <li>Supportive care: fluids, pain relievers, and fever control.</li>
            <li>Prompt treatment is critical to prevent severe illness or death.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use mosquito nets, especially while sleeping.</li>
            <li>Apply mosquito repellents on exposed skin.</li>
            <li>Wear long-sleeved clothing and full-length pants in mosquito-prone areas.</li>
            <li>Remove standing water around homes to prevent mosquito breeding.</li>
            <li>Take prophylactic antimalarial medications when traveling to high-risk areas.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MalariaInfo;
