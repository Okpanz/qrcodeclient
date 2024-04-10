import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function UpdateModal({ axiosPost, endpoint, onClose }) {
  const [formData, setFormData] = useState({
    vehicleURL: '',
    vehiclePrice: '',
    VIN: '',
    stockNo: '',
    vehicleName: '',
    docFee: '',
    DealerName: '',
    qrName: '',
  });
  const [qrCodeId, setQRCodeId] = useState('');
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedFormData = {};
      Object.keys(formData).forEach(key => {
        if (formData[key] !== '') {
          updatedFormData[key] = formData[key];
        }
      });
  
      // Check if there are any fields to update
      if (Object.keys(updatedFormData).length === 0) {
        toast.warning('No fields to update');
        return;
      }
  
      const response = await axiosPost(`https://server-master-ullz.onrender.com/${endpoint}`, updatedFormData);
      setLoading(false);
      toast.success('Updated Successfully');
      window.location.reload()
      onClose(); 
      
    } catch (error) {
      setLoading(false);
      toast.error('Error while updating');
      console.error('Error updating QR Code:', error);
    }
  };
  

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg w-[50%] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm: sm:items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Update QR Code
              </h3>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                  
                    <div className="col-span-2">
                      <label htmlFor="vehicleURL" className="block text-left text-sm font-medium text-gray-700">
                        Vehicle URL:
                      </label>
                      <input
                        type="text"
                        placeholder='Vehicle URL'
                        name="vehicleURL"
                        id="vehicleURL"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={formData.vehicleURL}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="vehiclePrice" className="block text-sm text-left font-medium text-gray-700">
                        Vehicle Price:
                      </label>
                      <input
                        type="text"
                        placeholder='Vehicle Price'
                        name="vehiclePrice"
                        id="vehiclePrice"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={formData.vehiclePrice}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="VIN" className="block text-left text-sm font-medium text-gray-700">
                        VIN:
                      </label>
                      <input
                        type="text"
                        name="VIN"
                        id="VIN"
                        placeholder='Enter VIN'
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={formData.VIN}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="stockNo" className="block text-left text-sm font-medium text-gray-700">
                        Stock No:
                      </label>
                      <input
                        type="text"
                        name="stockNo"
                        placeholder='Enter Stock No'
                        id="stockNo"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={formData.stockNo}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="vehicleName" className="block text-left text-sm font-medium text-gray-700">
                        Vehicle Name:
                      </label>
                      <input
                        type="text"
                        name="vehicleName"
                        placeholder='Enter Vehicle Name'
                        id="vehicleName"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={formData.vehicleName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="docFee" className="block text-sm text-left font-medium text-gray-700">
                        Doc Fee:
                      </label>
                      <input
                        type="text"
                        name="docFee"
                        placeholder='Enter Doc Fee'
                        id="docFee"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={formData.docFee}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="DealerName" className="block text-left text-sm font-medium text-gray-700">
                        Dealer Name:
                      </label>
                      <input
                        type="text"
                        name="DealerName"
                        placeholder='Enter Dealer Name'
                        id="DealerName"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={formData.DealerName}
                        onChange={handleChange}
                      />
                    </div>
                   
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {loading ? 'Updating' : 'Update QR Code'}
                    </button>
                    <button
                    onClick={onClose}
                      type="close"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                     Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
