import React, { useState } from 'react';
import axios from 'axios';
import { IoQrCodeOutline } from 'react-icons/io5';
import QRCode from 'qrcode.react'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const colorMap = {
  white: 'white',
  black: 'black',
  red: 'red',
  orange: 'orange',
  green: 'green',
  blue: 'blue',
  yellow: 'yellow',
  purple: 'purple',
  pink: 'pink',
  brown: 'brown',
  cyan: 'cyan',
  magenta: 'magenta',
  gold: 'gold',
  silver: 'silver',
  gray: 'gray',
  lightgray: 'lightgray',
  darkgray: 'darkgray',
  maroon: 'maroon',
  olive: 'olive',
  navy: 'navy',
  teal: 'teal',
};

const UpdateModal = ({ title, onClose, endpoint, axiosPost, qrCodeId }) => {
    const [vehicleDetails, setVehicleDetails] = useState({
      vehicleURL: '',
      vehiclePrice: '',
      VIN: '',
      stockNo: '',
      vehicleName: '',
      docFee: '',
      foregroundColor: '',
      backgroundColor: 'white',
      DealerName: '',
      qrName: '',
      imageFile: null,
    });
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setVehicleDetails({
        ...vehicleDetails,
        [name]: value,
      });
    };
  
    const handleImageChange = (e) => {
      setVehicleDetails({
        ...vehicleDetails,
        imageFile: e.target.files[0],
      });
    };
  
    const handleColorChange = (e) => {
      const { name, value } = e.target;
      setVehicleDetails({
        ...vehicleDetails,
        [name]: colorMap[value],
      });
    };
  
    const update = async () => {
      setLoading(true);
      try {
        const formData = new FormData();
        for (const key in vehicleDetails) {
          formData.append(key, vehicleDetails[key]);
        }
  
        const response = await axiosPost(`https://server-master-ullz.onrender.com/${endpoint}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        });
  
        console.log('Vehicle updated successfully:', response.data);
        setLoading(false);
        toast.success('Vehicle updated successfully');
        onClose(true); 
      } catch (error) {
        setLoading(false);
        console.error('Error updating vehicle:', error);
        toast.error('Failed to update vehicle');
      }
    };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-scroll ">
      <div className="bg-white p-8 rounded-md shadow-lg w-[50vw] h-[70vh] overflow-y-scroll transition-opacity duration-300">
        <h2 className="font-bold text-lg mb-4">{title}</h2>
       
        
        <div className="mb-4">
          <label htmlFor="vehicleURL" className="block text-sm font-medium text-gray-700">
            Vehicle URL
          </label>
          <input
            type="text"
            id="vehicleURL"
            name="vehicleURL"
            value={vehicleDetails.vehicleURL}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 placeholder:italic focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter vehicle URL e.g(http://example.com)"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehiclePrice" className="block text-sm font-medium text-gray-700">
            Vehicle Price
          </label>
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
          <label htmlFor="VIN" className="block text-sm font-medium text-gray-700">
            VIN
          </label>
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
          <label htmlFor="stockNo" className="block text-sm font-medium text-gray-700">
            Stock No
          </label>
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
          <label htmlFor="stockNo" className="block text-sm font-medium text-gray-700">
          Dealer Name
          </label>
          <input
            type="text"
            id="DealerName"
            name="DealerName"
            value={vehicleDetails.DealerName}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Dealer Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicleName" className="block text-sm font-medium text-gray-700">
            Vehicle Name
          </label>
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
        <div className="mb-4">
          <label htmlFor="docFee" className="block text-sm font-medium text-gray-700">
            Doc Fee
          </label>
          <input
            type="text"
            id="docFee"
            name="docFee"
            value={vehicleDetails.docFee}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter doc fee"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="foregroundColor" className="block text-sm font-medium text-gray-700">
            Foreground Color
          </label>
          <select
            id="foregroundColor"
            name="foregroundColor"
            value={vehicleDetails.foregroundColor}
            onChange={handleColorChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a color</option>
            {Object.keys(colorMap).map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="imageFile" className="block text-sm font-medium text-gray-700">
            Upload Image File
          </label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            onChange={handleImageChange}
            accept="image/*"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="qrCodePreview" className="block text-sm font-medium text-gray-700">
            QR Code Preview
          </label>
          <div className="flex items-center">
            <div className="mr-4">
              <IoQrCodeOutline size={50} />
            </div>
            <div className="bg-gray-200 p-4 rounded-md relative">
  {vehicleDetails.imageFile && (
    <img
      src={URL.createObjectURL(vehicleDetails.imageFile)}
      alt="Uploaded Image"
      className="absolute top-[40%] left-[30%]"
      style={{ maxWidth: '40px', maxHeight: '40px', objectFit: 'cover' }}
    />
  )}
  <QRCode
    id="qrCodePreview"
    value={vehicleDetails.vehicleURL || 'https://example.com'}
    size={100}
    fgColor={vehicleDetails.foregroundColor || '#000000'}
  />
</div>

          </div>
        </div>
        <div className="flex justify-between">
          <button
            className={`mt-4 ${loading ? 'bg-blue-800' : 'bg-blue-800'} text-white px-4 py-2 rounded-md hover:bg-blue-600`}
            onClick={update}
            disabled={loading}
          >
            {loading ? 'Creating' : 'Create'}
          </button>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateModal;
