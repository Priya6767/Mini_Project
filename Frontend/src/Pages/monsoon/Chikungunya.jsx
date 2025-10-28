import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ChikungunyaInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-green-600 text-center">
          Chikungunya
        </h1>

        {/* What is Chikungunya */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">What is Chikungunya?</h2>
          <p>
            Chikungunya is a viral disease transmitted to humans through the bites of infected
            <strong> Aedes mosquitoes</strong> — primarily <em>Aedes aegypti</em> and <em>Aedes albopictus</em>. 
            It causes sudden fever and severe joint pain, often making it difficult to move or walk. 
            The disease is common during the monsoon season when mosquito breeding increases.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Caused by the Chikungunya virus (CHIKV), transmitted through mosquito bites.</li>
            <li>Spread mainly by <strong>Aedes aegypti</strong> and <strong>Aedes albopictus</strong> mosquitoes.</li>
            <li>These mosquitoes bite during the day and breed in stagnant water containers.</li>
            <li>Not directly contagious from person to person.</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Sudden high fever (often above 102°F or 39°C)</li>
            <li>Severe joint pain (especially in wrists, ankles, and knees)</li>
            <li>Headache and muscle pain</li>
            <li>Skin rash</li>
            <li>Nausea, fatigue, and swelling of joints</li>
            <li>In rare cases, prolonged joint pain lasting weeks to months</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>There is <strong>no specific antiviral treatment</strong> for Chikungunya.</li>
            <li>Symptoms are managed with supportive care and rest.</li>
            <li>Drink plenty of fluids to prevent dehydration.</li>
            <li>Take pain relievers and fever reducers like paracetamol (avoid aspirin or NSAIDs unless prescribed).</li>
            <li>Consult a doctor if joint pain persists or worsens.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Eliminate mosquito breeding sites — empty water containers, flower pots, and buckets regularly.</li>
            <li>Use mosquito repellents, especially during the day.</li>
            <li>Wear long-sleeved clothing and cover exposed skin.</li>
            <li>Install screens on windows and doors to keep mosquitoes out.</li>
            <li>Use mosquito nets while resting or sleeping.</li>
            <li>Community awareness and sanitation help reduce mosquito populations.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ChikungunyaInfo;
