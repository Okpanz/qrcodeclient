import React from 'react';

const Modal = ({ title, onClose,update,action }) => {
  // State for input values
  const [vehicleDetails, setVehicleDetails] = React.useState({
    plateNumber: '',
    ownerName: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleColor: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleDetails({
      ...vehicleDetails,
      [name]: value
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-[50vw] transition-opacity duration-300">
        <h2 className="font-bold text-lg mb-4">{title}</h2>
        
        <div className="mb-4">
          <label htmlFor="plateNumber" className="block text-sm font-medium text-gray-700">Plate Number</label>
          <input
            type="text"
            id="plateNumber"
            name="plateNumber"
            value={vehicleDetails.plateNumber}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter plate number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Name</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={vehicleDetails.ownerName}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter owner's name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700">Vehicle Make</label>
          <input
            type="text"
            id="vehicleMake"
            name="vehicleMake"
            value={vehicleDetails.vehicleMake}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter vehicle make"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700">Vehicle Model</label>
          <input
            type="text"
            id="vehicleModel"
            name="vehicleModel"
            value={vehicleDetails.vehicleModel}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter vehicle model"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicleColor" className="block text-sm font-medium text-gray-700">Vehicle Color</label>
          <input
            type="text"
            id="vehicleColor"
            name="vehicleColor"
            value={vehicleDetails.vehicleColor}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter vehicle color"
          />
        </div>
        <div className='flex justify-between'>
  <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600' onClick={update}>{action}</button>
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
