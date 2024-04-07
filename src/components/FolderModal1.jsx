import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdFolder } from 'react-icons/md';

const FolderModal1 = ({ action, onClose }) => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {
      setLoading(true);
      const token = JSON.parse(localStorage.getItem('user')).token;
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
      const response = await axios.get('https://server-master-ullz.onrender.com/folder', { headers });
      setFolders(response.data);
    } catch (error) {
      console.error('Error fetching folder information:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFolderClick = async (folderId) => {
    try {
      setSelectedFolder(folderId);
      const selectedFolder = folders.find(folder => folder._id === folderId);
      console.log(selectedFolder)
      const folderName = selectedFolder ? selectedFolder.name : "Unknown";
      localStorage.setItem('folderId', folderId);
      const token = JSON.parse(localStorage.getItem('user')).token;
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
      const folderid = localStorage.getItem('folderId');
      const qrcodeId = localStorage.getItem('qrcodeId');
      await axios.post(`https://server-master-ullz.onrender.com/folder/${folderid}/qrcodes/${qrcodeId}`, { folderName }, { headers });
      console.log('Folder Moved successfully');
      // Close the modal
      onClose();
    } catch (error) {
      console.error('Error moving folder:', error);
    }
  };

  if (loading) {
    return <div className=' inset-0 flex items-center justify-center '>Loading...</div>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-[50vw] transition-opacity duration-300">
        <h2 className="font-bold text-lg mb-4">Folders</h2>
        <ul>
          {folders.map(folder => (
            <li key={folder._id} className="flex items-center text-gray-400 cursor-pointer" onClick={() => handleFolderClick(folder._id)}>
              <MdFolder />
              {folder.name}
            </li>
          ))}
        </ul>
        <button className='p-3 bg-red-600 rounded-md text-white' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FolderModal1;
