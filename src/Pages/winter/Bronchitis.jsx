import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BronchitisInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600 text-center">
          Bronchitis
        </h1>

        {/* What is Bronchitis */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">What is Bronchitis?</h2>
          <p>
            Bronchitis is an inflammation of the lining of the bronchial tubes, which carry air to and from the lungs. 
            It causes coughing and mucus production, and can be acute (short-term) or chronic (long-term).
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Viral infections, often following a cold or flu (most common for acute bronchitis)</li>
            <li>Bacterial infections (less common)</li>
            <li>Exposure to irritants such as smoke, dust, fumes, or air pollution</li>
            <li>Chronic bronchitis is usually caused by prolonged exposure to irritants, especially tobacco smoke</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Cough, which may produce mucus (sputum)</li>
            <li>Fatigue or feeling tired</li>
            <li>Shortness of breath or wheezing</li>
            <li>Chest discomfort or tightness</li>
            <li>Low-grade fever and chills (sometimes)</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Rest and stay hydrated.</li>
            <li>Use over-the-counter medications to relieve cough and discomfort.</li>
            <li>Humidifiers or steam inhalation can help ease breathing.</li>
            <li>For bacterial infections, a doctor may prescribe antibiotics.</li>
            <li>Avoid smoking and exposure to lung irritants.</li>
            <li>Chronic bronchitis may require long-term management with inhalers or medications as prescribed by a doctor.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Avoid smoking and exposure to secondhand smoke.</li>
            <li>Minimize contact with respiratory irritants and pollutants.</li>
            <li>Wash hands regularly to prevent viral infections.</li>
            <li>Get vaccinated for influenza and pneumonia to reduce risk of infection.</li>
            <li>Maintain a healthy lifestyle and strengthen immunity.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BronchitisInfo;
