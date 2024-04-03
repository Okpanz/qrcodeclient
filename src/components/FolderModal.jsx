import React, { useState } from 'react';
import axios from 'axios';

const FolderModal = ({ title, onClose }) => {
  const [folder, setFolder] = useState({
    name: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFolder({
      ...folder,
      [name]: value
    });
  };

  const update = () => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem('user')).token;
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    axios.post('https://server-master-ullz.onrender.com/folder/add-folder', folder, { headers })
      .then(response => {
        console.log('Folder created successfully:', response.data);
        setLoading(false);
        setMessage(response?.data?.message);
      })
      .catch(error => {
        setLoading(false);
        console.error('Error creating folder:', error);
        setMessage(error?.response?.data?.message || 'An error occurred while creating the folder.');
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-[50vw] transition-opacity duration-300">
        <h2 className="font-bold text-lg mb-4">{title}</h2>
        {message && (
          <div>
            <p>{message.message}</p>
            <p>{message.name}</p>
            <p>{message.code}</p>
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="folderName" className="block text-sm font-medium text-gray-700">Folder Name</label>
          <input
            type="text"
            id="folderName"
            name="name"
            value={folder.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter folder name"
          />
        </div>

        <div className='flex justify-between'>
          <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600' onClick={update}>{loading ? 'Creating' : 'Create'}</button>
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

export default FolderModal;
