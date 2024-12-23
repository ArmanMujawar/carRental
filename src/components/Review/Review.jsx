import React from 'react';
import male from '../../assets/male.svg';
import female from '../../assets/female.svg'



const Review = () => {
  return (
    <>
      <div className=" py-12 px-6 bg-slate-50">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="flex justify-center gap-6 overflow-x-auto scrollbar-hide ">

          <div className="bg-teal-200 p-6 border rounded-lg shadow-xl max-w-sm flex flex-col items-center  ">
            <img src={male} className="w-24 h-24 rounded-full mb-4 border-4 border-none" alt="Review 1" />
            <h3 className="text-xl font-semibold text-blue-800">Arman Mujawar</h3>
            <p className="text-orange-600 text-sm">Pune to Goa</p>
            <p className="text-blue-800 mt-4 text-sm italic">
              The drive from Pune to Goa was amazing!
            </p>
            <div className="flex mt-4">
              <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-teal-200 p-6 border rounded-lg shadow-xl max-w-sm flex flex-col items-center  ">
          <img src={male} className="w-24 h-24 rounded-full mb-4 border-4 border-none" alt="Review 2" />
            <h3 className="text-xl font-semibold text-blue-900">Tushar More</h3>
            <p className="text-orange-600 text-sm">Bangalore to Mysore</p>
            <p className="text-blue-800 mt-4 text-sm italic">
              Best services, great condition, loved the journey!
            </p>
            <div className="flex mt-4">
              <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-teal-200 p-6 border rounded-lg shadow-xl max-w-sm flex flex-col items-center  ">

            <img src={female} className="w-24 h-24 rounded-full mb-4 border-4 border-none" alt="Review 3" />
            <h3 className="text-xl font-semibold text-blue-900">Afreen Patel</h3>
            <p className="text-orange-600 text-sm">Mumbai to Goa</p>
            <p className="text-blue-800 mt-4 text-sm italic">
              The cars are always in great condition, peace of mind!
            </p>
            <div className="flex mt-4">
              <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>

          {/* Review 4 */}
          <div className="bg-teal-200 p-6 border rounded-lg shadow-xl max-w-sm flex flex-col items-center  ">

            <img src={male} className="w-24 h-24 rounded-full mb-4 border-4 border-none" alt="Review 4" />
            <h3 className="text-xl font-semibold text-blue-900">Rushi Patil</h3>
            <p className="text-orange-600 text-sm">Pune to Kolhapur</p>
            <p className="text-blue-800 mt-4 text-sm italic">
              Love the service! Great journey, great cars!
            </p>
            <div className="flex mt-4">
              <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
