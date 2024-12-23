import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const Book = () => {
  const location = useLocation(); // Taking data from cart
  const { id, name, priceperhour, imageurl } = location.state || {};

  // Form state
  const [cName ,csetName] = useState('')
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
      pricePerHour:priceperhour,
      pickupDate,
      endDate,
      locationFrom,
      locationTo,
      needDriver,
      cName,
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

      // Reset 
      csetName('')
      setPickupDate('');
      setEndDate('');
      setLocationFrom('');
      setLocationTo('');
      setNeedDriver(false);
    } catch (error) {
      console.error('Error storing booking:', error);
      alert('  Error: Unable to book the car at the moment. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-auto bg-slate-800 text-gray-900 py-8 px-4">
        <h1 className="text-center text-4xl  font-medium mb-8 text-white">Book Your Car</h1>

        <div className="max-w-4xl mx-auto bg-slate-200 border rounded-lg shadow-lg p-6">
          <div className="flex flex-col lg:flex-row gap-6 ">
            {/* Car Preview */}
            <div className="w-full lg:w-1/3 text-center ">
              <img
                src={imageurl}
                alt={name}
                className="w-full h-48 object-cover rounded-lg mb-4 border shadow-sml"
              />
              <h2 className="text-xl font-semibold text-gray-900 ">{name}</h2>
              <p className="text-lg text-blue-800 shadow-lg">Price per hour: ₹{priceperhour}</p>
            </div>

            {/* Booking Form */}
            <div className=" w-full lg:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-4 bg-transparent ">
                {/* name customer */}
              <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1 text-gray-900">Full Name</label>
                  <input
                    type="text"
                    value={cName}
                    placeholder='Enter Your full name'
                    onChange={(e) => csetName(e.target.value)}
                    required
                    className="p-2 rounded-md border  border-gray-600 text-gray"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1 text-gray-900">Pickup Date</label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    required
                    className="p-2 rounded-md border  border-gray-900 text-gray focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>

                

                {/* End Date */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1 text-gray-900">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                    className="p-2 rounded-md border  border-gray-900 text-gray focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>

                {/* Pickup Location */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1 text-graay-900">Pickup Location</label>
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    value={locationFrom}
                    onChange={(e) => setLocationFrom(e.target.value)}
                    required
                    className="p-2 rounded-md border  border-gray-900 text-gray focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>

                {/* Drop-off Location */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1 text-gray-900">Drop-off Location</label>
                  <input
                    type="text"
                    placeholder="Enter drop-off location"
                    value={locationTo}
                    onChange={(e) => setLocationTo(e.target.value)}
                    required
                    className="p-2 rounded-md border  border-gray-900 text-gray focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>

                {/* Need Driver */}
                <div className="flex items-center">
                  <label className="text-sm font-medium mr-2 text-gray-900">Need a Driver?</label>
                  <input
                    type="checkbox"
                    checked={needDriver}
                    onChange={(e) => setNeedDriver(e.target.checked)}
                    className="p-2 rounded-md border  border-gray-900 text-gray focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-950 text-white py-2 rounded-md font-medium transition duration-200"
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
