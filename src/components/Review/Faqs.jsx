import React, { useState } from 'react';
import Navbar2 from '../Navbar/Navbar2';

const Faqs = () => {
  
  const faqs = [
    {
      question: "What is ArmanCar Rentals?",
      answer: "ArmanCar Rentals is your trusted partner for premium car rentals, providing a variety of vehicles for all your travel needs."
    },
    {
      question: "How can I rent a car?",
      answer: "You can rent a car by visiting our website, browsing available vehicles, and selecting your preferred options. Follow the booking process to complete the reservation."
    },
    {
      question: "What types of vehicles are available?",
      answer: "We offer a range of vehicles including sedans, SUVs, and luxury cars. You can find detailed specifications and availability on our website."
    },
    {
      question: "Do you provide 24/7 customer support?",
      answer: "Yes, we provide round-the-clock customer support to assist you with any inquiries or issues related to your car rental."
    },
    {
      question: "What are the payment options available?",
      answer: "We accept major credit and debit cards. Payment can be made securely through our online booking system."
    },
    {
      question: "Is there a mileage limit on the rentals?",
      answer: "We provide unlimited mileage for most of our rental packages. Please check the specific details for your selected vehicle during the booking process."
    }
  ];


  const [openFaq, setOpenFaq] = useState(null);

  // Function to toggle the FAQ item
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
    <div className='h-6'>
         <Navbar2/>
    </div>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-36 ">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-b-0 pb-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex items-center justify-between w-full text-left text-lg font-semibold text-blue-800 hover:text-green-500 transition"
            >
              {faq.question}
              <span className="text-xl font-bold">{openFaq === index ? '-' : '+'}</span>
            </button>
            {openFaq === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default Faqs;
