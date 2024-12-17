import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Book = () => {
  const location = useLocation(); // Taking data from cart
  const { id, name, priceperhour, imageurl } = location.state || {};

  // Form state
  const [pickupDate, setPickupDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [locationFrom, setLocationFrom] = useState('');
  const [locationTo, setLocationTo] = useState('');
  const [needDriver, setNeedDriver] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingDetails = {
      carId: id,
      carName: name,
      pricePerHour: priceperhour,
      pickupDate,
      endDate,
      locationFrom,
      locationTo,
      needDriver,
    };

    try {
      const response = await fetch('http://localhost:8081/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to save booking. Please try again.');
      }

      const data = await response.json();
      alert('🎉 Booking confirmed! Enjoy your journey 🚗');
      console.log('Server Response:', data);

      // Reset form state
      setPickupDate('');
      setEndDate('');
      setLocationFrom('');
      setLocationTo('');
      setNeedDriver(false);
    } catch (error) {
      console.error('Error storing booking:', error);
      alert('⚠️ Error: Unable to book the car at the moment. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-gray-100 py-8 px-4">
        <h1 className="text-center text-4xl font-bold mb-8 text-teal-300">Book Your Car</h1>

        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Car Preview */}
            <div className="w-full lg:w-1/3 text-center">
              <img
                src={imageurl}
                alt={name}
                className="w-full h-48 object-cover rounded-lg mb-4 border border-teal-400"
              />
              <h2 className="text-xl font-semibold text-teal-300">{name}</h2>
              <p className="text-lg text-green-400">Price per hour: ₹{priceperhour}</p>
            </div>

            {/* Booking Form */}
            <div className="w-full lg:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Pickup Date */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1 text-teal-200">Pickup Date</label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    required
                    className="p-2 rounded-md border bg-gray-700 border-gray-600 text-white focus:ring-teal-400 focus:border-teal-400"
                  />
                </div>

                {/* End Date */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1 text-teal-200">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                    className="p-2 rounded-md border bg-gray-700 border-gray-600 text-white focus:ring-teal-400 focus:border-teal-400"
                  />
                </div>

                {/* Pickup Location */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1 text-teal-200">Pickup Location</label>
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    value={locationFrom}
                    onChange={(e) => setLocationFrom(e.target.value)}
                    required
                    className="p-2 rounded-md border bg-gray-700 border-gray-600 text-white focus:ring-teal-400 focus:border-teal-400"
                  />
                </div>

                {/* Drop-off Location */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1 text-teal-200">Drop-off Location</label>
                  <input
                    type="text"
                    placeholder="Enter drop-off location"
                    value={locationTo}
                    onChange={(e) => setLocationTo(e.target.value)}
                    required
                    className="p-2 rounded-md border bg-gray-700 border-gray-600 text-white focus:ring-teal-400 focus:border-teal-400"
                  />
                </div>

                {/* Need Driver */}
                <div className="flex items-center">
                  <label className="text-sm font-medium mr-2 text-teal-200">Need a Driver?</label>
                  <input
                    type="checkbox"
                    checked={needDriver}
                    onChange={(e) => setNeedDriver(e.target.checked)}
                    className="w-5 h-5 text-teal-500 focus:ring-teal-500 focus:ring-opacity-50 rounded"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-400 text-white py-2 rounded-md font-medium transition duration-200"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
