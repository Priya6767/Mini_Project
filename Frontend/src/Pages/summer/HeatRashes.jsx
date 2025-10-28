import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const HeatRashesInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          Heat Rashes
        </h1>

        {/* What are Heat Rashes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">What are Heat Rashes?</h2>
          <p>
            Heat rashes, also known as prickly heat or miliaria, occur when sweat ducts become blocked and sweat gets trapped under the skin. 
            This causes red bumps or small blisters, often accompanied by itching or a prickly sensation.
          </p>
        </section>

        {/* Causes */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Causes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Excessive sweating due to hot, humid weather</li>
            <li>Wearing tight or non-breathable clothing</li>
            <li>Prolonged physical activity in heat</li>
            <li>Overheating of skin in infants or individuals with sensitive skin</li>
          </ul>
        </section>

        {/* Signs and Symptoms */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Signs and Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Red bumps or small blisters on the skin</li>
            <li>Itching or prickly sensation</li>
            <li>Skin irritation or mild inflammation</li>
            <li>Usually occurs on neck, chest, back, or skin folds</li>
            <li>Discomfort worsens with heat or sweating</li>
          </ul>
        </section>

        {/* Treatment */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Treatment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Move to a cooler environment and avoid excessive heat.</li>
            <li>Keep the affected area dry and cool.</li>
            <li>Wear loose, breathable clothing.</li>
            <li>Cool baths or gentle sponging can relieve itching.</li>
            <li>Over-the-counter soothing creams or calamine lotion can reduce irritation.</li>
            <li>Avoid scratching to prevent infection.</li>
          </ul>
        </section>

        {/* Prevention */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">Prevention</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Stay in cool, shaded, or air-conditioned areas during hot weather.</li>
            <li>Wear light, loose-fitting, breathable clothing.</li>
            <li>Take frequent breaks and stay hydrated to reduce sweating.</li>
            <li>Use fans or ventilation to keep air moving in warm environments.</li>
            <li>Avoid prolonged exposure to hot, humid conditions.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HeatRashesInfo;
