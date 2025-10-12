import React from 'react'
import summer from '../assets/summer.jpg'
import monsoon from '../assets/monsoon.jpeg'
import winter from '../assets/winter.jpeg'
import vaccination from '../assets/vaccination.jpeg'
import phc from '../assets/PHC.jpeg'

const cards = [
  {
    title: "Summer",
    image: summer,
    description: "Stay safe in the summer by recognizing the signs of heat stroke and knowing how to prevent it."
  },
  {
    title: "Monsoon",
    image: monsoon,
    description: "Learn how to protect yourself from dengue during the monsoon season with simple tips and precautions."
  },
  {
    title: "Winter",
    image: winter,
    description: "Keep your immune system strong and avoid common winter illnesses with these wellness tips."
  },
  {
    title: "Vaccination Reminders",
    image: vaccination,
    description: "Never miss a vaccination! Get reminders and information about important seasonal vaccines."
  },
  {
    title: "Nearby Hospitals/PHCs",
    image: phc,
    description: "Find hospitals and medical shops near you quickly in case of any seasonal health emergencies."
  }
];

const Section = () => {
  return (
    <div className="py-10 px-6 md:px-14 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Seasonal Health Essentials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="rounded-lg mb-4 w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-bold mb-2 text-center">{card.title}</h3>
            <p className="text-gray-600 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section