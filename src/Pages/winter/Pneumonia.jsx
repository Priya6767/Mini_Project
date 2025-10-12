import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const PneumoniaInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600 text-center">
          Pneumonia
        </h1>

        {/* What is Pneumonia */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">What is Pneumonia?</h2>
          <p>
            Pneumonia is an infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus. 
            It can be caused by bacteria, viruses, or fungi and ranges from mild to severe illness.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Bacterial infections, most commonly Streptococcus pneumoniae</li>
            <li>Viral infections, such as influenza or respiratory syncytial virus (RSV)</li>
            <li>Fungal infections, especially in people with weakened immune systems</li>
            <li>Aspiration of food, drink, or vomit into the lungs</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Cough, which may produce green, yellow, or bloody mucus</li>
            <li>Fever, chills, and sweating</li>
            <li>Shortness of breath or rapid breathing</li>
            <li>Chest pain when breathing or coughing</li>
            <li>Fatigue and muscle aches</li>
            <li>Nausea, vomiting, or diarrhea (sometimes)</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Bacterial pneumonia is treated with prescribed antibiotics.</li>
            <li>Viral pneumonia may require rest, fluids, and antiviral medications in severe cases.</li>
            <li>Hospitalization may be required for severe pneumonia, especially in elderly or immunocompromised patients.</li>
            <li>Oxygen therapy may be needed if breathing is difficult.</li>
            <li>Over-the-counter medications can help relieve fever, cough, and discomfort.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Get vaccinated for pneumonia and influenza.</li>
            <li>Practice good hygiene: wash hands frequently.</li>
            <li>Avoid smoking and secondhand smoke exposure.</li>
            <li>Maintain a healthy immune system through diet, sleep, and exercise.</li>
            <li>Seek prompt treatment for respiratory infections to prevent complications.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PneumoniaInfo;
