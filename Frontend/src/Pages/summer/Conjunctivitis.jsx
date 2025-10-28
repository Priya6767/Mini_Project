import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ConjunctivitisInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          Conjunctivitis (Eye Flu)
        </h1>

        {/* What is Conjunctivitis */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">What is Conjunctivitis?</h2>
          <p>
            Conjunctivitis, commonly known as "eye flu," is an inflammation or infection of the conjunctiva, the thin clear tissue covering the white part of the eye and inner eyelids. 
            It can cause redness, irritation, and discharge, and is usually contagious.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Viral infections, such as adenovirus (most common)</li>
            <li>Bacterial infections, including Staphylococcus and Streptococcus</li>
            <li>Allergic reactions to pollen, dust, or animal dander</li>
            <li>Irritation from chemicals, smoke, or contact lenses</li>
            <li>Exposure to contaminated water or poor hygiene</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Redness in one or both eyes</li>
            <li>Itching, burning, or a gritty feeling</li>
            <li>Watery or thick yellow/green discharge</li>
            <li>Swelling of eyelids</li>
            <li>Increased tearing and sensitivity to light</li>
            <li>Blurred vision in some cases</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Viral conjunctivitis usually resolves on its own within 1–2 weeks; supportive care is recommended.</li>
            <li>Bacterial conjunctivitis may require prescribed antibiotic eye drops or ointments.</li>
            <li>Allergic conjunctivitis can be managed with antihistamine or anti-inflammatory eye drops.</li>
            <li>Maintain good hygiene: wash hands frequently and avoid touching the eyes.</li>
            <li>Avoid sharing towels, pillows, or makeup to prevent spreading the infection.</li>
            <li>Use clean, cool compresses to relieve discomfort.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Wash hands frequently and avoid touching your eyes.</li>
            <li>Do not share personal items like towels, pillowcases, or eye makeup.</li>
            <li>Disinfect surfaces and objects that are frequently touched.</li>
            <li>Replace or clean contact lenses as recommended by an eye care professional.</li>
            <li>Seek prompt treatment if symptoms appear to prevent spreading.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ConjunctivitisInfo;
