import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DengueInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          Dengue
        </h1>

        {/* What is Dengue */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">What is Dengue?</h2>
          <p>
            Dengue is a viral infection transmitted by mosquitoes, primarily the Aedes aegypti mosquito. 
            It causes flu-like symptoms and can develop into severe dengue, which can be life-threatening.
          </p>
        </section>

        {/* How It Spreads */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">How It Spreads</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Transmitted through the bite of an infected Aedes mosquito.</li>
            <li>Common in tropical and subtropical regions.</li>
            <li>Outbreaks often occur during the rainy season due to stagnant water.</li>
          </ul>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>The dengue virus is carried by mosquitoes.</li>
            <li>Breeding of mosquitoes in stagnant water near homes, ponds, and water containers.</li>
            <li>Poor sanitation and lack of mosquito control.</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Signs and Symptoms</h2>
          <p className="text-red-600 font-semibold mb-2">Look out for:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>High fever (104°F / 40°C)</li>
            <li>Severe headache</li>
            <li>Pain behind the eyes</li>
            <li>Joint and muscle pain</li>
            <li>Nausea and vomiting</li>
            <li>Rash over the body</li>
            <li>Fatigue and weakness</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>There is no specific antiviral treatment for dengue.</li>
            <li>Rest and stay hydrated with water, oral rehydration solutions, or juices.</li>
            <li>Paracetamol can be used to reduce fever and pain (avoid NSAIDs like ibuprofen).</li>
            <li>Seek immediate medical attention if symptoms worsen or if severe dengue develops.</li>
            <li>Severe dengue may require hospitalization, IV fluids, and monitoring of vital signs.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Eliminate stagnant water around homes to prevent mosquito breeding.</li>
            <li>Use mosquito repellents, nets, and protective clothing.</li>
            <li>Keep doors and windows closed or screened.</li>
            <li>Community awareness and mosquito control programs.</li>
            <li>Be extra cautious during the rainy season in endemic areas.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DengueInfo;
