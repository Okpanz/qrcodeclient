import React, { useState, useEffect } from 'react';
import { MdDelete, MdEdit, MdFolder } from 'react-icons/md';
import { MdCreateNewFolder } from 'react-icons/md';
import FolderModal from '../components/FolderModal.jsx';
import axios from 'axios';

const Folder = () => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  useEffect(() => {
    fetchFolders();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); 
  };
  const fetchFolders = () => {
    const token = JSON.parse(localStorage.getItem('user')).token;
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  
    axios
      .get('https://server-master-ullz.onrender.com/folder', { headers })
      .then((response) => {
        setFolders(response.data);
        console.log(response.data); // Add this line to log the folders
      })
      .catch((error) => {
        console.error('Error fetching folder information:', error);
      });
  };
  

  const handleFolderClick = (folderId) => {
    setSelectedFolder(folderId);
    setShowModal(true);
  };

  const handleCreateFolder = () => {
    setShowModal1(true);
  };

  return (
    <div className='h-screen bg-slate-300 flex flex-col gap-2 justify-center items-center'>
      <button
        onClick={handleCreateFolder}
        className='absolute right-0 top-0 m-10 p-3 rounded-sm bg-blue-300 flex items-center gap-2 text-blue-800'
      >
        Create Folder <MdCreateNewFolder />
      </button>
      <h1 className='font-bold'>Folders</h1>
      <div className='flex h-[70vh] gap-4'>
        <div className='w-[60rem] bg-white rounded-sm border border-gray-300'>
          <div className='p-4'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Folder Name
                  </th>
                  <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {folders.map((folder) => (
                  <tr
                    key={folder._id}
                    onClick={() => handleFolderClick(folder._id)}
                    className={
                      selectedFolder === folder._id
                        ? 'bg-gray-100 cursor-pointer'
                        : 'cursor-pointer'
                    }
                  >
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <MdFolder className='h-6 w-6 text-gray-400' />
                        <div className='ml-4'>
                          <div className='text-sm font-medium text-gray-900'>
                            {folder.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap flex justify-center text-sm text-gray-500'>
                      <button className='text-blue-600 hover:text-blue-900'>
                        <MdEdit />
                      </button>
                      <button className='text-red-600 hover:text-red-900 ml-2'>
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal1 && <FolderModal title='Create Folder' action='Create Folder' onClose={() => setShowModal1(false)} />}

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-8 rounded-md shadow-lg transition-opacity duration-300'>
            <h2 className='font-bold text-lg mb-4'>QR Codes in Selected Folder</h2>
            <ul>
            {folders.map(folder => (
        <div key={folder._id}>
          <h2>{folder.name}</h2>
          {folder.qrCodes.map(qrCode => (
            <div key={qrCode._id} className='flex items-center'>
              <img src={qrCode.qrCodeImage} width={60} alt="QR Code" />
              <p>Created At: {formatDate(qrCode.createdAt)}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      ))}

            </ul>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Folder;
