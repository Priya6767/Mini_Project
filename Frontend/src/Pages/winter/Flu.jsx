import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FluInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600 text-center">
          Flu (Influenza)
        </h1>

        {/* What is Flu */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">What is Flu?</h2>
          <p>
            The flu, or influenza, is a contagious respiratory illness caused by influenza viruses. 
            It affects the nose, throat, and sometimes the lungs, and can range from mild to severe illness.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Influenza virus infection (types A, B, or C)</li>
            <li>Spreads through droplets when an infected person coughs, sneezes, or talks</li>
            <li>Touching contaminated surfaces and then touching the nose, mouth, or eyes</li>
            <li>Close contact with infected individuals</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Fever or feeling feverish/chills</li>
            <li>Cough</li>
            <li>Sore throat</li>
            <li>Runny or stuffy nose</li>
            <li>Muscle or body aches</li>
            <li>Headaches</li>
            <li>Fatigue (tiredness)</li>
            <li>Sometimes vomiting and diarrhea, more common in children</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Most people recover at home with rest and fluids.</li>
            <li>Over-the-counter medications for fever, pain, or congestion may help.</li>
            <li>Antiviral medications may be prescribed by a doctor, especially for high-risk patients.</li>
            <li>Avoid close contact with others to prevent spreading the virus.</li>
            <li>Seek medical attention if symptoms worsen or in high-risk groups (elderly, young children, pregnant women, or people with chronic conditions).</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Annual flu vaccination.</li>
            <li>Wash hands frequently with soap and water.</li>
            <li>Cover mouth and nose when coughing or sneezing.</li>
            <li>Avoid close contact with sick individuals.</li>
            <li>Maintain a healthy lifestyle to strengthen immunity.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FluInfo;
