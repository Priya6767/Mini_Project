import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AsthmaInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600 text-center">
          Asthma
        </h1>

        {/* What is Asthma */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">What is Asthma?</h2>
          <p>
            Asthma is a chronic respiratory condition that causes inflammation and narrowing of the airways, leading to difficulty breathing. 
            Symptoms can range from mild to severe and may be triggered by allergens, cold air, or exercise.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Genetic predisposition (family history of asthma or allergies)</li>
            <li>Allergens such as pollen, dust mites, mold, or pet dander</li>
            <li>Respiratory infections</li>
            <li>Exposure to tobacco smoke or air pollution</li>
            <li>Cold air or exercise in some individuals</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Shortness of breath</li>
            <li>Wheezing (a whistling sound while breathing)</li>
            <li>Coughing, especially at night or early morning</li>
            <li>Chest tightness</li>
            <li>Difficulty sleeping due to breathing problems</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Asthma cannot be cured but can be managed effectively.</li>
            <li>Use prescribed inhalers (rescue and maintenance) as directed by a doctor.</li>
            <li>Avoid triggers such as allergens, smoke, and pollutants.</li>
            <li>Maintain a healthy lifestyle and monitor symptoms regularly.</li>
            <li>Severe attacks may require emergency medical attention.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Prevention & Management</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Identify and avoid asthma triggers.</li>
            <li>Follow your asthma action plan prescribed by your doctor.</li>
            <li>Take medications regularly as prescribed.</li>
            <li>Get regular check-ups and monitor lung function.</li>
            <li>Maintain clean indoor air and reduce exposure to dust and smoke.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AsthmaInfo;
