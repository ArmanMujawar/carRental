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
  <div className="w-full h-auto shadow-lg bg-slate-100">
      <h1 className="text-center text-4xl  font-bold font-manrope py-6 text-gray-900  ">
        Cars Available for Rent
      </h1>
      <div className="grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden object-center hover:caret-slate-950"
          >
            <div className="overflow-hidden relative">
             
              <img
                src={car.imageurl}
                alt={car.name}
                className="w-full h-80 object-top transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="text-base grid px-4 ">
              <h3 className="text-base text-fogray-800 nt-semibold mb-2">{car.name}</h3>

              <p className="text-base text-blue-800 mb-4">
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
                <button className="w-full text-gray-900 hover:bg-blue-600 hover:text-white  py-2 mb-3 rounded-md font-medium transition ">
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
