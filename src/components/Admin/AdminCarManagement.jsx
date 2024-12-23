import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const AdminCarManagement = () => {
    const [cars, setCars] = useState([]);
    const [newCar, setNewCar] = useState({
        name: '',
        priceperhour: '',
        imageurl: '',
    });
    const [selectedCar, setSelectedCar] = useState(null);
    const [activeTab, setActiveTab] = useState("viewCars");
    const [customerRequests, setCustomerRequests] = useState([]);

    
    useEffect(() => {
        
        axios.get('http://localhost:8081/cars')
            .then((response) => {
                setCars(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the cars!', error);
            });

        // Fetch customer requests (bookings)
        axios.get('http://localhost:8081/api/bookings')
            .then((response) => {
                setCustomerRequests(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the customer requests!', error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCar({
            ...newCar,
            [name]: value,
        });
    };

    const handleAddCar = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/cars', newCar)
            .then((response) => {
                setCars([...cars, response.data]);
                setNewCar({ name: '', priceperhour: '', imageurl: '' });
            })
            .catch((error) => {
                console.error('There was an error adding the car!', error);
            });
    };

    const handleUpdateCar = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8081/cars/${selectedCar.id}`, selectedCar)
            .then((response) => {
                setCars(cars.map(car => (car.id === response.data.id ? response.data : car)));
                setSelectedCar(null);
            })
            .catch((error) => {
                console.error('There was an error updating the car!', error);
            });
    };

    const handleDeleteCar = (id) => {
        axios.delete(`http://localhost:8081/cars/${id}`)
            .then(() => {
                setCars(cars.filter((car) => car.id !== id));
            })
            .catch((error) => {
                console.error('There was an error deleting the car!', error);
            });
    };

    const handleLogout = () => {
        
        console.log("User logged out");
    };

    return (
        <div className="container mx-auto bg-slate-800 p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-center text-white">Admin Car Management</h1>
                <Link to="/" onClick={handleLogout}>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                        Logout
                    </button>
                </Link>
            </div>

            {/* Tabs Navigation */}
            <div className="flex mb-4">
                <button
                    className={`tab-button ${activeTab === "viewCars" ?  "bg-transparent text-white border-b-2 border-green-600" : "bg-gray-200 text-gray-800"} px-4 py-2 rounded-lg m-2 `}
                    onClick={() => setActiveTab("viewCars")}
                >
                    View Cars
                </button>
                <button
                    className={`tab-button ${activeTab === "addCar" ?  "bg-transparent text-white border-b-2 border-green-600" : "bg-gray-200 text-gray-800"} px-4 py-2 rounded-lg m-2 `}
                    onClick={() => setActiveTab("addCar")}
                >
                    Add New Car
                </button>
                <button
                    className={`tab-button ${activeTab === "customerRequests" ?  "bg-transparent text-white border-b-2 border-green-600" : "bg-gray-200 text-gray-800"} px-4 py-2 rounded-lg m-2 `}
                    onClick={() => setActiveTab("customerRequests")}
                >
                    Customer Requests
                </button>
            </div>

           {/* view cars */}
            <div className="bg-gray-800 text-blue-600 rounded-lg- shadow-md w-full tab-content">
               
                {activeTab === "viewCars" && (
                    <div className="car-list">
                        <h2 className="text-2xl text-white font-semibold mb-4m text-center ">All Cars</h2>
                        <table className="min-w-full bg-gray-50 border shadow-md">
                            <thead>
                                <tr className='px-4'>
                                    <th className="py-2  border-b text-black">Name</th>
                                    <th className="py-2 border-b  text-black">Price per Hour</th>
                                    <th className="py-2 border-b  text-black">Image</th>
                                    <th className="py-2 border-b  text-black">Actions</th>
                                </tr>
                            </thead>
                            <tbody >
                                {cars.map((car) => (
                                    <tr key={car.id}>
                                        <td className="py-2 px-4 border border-spacing-1 text-center ">{car.name}</td>
                                        <td className="py-2 border-b border border-spacing-1 px-4 text-center">{car.priceperhour}</td>
                                        <td className="py-2 border-b border border-spacing-1 text-center px-4"><img src={car.imageurl} alt={car.name} 
                                        className=" w-24 h-auto object-cover" /></td>
                                        <td className="py-2 border-b border border-spacing-1 px-4">
                                            <button className="text-white rounded mr-2 bg-blue-600 px-4 py-1 m-1 " onClick={() => setSelectedCar(car)}>Edit</button>
                                            <button className="text-white rounded mr-2 bg-red-600 px-4 py-1 m-1 " onClick={() => handleDeleteCar(car.id)}>Delete</button>
                                        </td> 
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* update cart  */}
                        {selectedCar && (
                            <div className="bg-gray-800 update-car-form mt-4 w-96 lg:w-2/3 mx-48">
                                <h3 className="bg-white-800 text-white text-xl font-semibold mb-2 text-center ">Update Car</h3>
                                <form onSubmit={handleUpdateCar} className=" py-3 px-3 bg-white">
                                  <label className=' text-gray-950 mb-0 '> Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={selectedCar.name}
                                        onChange={(e) =>
                                            setSelectedCar({ ...selectedCar, name:e.target.value })
                                        }
                                        required
                                        className="w-full p-2 border-2 rounded mb-4 border-slate-300 "
                                    />
                                     <label className='text-gray-950 mb-0'>PricePerHour</label>
                                    <input
                                        type="number"
                                        placeholder="Price per Hour"
                                        value={selectedCar.priceperhour}
                                        onChange={(e) =>
                                            setSelectedCar({ ...selectedCar, priceperhour: e.target.value })
                                        }
                                        required
                                        className="w-full p-2 border-2 rounded mb-4  border-slate-300"
                                    />
                                     <label className='text-gray-950 mb-0'>ImageUrl</label>
                                    <input
                                        type="text"
                                        placeholder="Image URL"
                                        value={selectedCar.imageurl}
                                        onChange={(e) =>
                                            setSelectedCar({ ...selectedCar, imageurl: e.target.value })
                                        }
                                        className="w-full  border-2 rounded mb-4 border-slate-300"
                                    />
                                    <button type="submit" className="bg-blue-800 hover:bg-green-900  text-white px-4 py-1 rounded">Update</button>
                                </form>
                            </div>
                        )}
                    </div>
                )}

                {/* Add New Car */}
                {activeTab === "addCar" && (
                    <div className="bg-gray-800 update-car-form mt-4 w-96 lg:w-2/3 mx-48">
                    <h3 className="bg-white-800 text-white text-xl font-semibold mb-2 text-center ">Update Car</h3>
                        <form onSubmit={handleAddCar} className="py-3 px-3 bg-white">
                            <label className=' text-gray-950 mb-0'>carName</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter carName"
                                value={newCar.name}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border-2 rounded mb-4  border-slate-300"
                            />
                            <label className=' text-gray-950 mb-0'>pricePerHour</label>
                            <input
                                type="number"
                                name="priceperhour"
                                placeholder="Price per Hour"
                                value={newCar.priceperhour}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border-2 rounded mb-4  border-slate-300"
                            />
                            <label className=' text-gray-950 mb-0'>imageUrl</label>
                            <input
                                type="text"
                                name="imageurl"
                                placeholder="Image URL"
                                value={newCar.imageurl}
                                onChange={handleInputChange}
                                className="w-full p-2 border-2 rounded mb-4  border-slate-300"
                            />
                            <button type="submit" className="bg-blue-800 hover:bg-green-900  text-white px-4 py-1 rounded">Add Car</button>
                        </form>
                    </div>
                )}

                {/* Customer Requests */}
                {activeTab === "customerRequests" && (
                    <div className="customer-requests">
                        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Customer Requests</h2>
                        <ul className="flex gap-4 flex-wrap">
                            {customerRequests.length > 0 ? (
                                customerRequests.map((request, index) => ( 
                                    <li key={index} className="p-4 border rounded bg-green-100 w-80 text-gray-900">
                                        <p className=''><strong className='font-medium'>Car Name:</strong> {request.carName}</p>
                                        <p><strong className="font-medium">Customer Name:</strong> {request.cName}</p>
                                        <p><strong className="font-medium">Pickup Date:</strong> {request.pickupDate}</p>
                                        <p><strong className="font-medium">End Date:</strong> {request.endDate}</p>
                                        <p><strong className="font-medium">Location From:</strong> {request.locationFrom}</p>
                                        <p><strong className="font-medium">Location To:</strong> {request.locationTo}</p>
                                        <p><strong className="font-medium">Need Driver:</strong> {request.needDriver ? "Yes" : "No"}</p>
                                        <p><strong className="font-medium">PricePerHour:</strong>{request.pricePerHour}</p>
                                       
                                    </li>
                                ))
                            ) : (
                                <p>No customer requests found.</p>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminCarManagement;
