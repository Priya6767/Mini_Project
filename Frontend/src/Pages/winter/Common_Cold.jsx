import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CommonColdInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600 text-center">
          Common Cold
        </h1>

        {/* What is Common Cold */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">What is Common Cold?</h2>
          <p>
            The common cold is a viral infection of your upper respiratory tract, primarily caused by rhinoviruses. 
            It leads to sneezing, runny nose, congestion, and mild fatigue. It is usually mild but highly contagious.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Viral infection (mostly rhinoviruses)</li>
            <li>Close contact with infected individuals</li>
            <li>Touching contaminated surfaces and then touching the nose or eyes</li>
            <li>Cold or dry weather may increase susceptibility</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Runny or stuffy nose</li>
            <li>Sneezing and sore throat</li>
            <li>Coughing</li>
            <li>Mild fatigue or body aches</li>
            <li>Low-grade fever (occasionally)</li>
            <li>Watery eyes</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>There is no specific cure; treatment is symptomatic.</li>
            <li>Rest and stay hydrated with water, soups, or warm fluids.</li>
            <li>Over-the-counter medications for fever, congestion, or sore throat can help.</li>
            <li>Use saline nasal sprays or steam inhalation to relieve congestion.</li>
            <li>Avoid antibiotics unless bacterial infection is confirmed.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Wash hands frequently with soap and water.</li>
            <li>Avoid close contact with people who are sick.</li>
            <li>Cover mouth and nose when coughing or sneezing.</li>
            <li>Maintain a healthy lifestyle to strengthen immunity.</li>
            <li>Disinfect frequently touched surfaces regularly.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CommonColdInfo;
