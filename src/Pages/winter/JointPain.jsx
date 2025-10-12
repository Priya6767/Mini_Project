import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const JointPainArthritisInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600 text-center">
          Joint Pain & Arthritis
        </h1>

        {/* What is Joint Pain & Arthritis */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">What is Joint Pain & Arthritis?</h2>
          <p>
            Joint pain is discomfort, soreness, or inflammation in any of the body's joints. Arthritis is a condition that causes inflammation in the joints, 
            leading to pain, stiffness, swelling, and reduced mobility. Common types include osteoarthritis and rheumatoid arthritis.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Osteoarthritis: wear and tear of joint cartilage with age.</li>
            <li>Rheumatoid arthritis: autoimmune disorder causing joint inflammation.</li>
            <li>Injuries or trauma to joints.</li>
            <li>Obesity, which puts extra stress on joints.</li>
            <li>Genetic predisposition to arthritis or joint problems.</li>
            <li>Infections in joints (rare, but possible).</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Joint pain or tenderness</li>
            <li>Swelling or inflammation of the joints</li>
            <li>Stiffness, especially in the morning or after inactivity</li>
            <li>Reduced range of motion or difficulty moving the joint</li>
            <li>Warmth and redness around affected joints</li>
            <li>Fatigue and general malaise (more common in rheumatoid arthritis)</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Medications: pain relievers (acetaminophen), NSAIDs, or disease-modifying drugs for rheumatoid arthritis.</li>
            <li>Physical therapy and regular exercises to maintain joint flexibility and strength.</li>
            <li>Weight management to reduce stress on joints.</li>
            <li>Hot or cold therapy to relieve pain and swelling.</li>
            <li>Surgery may be needed in severe cases (e.g., joint replacement).</li>
          </ul>
        </section>

        {/* Prevention & Management */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500 mb-2">Prevention & Management</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Maintain a healthy weight to reduce joint stress.</li>
            <li>Exercise regularly to strengthen muscles around joints.</li>
            <li>Avoid repetitive joint strain or overuse.</li>
            <li>Eat a balanced diet rich in calcium and vitamin D for bone health.</li>
            <li>Manage underlying conditions like autoimmune diseases promptly.</li>
            <li>Consult a doctor for early diagnosis and management of arthritis.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default JointPainArthritisInfo;
