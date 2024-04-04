import React, {useState} from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const Modal = ({ title, onClose,endpoint,axiosPost }) => {
  const [vehicleDetails, setVehicleDetails] = React.useState({
    vehicleURL: '',
    vehiclePrice: '',
    VIN: '',
    stockNo: '',
    vehicleName: ''
  });
const [loading, setLoading] = useState(false)
const [ message, setMessage] = useState()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails({
      ...vehicleDetails,
      [name]: value
    });
  };

  const update = () => {
    setLoading(true)
    const token = JSON.parse(localStorage.getItem('user')).token;
    
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };

   axiosPost(`https://server-master-ullz.onrender.com/vehicle/${endpoint}`, vehicleDetails, {
        headers: headers
    })
    .then(response => {
        console.log('Vehicle created successfully:', response.data);
        setLoading(false)
        setMessage(response?.message)
        // Optionally, you can perform any additional actions after successful creation
    })
    .catch(error => {
      setLoading(false)
        console.error('Error creating vehicle:', error);
        setMessage(error)
        // Optionally, you can handle errors or display error messages
    });
};


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-[50vw] transition-opacity duration-300">
        <h2 className="font-bold text-lg mb-4">{title}</h2>
        {message}
        
        <div className="mb-4">
          <label htmlFor="vehicleURL" className="block text-sm font-medium text-gray-700">Vehicle URL</label>
          <input
            type="text"
            id="vehicleURL"
            name="vehicleURL"
            value={vehicleDetails.vehicleURL}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter vehicle URL"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehiclePrice" className="block text-sm font-medium text-gray-700">Vehicle Price</label>
          <input
            type="text"
            id="vehiclePrice"
            name="vehiclePrice"
            value={vehicleDetails.vehiclePrice}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter vehicle price"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="VIN" className="block text-sm font-medium text-gray-700">VIN</label>
          <input
            type="text"
            id="VIN"
            name="VIN"
            value={vehicleDetails.VIN}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter VIN"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stockNo" className="block text-sm font-medium text-gray-700">Stock No</label>
          <input
            type="text"
            id="stockNo"
            name="stockNo"
            value={vehicleDetails.stockNo}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter stock number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicleName" className="block text-sm font-medium text-gray-700">Vehicle Name</label>
          <input
            type="text"
            id="vehicleName"
            name="vehicleName"
            value={vehicleDetails.vehicleName}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter vehicle name"
          />
        </div>

        <div className='flex justify-between'>
          <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600' onClick={update}>{loading? 'Creating' : 'Create'}</button>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
