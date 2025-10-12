import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MeaslesMumpsChickenpoxInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          Measles, Mumps & Chickenpox
        </h1>

        {/* What are Measles, Mumps & Chickenpox */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">What are Measles, Mumps & Chickenpox?</h2>
          <p>
            These are common viral infections, especially in children, caused by different viruses: 
            <strong>Measles</strong> causes a red rash and fever, <strong>Mumps</strong> leads to swelling of salivary glands, and 
            <strong>Chickenpox</strong> causes an itchy rash with red spots or blisters. All are contagious and preventable through vaccination.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Measles: Measles virus spread through respiratory droplets from coughs or sneezes.</li>
            <li>Mumps: Mumps virus spread via saliva, sneezing, or coughing.</li>
            <li>Chickenpox: Varicella-zoster virus spread through direct contact or respiratory droplets.</li>
            <li>Close contact with infected individuals increases the risk of infection.</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Measles: High fever, cough, runny nose, red eyes, and a red rash spreading from face to body.</li>
            <li>Mumps: Swollen and tender salivary glands, fever, headache, muscle aches, fatigue.</li>
            <li>Chickenpox: Itchy red rash with small fluid-filled blisters, fever, fatigue, loss of appetite.</li>
            <li>All three infections are more severe in adults than in children.</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>There is no specific antiviral treatment for most cases; management is supportive.</li>
            <li>Rest, hydration, and good nutrition.</li>
            <li>Over-the-counter medications to reduce fever or relieve itching.</li>
            <li>Isolate from others to prevent spreading the infection.</li>
            <li>Seek medical care if complications arise, such as pneumonia, encephalitis, or severe dehydration.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Vaccination: MMR vaccine protects against Measles, Mumps, and Rubella; Varicella vaccine protects against Chickenpox.</li>
            <li>Practice good hygiene: wash hands frequently and avoid sharing utensils or personal items.</li>
            <li>Avoid close contact with infected individuals.</li>
            <li>Keep children up to date with routine immunizations.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MeaslesMumpsChickenpoxInfo;
