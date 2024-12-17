import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Admin.css";


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
        // Fetch cars
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
        <div className="container mx-auto bg-gray-800 p-4">
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
                    className={`tab-button ${activeTab === "viewCars" ? "bg-lime-200 text-blue-800" : "bg-gray-200 text-gray-800"} px-4 py-2 rounded-lg m-2 hover:bg-lime-500`}
                    onClick={() => setActiveTab("viewCars")}
                >
                    View Cars
                </button>
                <button
                    className={`tab-button ${activeTab === "addCar" ?  "bg-lime-200 text-blue-800" : "bg-gray-200 text-gray-800"} px-4 py-2 rounded-lg m-2  hover:bg-lime-500`}
                    onClick={() => setActiveTab("addCar")}
                >
                    Add New Car
                </button>
                <button
                    className={`tab-button ${activeTab === "customerRequests" ? "bg-lime-200 text-blue-800"  : "bg-gray-200 text-gray-800"} px-4 py-2 rounded-lg m-2  hover:bg-lime-500`}
                    onClick={() => setActiveTab("customerRequests")}
                >
                    Customer Requests
                </button>
            </div>

           
            <div className="bg-gray-800 text-blue-600 rounded-lg- shadow-md w-full tab-content">
               
                {activeTab === "viewCars" && (
                    <div className="car-list">
                        <h2 className="text-2xl text-white font-semibold mb-4m text-center ">All Cars</h2>
                        <table className="min-w-full bg-gray-50 border shadow-md">
                            <thead>
                                <tr className='p-4'>
                                    <th className="py-2 border-b text-black">Name</th>
                                    <th className="py-2 border-b  text-black">Price per Hour</th>
                                    <th className="py-2 border-b  text-black">Image</th>
                                    <th className="py-2 border-b  text-black">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.map((car) => (
                                    <tr key={car.id}>
                                        <td className="py-2 border-b">{car.name}</td>
                                        <td className="py-2 border-b">{car.priceperhour}</td>
                                        <td className="py-2 border-b"><img src={car.imageurl} alt={car.name} className="w-12 h-12 object-cover" /></td>
                                        <td className="py-2 border-b">
                                            <button className="text-blue-500 mr-2" onClick={() => setSelectedCar(car)}>Edit</button>
                                            <button className="text-red-500" onClick={() => handleDeleteCar(car.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* update cart  */}
                        {selectedCar && (
                            <div className="bg-gray-800 update-car-form mt-4 w-96 lg:w-2/3 mx-48">
                                <h3 className="bg-white-800 text-white text-xl font-semibold mb-2 text-center ">Update Car</h3>
                                <form onSubmit={handleUpdateCar} className="space-y-0 bg-white">
                                  <label className='text-gray-950 mb-0'> Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={selectedCar.name}
                                        onChange={(e) =>
                                            setSelectedCar({ ...selectedCar, name:e.target.value })
                                        }
                                        required
                                        className="w-full p-2 border rounded mt-0"
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
                                        className="w-full p-2 border rounded"
                                    />
                                     <label className='text-gray-950 mb-0'>ImageUrl</label>
                                    <input
                                        type="text"
                                        placeholder="Image URL"
                                        value={selectedCar.imageurl}
                                        onChange={(e) =>
                                            setSelectedCar({ ...selectedCar, imageurl: e.target.value })
                                        }
                                        className="w-full p-2 border rounded"
                                    />
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                                </form>
                            </div>
                        )}
                    </div>
                )}

                {/* Add New Car */}
                {activeTab === "addCar" && (
                    <div className="add-car-form ">
                        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Add New Car</h2>
                        <form onSubmit={handleAddCar} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={newCar.name}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="number"
                                name="priceperhour"
                                placeholder="Price per Hour"
                                value={newCar.priceperhour}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="imageurl"
                                placeholder="Image URL"
                                value={newCar.imageurl}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                            />
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ">Add Car</button>
                        </form>
                    </div>
                )}

                {/* Customer Requests */}
                {activeTab === "customerRequests" && (
                    <div className="customer-requests">
                        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Customer Requests</h2>
                        <ul className="space-y-2">
                            {customerRequests.length > 0 ? (
                                customerRequests.map((request, index) => (
                                    <li key={index} className="p-4 border rounded bg-gray-100">
                                        <p><strong>Car Name:</strong> {request.carName}</p>
                                        <p><strong>Customer Name:</strong> {request.customerName}</p>
                                        <p><strong>Pickup Date:</strong> {request.pickupDate}</p>
                                        <p><strong>End Date:</strong> {request.endDate}</p>
                                        <p><strong>Location From:</strong> {request.locationFrom}</p>
                                        <p><strong>Location To:</strong> {request.locationTo}</p>
                                        <p><strong>Need Driver:</strong> {request.needDriver ? "Yes" : "No"}</p>
                                        <p><strong>Total Price:</strong> {request.totalPrice} INR</p>
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
