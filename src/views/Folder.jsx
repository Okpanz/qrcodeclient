import React, { useState, useEffect } from 'react';
import { MdDelete, MdEdit, MdFolder, MdClose } from 'react-icons/md';
import { MdCreateNewFolder } from 'react-icons/md';
import FolderModal from '../components/FolderModal.jsx';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Folder = () => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFolders();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); 
  };

  const fetchFolders = () => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem('user')).token;
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  
    axios
      .get('https://server-master-ullz.onrender.com/folder', { headers })
      .then((response) => {
        setFolders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching folder information:', error);
        setLoading(false);
        toast.error('Failed to fetch folders');
      });
  };
  
  const handleFolderClick = (folderId) => {
    setSelectedFolder(folderId);
    setShowModal(true);
  };

  const handleEditFolder = () => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem('user')).token;
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    axios
      .put(`https://server-master-ullz.onrender.com/folder/update/${selectedFolder}`, { name: newFolderName }, { headers })
      .then((response) => {
        fetchFolders(); // Fetch folders again after updating
        setShowModal(false);
        setNewFolderName(''); // Reset the new folder name state
        setLoading(false);
        toast.success('Folder updated successfully');
      })
      .catch((error) => {
        console.error('Error updating folder:', error);
        setLoading(false);
        toast.error('Failed to update folder');
      });
  };

  const handleDeleteFolder = (folderId) => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem('user')).token;
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    axios
      .delete(`https://server-master-ullz.onrender.com/folder/delete/${folderId}`, { headers })
      .then((response) => {
        fetchFolders(); // Fetch folders again after deletion
        setLoading(false);
        toast.success('Folder deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting folder:', error);
        setLoading(false);
        toast.error('Failed to delete folder');
      });
  };

  const handleCreateFolder = () => {
    setShowModal1(true);
  };

  return (
    <div className='h-screen bg-slate-300 flex flex-col gap-2 justify-center items-center'>
      <ToastContainer />
      {loading && <div className="fixed top-0 left-0 right-0 bottom-0 text-white bg-black flex justify-center items-center opacity-50 z-50">Loading....</div>}
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
                      <button className='text-red-600 hover:text-red-900 ml-2' onClick={() => handleDeleteFolder(folder._id)}>
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

      {showModal && selectedFolder && (
        <div className='fixed inset-0 flex items-center justify-center bg-black  bg-opacity-50 z-50 overflow-y-scroll'>
          <div className='bg-white p-8 h-[60vh] overflow-y-scroll rounded-md shadow-lg transition-opacity duration-300'>
            <h2 className='font-bold text-lg mb-4'>Edit Folder</h2>
            <input
              type='text'
              placeholder='New Folder Name'
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              className='w-full border border-gray-300 p-2 rounded-md mb-4'
            />
            <button onClick={handleEditFolder} className='bg-blue-500 text-white px-4 py-2 rounded-md'>
             {loading? 'Updating...' : 'Update Folder'}
            </button>
            <button 
              onClick={() => setShowModal(false)} 
              className="absolute top-[26rem] left-[52rem] text-2xl m-5"
            >
              <MdClose className="text-white bg-red-500 rounded-md 2"/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Folder;
