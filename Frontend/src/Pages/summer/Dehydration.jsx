import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DehydrationInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          Dehydration
        </h1>

        {/* What is Dehydration */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">What is Dehydration?</h2>
          <p>
            Dehydration occurs when your body loses more fluids than it takes in, leading to insufficient water for normal bodily functions. 
            It is a common condition in hot weather, during strenuous exercise, or due to illnesses causing vomiting or diarrhea.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Excessive sweating from heat exposure or physical activity</li>
            <li>Inadequate water intake</li>
            <li>Vomiting or diarrhea leading to fluid loss</li>
            <li>Fever or infections</li>
            <li>Diuretic medications or certain medical conditions</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Thirst and dry mouth</li>
            <li>Dark yellow urine or reduced urination</li>
            <li>Fatigue, dizziness, or lightheadedness</li>
            <li>Dry skin and lips</li>
            <li>Rapid heartbeat or breathing</li>
            <li>Confusion or irritability in severe cases</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Rehydration by drinking water or oral rehydration solutions (ORS).</li>
            <li>Consume fluids with electrolytes for moderate to severe dehydration.</li>
            <li>Rest in a cool, shaded, or air-conditioned environment.</li>
            <li>Avoid alcohol, caffeinated, or sugary drinks as they can worsen dehydration.</li>
            <li>Seek medical attention if dehydration is severe or persistent.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Drink plenty of water, especially in hot weather or during exercise.</li>
            <li>Eat water-rich fruits and vegetables.</li>
            <li>Avoid excessive alcohol and caffeine intake.</li>
            <li>Take breaks in shade or air-conditioned areas when outdoors.</li>
            <li>Monitor urine color as a simple way to check hydration status.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DehydrationInfo;
