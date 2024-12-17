import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cars, setCars] = useState([]);

  // Fetch data
  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:8081/cars');
      setCars(res.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen  text-blue-800">
      <h1 className="text-center text-4xl font-bold py-6 bg-white">
        Cars Available for Rent
      </h1>
      <div className="grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-transparent rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className="overflow-hidden relative">
              {/* Updated image styling */}
              <img
                src={car.imageurl}
                alt={car.name}
                className="w-full h-80 object-center transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4 bg-lime-200">
              <h3 className="text-xl font-semibold mb-2">{car.name}</h3>

              <p className="text-blue-800 mb-4">
                Price per hour: ₹{car.priceperhour}
              </p>
              <Link
                to="/book"
                state={{
                  id: car.id,
                  name: car.name,
                  imageurl: car.imageurl,
                  priceperhour: car.priceperhour,
                }}
              >
                <button className="w-full bg-green-500 hover:bg-orange-700 text-white py-2 rounded-md font-medium transition">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
