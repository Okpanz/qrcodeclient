import React, { useState } from 'react';
import axios from 'axios';
import { IoQrCodeOutline } from 'react-icons/io5';
import QRCode from 'qrcode.react';
import { ToastContainer, toast } from 'react-toastify';
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

const CreateQRCode = () => {
  const [qrData, setQrData] = useState({
    vehicleURL: '',
    foregroundColor: '',
    backgroundColor: 'white',
    DealerName: '',
    vehiclePrice: '',
    VIN: '',
    stockNo: '',
    vehicleName: '',
    docFee: '',
    imageFile: null,
  });


  const resetQrData = () => {
    setQrData({
      vehicleURL: '',
      foregroundColor: '',
      backgroundColor: 'white',
      DealerName: '',
      vehiclePrice: '',
      VIN: '',
      stockNo: '',
      vehicleName: '',
      docFee: '',
      imageFile: null,
    });
  };
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQrData({
      ...qrData,
      [name]: value,
    });
  };

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setQrData({
      ...qrData,
      [name]: colorMap[value],
    });
  };

  const handleImageChange = (e) => {
    setQrData({
      ...qrData,
      imageFile: e.target.files[0],
    });
  };

  const createQRCode = async () => {
    setLoading(true);

    try {
      const formData = new FormData();
      for (const key in qrData) {
        formData.append(key, qrData[key]);
      }
      const token = JSON.parse(localStorage.getItem('user')).token;
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
      const response = await axios.post('https://server-master-ullz.onrender.com/vehicle/generate', formData,{headers});

      toast.success("QR Code Generated Successfully");
      resetQrData()
    } catch (error) {
      console.error('Error creating QR code:', error);
      toast.error('Failed to create QR code');
    }

    setLoading(false);
  };
  
 

  return (
    <>
      <div className="bg-gray-300 p-8 rounded-md shadow-lg w-[50vw] ml-auto overflow-y-scroll transition-opacity duration-300">
        <h2 className="font-bold text-lg mb-4">Create QR Code</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="vehicleURL" className="block text-sm font-medium text-gray-700">URL</label>
            <input
              type="text"
              id="vehicleURL"
              name="vehicleURL"
              value={qrData.vehicleURL}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter URL"
            />
          </div>
          <div>
            <label htmlFor="foregroundColor" className="block text-sm font-medium text-gray-700"> Color</label>
            <select
              id="foregroundColor"
              name="foregroundColor"
              value={qrData.foregroundColor}
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
         
          <div>
            <label htmlFor="DealerName" className="block text-sm font-medium text-gray-700">Dealer Name</label>
            <input
              type="text"
              id="DealerName"
              name="DealerName"
              value={qrData.DealerName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Dealer Name"
            />
          </div>
          <div>
            <label htmlFor="vehiclePrice" className="block text-sm font-medium text-gray-700">Vehicle Price</label>
            <input
              type="text"
              id="vehiclePrice"
              name="vehiclePrice"
              value={qrData.vehiclePrice}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Vehicle Price"
            />
          </div>
          <div>
            <label htmlFor="VIN" className="block text-sm font-medium text-gray-700">VIN</label>
            <input
              type="text"
              id="VIN"
              name="VIN"
              value={qrData.VIN}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter VIN"
            />
          </div>
          <div>
            <label htmlFor="stockNo" className="block text-sm font-medium text-gray-700">Stock No</label>
            <input
              type="text"
              id="stockNo"
              name="stockNo"
              value={qrData.stockNo}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Stock Number"
            />
          </div>
          <div>
            <label htmlFor="vehicleName" className="block text-sm font-medium text-gray-700">Vehicle Name</label>
            <input
              type="text"
              id="vehicleName"
              name="vehicleName"
              value={qrData.vehicleName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Vehicle Name"
            />
          </div>
          <div>
            <label htmlFor="docFee" className="block text-sm font-medium text-gray-700">Doc Fee</label>
            <input
              type="text"
              id="docFee"
              name="docFee"
              value={qrData.docFee}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Doc Fee"
            />
          </div>
          <div>
            <label htmlFor="imageFile" className="block text-sm font-medium text-gray-700">Upload Image File</label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              onChange={handleImageChange}
              accept="image/*"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={createQRCode}
            className={`bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Creating' : 'Create'}
          </button>
         
        </form>
        <div className="mt-4">
          <IoQrCodeOutline size={50} />
          <div className="bg-gray-200 p-4 rounded-md relative">
            <QRCode value={qrData.url} size={100} fgColor={qrData.foregroundColor || '#000000'} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateQRCode;
