import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Balanced from "../assets/Balance_Diet.jpg";
const BalancedDiet = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen flex flex-col">
        {/* 🥗 Hero Section */}
        <section className="bg-gradient-to-r from-green-500 to-lime-600 text-white py-16 text-center shadow-md">
          <h1 className="text-4xl font-bold mb-4">Balanced Diet</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Fuel your body with essential nutrients by maintaining a healthy and balanced diet.
          </p>
        </section>

        {/* 🖼️ & 🎥 Image + Video Side by Side */}
        <section className="py-12 px-6 md:px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div>
              <img
              
                src={Balanced}
                alt="Healthy balanced diet"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* Video */}
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md">
 <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md">
  <iframe
    width="600"
    height="400"
    src="https://www.youtube.com/embed/NqV1Ig4_nfI"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


            </div>
          </div>
        </section>

        {/* 📝 Introduction */}
        <section className="py-12 px-6 md:px-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-700 text-md leading-7">
              A balanced diet provides your body with all the essential nutrients it needs to function effectively. It’s not just about eating less or more—it's about eating right. A proper balance of carbohydrates, proteins, fats, vitamins, and minerals promotes health, prevents disease, and enhances well-being.
            </p>
          </div>
        </section>

        {/* 🧬 Core Components */}
        <section className="py-12 px-6 md:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Core Components of a Balanced Diet</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: "🍞",
                  title: "Carbohydrates",
                  desc: "Main source of energy. Found in whole grains, fruits, and vegetables.",
                },
                {
                  icon: "🍗",
                  title: "Proteins",
                  desc: "Essential for growth and repair. Found in meat, beans, and dairy.",
                },
                {
                  icon: "🥑",
                  title: "Healthy Fats",
                  desc: "Support brain health and hormone production. Found in nuts, seeds, olive oil.",
                },
                {
                  icon: "🥕",
                  title: "Vitamins & Minerals",
                  desc: "Vital for immune function, bone health, and metabolism.",
                },
                {
                  icon: "💧",
                  title: "Water",
                  desc: "Keeps the body hydrated and supports digestion and detoxification.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-green-700 mb-2">
                    {item.icon} {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Tips Section */}
        <section className="py-12 px-6 md:px-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Healthy Eating Tips</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Include all food groups in daily meals for variety and nutrition.</li>
              <li>Limit intake of sugar, processed foods, and salty snacks.</li>
              <li>Eat smaller, frequent meals instead of large portions.</li>
              <li>Read nutrition labels to make informed choices.</li>
              <li>Stay hydrated throughout the day with clean water.</li>
              <li>Choose home-cooked meals over fast food whenever possible.</li>
            </ul>
          </div>
        </section>

        {/* 💪 Benefits Section */}
        <section className="py-12 px-6 md:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits of a Balanced Diet</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Maintains a healthy weight and energy levels</li>
              <li>Reduces risk of chronic diseases like diabetes, obesity, and heart disease</li>
              <li>Boosts brain function and concentration</li>
              <li>Supports immune system and overall wellness</li>
              <li>Improves digestion and promotes better sleep</li>
            </ul>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BalancedDiet;
