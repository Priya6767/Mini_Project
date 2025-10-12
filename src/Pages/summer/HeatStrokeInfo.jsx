import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { AlertTriangle, HeartPulse, ThermometerSun } from "lucide-react";

const HeatStrokeInfo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10 bg-gradient-to-b from-red-50 to-orange-50">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-red-600 mb-2 flex items-center justify-center gap-3">
            <ThermometerSun className="w-10 h-10 text-orange-500" />
            Heat Stroke
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn the causes, symptoms, treatment, and prevention of one of the
            most serious heat-related illnesses.
          </p>
        </motion.div>

        {/* Image + Video Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 items-center bg-white p-6 rounded-2xl shadow-lg"
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/07/31/11/21/sun-2557583_1280.jpg"
            alt="Heat Stroke Illustration"
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
          />
          <iframe
            className="w-full h-80 rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/7D1HRb8P4Wk"
            title="Heat Stroke Explained"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.section>

        {/* Info Cards */}
        {[
          {
            title: "What is Heat Stroke?",
            content:
              "Heat stroke is a life-threatening condition that occurs when the body overheats, usually due to prolonged exposure to high temperatures or intense physical activity. It’s the most severe heat-related illness.",
            icon: <HeartPulse className="text-red-500 w-6 h-6" />,
          },
          {
            title: "How It Happens",
            list: [
              "Body temperature rises excessively as natural cooling fails.",
              "Cooling mechanisms fail due to dehydration or humidity.",
              "Organs such as brain, heart, and kidneys can be damaged.",
            ],
            icon: <AlertTriangle className="text-orange-500 w-6 h-6" />,
          },
        ].map((section, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              {section.icon}
              <h2 className="text-2xl font-semibold text-red-600">
                {section.title}
              </h2>
            </div>
            {section.content && <p className="text-gray-700">{section.content}</p>}
            {section.list && (
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </motion.section>
        ))}

        {/* Symptoms Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Signs and Symptoms
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Early Warning Signs:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Heavy sweating or sudden stop of sweating</li>
                <li>Muscle cramps and fatigue</li>
                <li>Dizziness, nausea, or fainting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Severe Symptoms:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Body temperature ≥ 40°C (104°F)</li>
                <li>Hot, flushed, or dry skin</li>
                <li>Confusion, seizures, or unconsciousness</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Treatment Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Treatment
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Call emergency services immediately (911 or local equivalent).</li>
            <li>Move the person to a shaded or air-conditioned place.</li>
            <li>Cool the body quickly — use water, cold packs, or immersion.</li>
            <li>Hydrate only if conscious; avoid caffeine and alcohol.</li>
            <li>Hospital care may involve IV fluids, cooling blankets, and monitoring.</li>
          </ul>
        </motion.section>

        {/* Prevention Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-red-700 mb-4">
            Prevention Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-800">
            <ul className="list-disc list-inside space-y-1">
              <li>Stay hydrated — drink water regularly.</li>
              <li>Wear lightweight, breathable clothing.</li>
              <li>Take breaks in shade or indoors when it’s hot.</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Avoid intense exercise during peak heat hours.</li>
              <li>Limit alcohol or caffeine intake in hot weather.</li>
              <li>Check on vulnerable people like children and the elderly.</li>
            </ul>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default HeatStrokeInfo;
