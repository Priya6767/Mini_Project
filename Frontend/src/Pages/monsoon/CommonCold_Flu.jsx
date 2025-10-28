import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CommonColdFluInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 space-y-10 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600 text-center">
          Common Cold & Flu (Influenza)
        </h1>

        {/* 🌬️ Common Cold Section */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">
            Common Cold & Flu
          </h2>
          <p className="mb-4">
            The <strong>Common Cold</strong> is a mild viral infection of the
            upper respiratory tract — primarily affecting the nose and throat.
            It’s the most common infectious illness among humans, especially in
            the <strong>winter months</strong>. Although usually harmless, it
            causes discomfort and spreads easily through droplets or contact
            with contaminated surfaces.
          </p>

          <h3 className="text-xl font-semibold mt-4 text-blue-400">
            Causes
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Caused by several viruses, mainly rhinoviruses and coronaviruses.</li>
            <li>Spread via droplets from coughs, sneezes, or contaminated hands.</li>
            <li>Triggered by cold, dry air and low immunity during winter.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 text-blue-400">
            Symptoms
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Runny or stuffy nose</li>
            <li>Sore throat</li>
            <li>Mild cough and sneezing</li>
            <li>Headache or slight fever</li>
            <li>Body ache and fatigue</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 text-blue-400">
            Treatment
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>There is <strong>no cure</strong> — symptoms usually clear within a week.</li>
            <li>Rest well and drink warm fluids.</li>
            <li>Use steam inhalation and saline gargles for congestion and sore throat.</li>
            <li>Take over-the-counter medicines for fever or headache (with medical advice).</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 text-blue-400">
            Prevention
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Wash hands frequently and maintain hygiene.</li>
            <li>Avoid close contact with infected individuals.</li>
            <li>Keep warm during cold weather and eat nutritious foods.</li>
            <li>Disinfect frequently touched surfaces.</li>
          </ul>
        </section>

        {/* 🩵 Divider */}
        <div className="border-t-4 border-blue-300 w-1/3 mx-auto my-8" />

        {/* 🌡️ Flu Section */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">
            Flu (Influenza)
          </h2>
          <p className="mb-4">
            The <strong>Flu (Influenza)</strong> is a contagious respiratory
            infection caused by influenza viruses that attack the nose, throat,
            and lungs. It spreads rapidly in the community and can cause
            moderate to severe illness, especially in <strong>children, the
            elderly, and people with chronic diseases</strong>.
          </p>

          <h3 className="text-xl font-semibold mt-4 text-blue-400">
            Causes
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Caused by Influenza viruses — Types A, B, and C.</li>
            <li>Spread through droplets when an infected person coughs or sneezes.</li>
            <li>Can spread through contaminated hands or surfaces.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 text-blue-400">
            Symptoms
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>High fever and chills</li>
            <li>Headache and muscle aches</li>
            <li>Dry cough and sore throat</li>
            <li>Severe fatigue and weakness</li>
            <li>Runny or stuffy nose</li>
            <li>Loss of appetite</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 text-blue-400">
            Treatment
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Rest and plenty of fluids to prevent dehydration.</li>
            <li>Antiviral drugs (like oseltamivir) may be prescribed in severe cases.</li>
            <li>Avoid antibiotics — they are ineffective against viral infections.</li>
            <li>Steam inhalation, warm liquids, and saline gargles can relieve symptoms.</li>
            <li>Seek medical help if symptoms persist or worsen.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 text-blue-400">
            Prevention
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Get the <strong>annual flu vaccine</strong>.</li>
            <li>Wash hands frequently and cover nose and mouth when coughing or sneezing.</li>
            <li>Avoid crowded areas during outbreaks.</li>
            <li>Eat immune-boosting foods rich in vitamins C and D.</li>
            <li>Isolate if infected to prevent spreading to others.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CommonColdFluInfo;
