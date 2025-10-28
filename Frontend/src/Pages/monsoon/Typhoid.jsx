import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const TyphoidInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-green-600 text-center">
          Typhoid
        </h1>

        {/* What is Typhoid */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">What is Typhoid?</h2>
          <p>
            Typhoid fever is a serious bacterial infection caused by{" "}
            <strong>Salmonella typhi</strong>. It spreads through contaminated
            food and water or close contact with an infected person. It’s more
            common during the monsoon season due to poor sanitation and
            contaminated water supplies.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Consumption of water or food contaminated with <strong>Salmonella typhi</strong>.</li>
            <li>Eating street food prepared in unhygienic conditions.</li>
            <li>Poor sanitation and improper waste disposal.</li>
            <li>Direct contact with an infected person or carrier of the bacteria.</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Prolonged high fever (up to 104°F / 40°C)</li>
            <li>Headache and weakness</li>
            <li>Abdominal pain and loss of appetite</li>
            <li>Constipation or diarrhea</li>
            <li>Rash of small pink spots (rose spots) on the body</li>
            <li>Body aches and fatigue</li>
            <li>In severe cases: intestinal bleeding or perforation</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Antibiotic therapy as prescribed by a doctor (e.g., azithromycin, ciprofloxacin, or ceftriaxone).</li>
            <li>Drink plenty of fluids to prevent dehydration.</li>
            <li>Maintain a soft, bland diet to ease digestion.</li>
            <li>Get adequate rest during recovery.</li>
            <li>Severe cases may require hospitalization for IV fluids and antibiotics.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Drink clean, boiled, or filtered water only.</li>
            <li>Avoid raw or uncooked foods, especially street food.</li>
            <li>Wash hands thoroughly before eating or handling food.</li>
            <li>Get vaccinated against typhoid (recommended for high-risk areas).</li>
            <li>Maintain good sanitation and hygiene practices.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TyphoidInfo;
