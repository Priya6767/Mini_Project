import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RegularExercise = () => {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-16 text-center shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Regular Exercise</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Staying active daily improves your heart, immunity, and overall health. Learn simple ways to incorporate exercise into your routine.
          </p>
        </section>

        {/* Exercise Card */}
        <section className="py-12 px-6 md:px-20 flex justify-center">
          <div className="bg-teal-50 p-6 rounded-xl shadow-md hover:shadow-lg transition max-w-xl w-full">
            <h3 className="text-lg font-bold text-teal-600 mb-4">🏃‍♂️ Regular Exercise</h3>
            <p className="text-sm text-gray-700 mb-4">
              Stay active for at least 30 minutes daily to improve heart health, strengthen muscles, boost immunity, and enhance overall well-being.
            </p>
            <h4 className="text-md font-semibold text-gray-800 mb-2">Tips for Effective Exercise:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Include a mix of cardio, strength, and flexibility exercises.</li>
              <li>Warm up before and cool down after workouts.</li>
              <li>Stay hydrated and wear comfortable clothing.</li>
              <li>Choose activities you enjoy to stay consistent.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RegularExercise;
