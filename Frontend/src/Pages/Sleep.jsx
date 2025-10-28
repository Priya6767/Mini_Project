import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AdequateSleep = () => {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-16 text-center shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Adequate Sleep</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Sleep is vital for your body and mind. Learn how to get quality rest every night.
          </p>
        </section>

        {/* Adequate Sleep Card */}
        <section className="py-12 px-6 md:px-20 flex justify-center">
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition max-w-xl w-full">
            <h3 className="text-lg font-bold text-indigo-600 mb-4">🛌 Adequate Sleep</h3>
            <p className="text-sm text-gray-700 mb-4">
              Get 7-9 hours of quality sleep each night. Proper sleep helps your body recover, strengthens immunity, improves mental health, and keeps you alert and productive during the day.
            </p>
            <h4 className="text-md font-semibold text-gray-800 mb-2">Tips for Better Sleep:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Maintain a consistent sleep schedule.</li>
              <li>Keep your bedroom dark, quiet, and cool.</li>
              <li>Avoid screens at least 1 hour before bedtime.</li>
              <li>Limit caffeine and heavy meals in the evening.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AdequateSleep;
