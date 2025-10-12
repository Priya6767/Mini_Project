import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CholeraInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-green-600 text-center">
          Cholera
        </h1>

        {/* What is Cholera */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">
            What is Cholera?
          </h2>
          <p>
            Cholera is an acute diarrheal disease caused by infection with the
            bacterium <strong>Vibrio cholerae</strong>. It spreads through
            contaminated water and food, leading to severe dehydration and
            potentially death if untreated. Cholera outbreaks often occur during
            the monsoon season when sanitation conditions worsen.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Drinking water contaminated with <strong>Vibrio cholerae</strong>.</li>
            <li>Eating food washed or cooked with contaminated water.</li>
            <li>Poor sanitation and improper sewage disposal.</li>
            <li>Unhygienic food handling practices.</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">
            Signs and Symptoms
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Sudden onset of watery diarrhea (“rice-water stools”)</li>
            <li>Severe dehydration and thirst</li>
            <li>Muscle cramps</li>
            <li>Rapid heartbeat and low blood pressure</li>
            <li>Weakness and fatigue</li>
            <li>Sunken eyes, dry mouth, and decreased urination</li>
            <li>In severe cases: shock or unconsciousness due to fluid loss</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">
            Treatment
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Rehydration:</strong> Immediate replacement of lost fluids
              with Oral Rehydration Solution (ORS) is essential.
            </li>
            <li>
              <strong>IV fluids:</strong> For severe dehydration cases when oral
              rehydration isn’t sufficient.
            </li>
            <li>
              <strong>Antibiotics:</strong> May be prescribed by a doctor to
              shorten the duration of diarrhea and reduce bacterial shedding.
            </li>
            <li>
              <strong>Zinc supplements:</strong> Help improve recovery and reduce
              fluid loss.
            </li>
            <li>
              Maintain adequate nutrition and hydration even after symptoms
              improve.
            </li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-2">
            Prevention
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Drink only boiled, filtered, or bottled water.</li>
            <li>
              Wash hands with soap and clean water before eating or preparing
              food.
            </li>
            <li>
              Avoid raw foods, street food, and unpasteurized milk during
              monsoon season.
            </li>
            <li>
              Maintain clean sanitation practices and dispose of waste properly.
            </li>
            <li>
              Vaccination is available in some regions and can provide partial
              protection.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CholeraInfo;
