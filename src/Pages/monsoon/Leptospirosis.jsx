import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const LeptospirosisInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-green-600 text-center">
          Leptospirosis
        </h1>

        {/* What is Leptospirosis */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">
            What is Leptospirosis?
          </h2>
          <p>
            Leptospirosis is a bacterial infection caused by{" "}
            <strong>Leptospira</strong> species, transmitted from animals to
            humans. It often spreads through water or soil contaminated with
            urine from infected animals, especially rodents. The infection is
            more common during the monsoon season due to increased waterlogging
            and exposure to contaminated floodwater.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Contact with water, mud, or soil contaminated with urine of
              infected animals (rats, dogs, cattle, etc.).
            </li>
            <li>
              Exposure through cuts or abrasions on the skin, eyes, or mucous
              membranes.
            </li>
            <li>
              Wading in floodwaters, farming, or cleaning after rains without
              protective gear.
            </li>
            <li>Drinking or using contaminated water.</li>
          </ul>
        </section>

        {/* Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">
            Signs and Symptoms
          </h2>
          <p className="mb-2">
            Symptoms of leptospirosis usually appear 5–14 days after exposure
            and may range from mild flu-like illness to severe complications.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>High fever and chills</li>
            <li>Severe headache and muscle pain (especially in calves and back)</li>
            <li>Red eyes and sensitivity to light</li>
            <li>Nausea, vomiting, or diarrhea</li>
            <li>Abdominal pain and jaundice (yellowing of skin and eyes)</li>
            <li>Rashes or conjunctival suffusion (red eyes without discharge)</li>
            <li>
              In severe cases (Weil’s disease): kidney failure, liver damage, or
              meningitis
            </li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">
            Treatment
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Early diagnosis and antibiotic treatment</strong> (such as
              doxycycline or penicillin) are crucial for recovery.
            </li>
            <li>
              <strong>Hydration:</strong> Maintain adequate fluid intake to
              prevent dehydration.
            </li>
            <li>
              <strong>Hospitalization:</strong> May be required in severe cases
              with organ involvement.
            </li>
            <li>
              <strong>Supportive care:</strong> Includes monitoring kidney and
              liver function, oxygen therapy if needed, and electrolyte balance.
            </li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">
            Prevention
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Avoid wading in floodwaters or muddy areas without protective
              footwear.
            </li>
            <li>
              Cover cuts and wounds properly to prevent infection from
              contaminated water.
            </li>
            <li>
              Use gloves and boots while cleaning drains or working in flooded
              areas.
            </li>
            <li>
              Boil or disinfect drinking water, especially after floods.
            </li>
            <li>
              Control rodents in and around homes and workplaces.
            </li>
            <li>
              Health workers or farmers in high-risk areas can take
              <strong> prophylactic antibiotics (under medical advice)</strong>.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LeptospirosisInfo;
