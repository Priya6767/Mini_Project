import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FoodPoisoningInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          Food Poisoning
        </h1>

        {/* What is Food Poisoning */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">What is Food Poisoning?</h2>
          <p>
            Food poisoning occurs when you consume contaminated food or drinks containing harmful bacteria, viruses, or parasites. 
            It can cause nausea, vomiting, diarrhea, and abdominal cramps. Symptoms usually appear within hours to days after ingestion.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Bacteria such as Salmonella, E. coli, or Listeria</li>
            <li>Viruses such as Norovirus</li>
            <li>Parasites such as Giardia</li>
            <li>Improper food handling, storage, or cooking</li>
            <li>Contaminated water or raw foods</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Nausea and vomiting</li>
            <li>Diarrhea, sometimes bloody</li>
            <li>Abdominal cramps and pain</li>
            <li>Fever</li>
            <li>Weakness or fatigue</li>
            <li>Dehydration in severe cases</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Stay hydrated by drinking water, oral rehydration solutions (ORS), or clear fluids.</li>
            <li>Rest and avoid strenuous activities.</li>
            <li>Avoid solid food for a few hours, then gradually reintroduce bland foods.</li>
            <li>Over-the-counter medications may help with nausea, vomiting, or diarrhea (consult a doctor first).</li>
            <li>Seek medical attention if symptoms are severe, persistent, or include high fever or blood in stool.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Wash hands thoroughly before handling food.</li>
            <li>Cook food to safe temperatures and store properly.</li>
            <li>Avoid consuming raw or undercooked meat, eggs, or seafood.</li>
            <li>Drink clean, safe water and avoid contaminated sources.</li>
            <li>Keep kitchen surfaces and utensils clean to prevent cross-contamination.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FoodPoisoningInfo;
