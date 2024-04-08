import React, { useState, useEffect } from "react";
import { MdDelete, MdOutlineContentCopy, MdCreateNewFolder, MdFolder } from "react-icons/md";
import { BsFolderSymlink } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import Modal from "../components/Modal.jsx";
import axios from 'axios';
import FolderModal1 from '../components/FolderModal1.jsx';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyQrCode from './../components/MYQrCode';


const QRCodePage = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [folders, setFolders] = useState([]);
  const [qrCodeId, setQrCodeId] = useState(null); // State to store the selected QR code ID
  const [sortBy, setSortBy] = useState(null); // State to store the selected sorting criteria
  const [filterBy, setFilterBy] = useState(null); // State to store the selected filtering criteria

  useEffect(() => {
    fetchFolders(); // Fetch folders on component mount
  }, []);

  const fetchFolders = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('user')).token;
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
      const response = await axios.get('https://server-master-ullz.onrender.com/folder', { headers });
      setFolders(response.data);
      toast.success('Folder data fetched successfully');
      // If there are folders fetched and qrCodeId is null, set qrCodeId to the first item's ID
      if (response.data.length > 0 && !qrCodeId) {
        setQrCodeId(response.data[0]._id);
      }
    } catch (error) {
      console.error('Error fetching folders:', error);
      toast.error('Failed to fetch folder data');
    }
  };

  const handleFolderIconClick = () => {
    fetchFolders();
    setShowFolderModal(true);
  };

  const handleDeleteQRCode = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('user')).token;
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
      await axios.delete(`https://server-master-ullz.onrender.com/vehicle/${qrCodeId}`);
      toast.success('QR code deleted successfully');
      window.location.reload()
    } catch (error) {
      console.error('Error deleting QR code:', error);
      toast.error('Failed to delete QR code');
    }
  };

  const handleChecked = (event) => {
    setSelectAll(event.target.checked);
    localStorage.setItem('qrid', event.target.checked);
  };

  const handleQrCodeSelection = (id) => {
    setQrCodeId(id);
  };

  // Function to handle sorting
  const handleSortBy = (criteria) => {
    setSortBy(criteria);
  };

  // Function to handle filtering
  const handleFilterBy = (criteria) => {
    setFilterBy(criteria);
  };

  return (
    <div className="h-screen bg-slate-300 w-screen flex flex-col gap-2 justify-center items-center">
      <button onClick={() => setShowCreateModal(true)} className="absolute right-0 top-0 m-10 p-3 rounded-sm bg-blue-300 flex items-center gap-2 text-blue-800">
        Create QR Code <MdCreateNewFolder />
      </button>

      <div className="flex h-[90vh] w">
        <div className="w-[60vw] bg-white rounded-sm border border-gray-300 p-10 flex flex-col gap-6 overflow-hidden">
          <div className="flex  flex-row gap-8">
            <div className="px-5 py-4 gap-5 flex text-gray-400 items-center justify-between qr-border qr-rounded w-full">
              
              <MdOutlineContentCopy className="hover:text-black cursor-pointer transition-all ease-in-out duration-200" />
              <MdDelete onClick={handleDeleteQRCode} className="hover:text-black cursor-pointer transition-all ease-in-out duration-200" />
              <BsFolderSymlink onClick={handleFolderIconClick} className="hover:text-black cursor-pointer transition-all ease-in-out duration-200" />
              <div className="text-gray-400 ml-auto">
              <BsFolderSymlink onClick={handleFolderIconClick} className="hover:text-black cursor-pointer transition-all ease-in-out duration-200" />
              

              </div>
            </div>
        
          </div>
          
          <MyQrCode onSelect={handleQrCodeSelection} onSort={handleSortBy} onFilter={handleFilterBy} qrCodeId={qrCodeId} />
        </div>
      </div>

      {showCreateModal && <Modal endpoint="vehicle/generate" axiosPost={axios.post} title='Upload Vehicle information' onClose={() => setShowCreateModal(false)} />}
      {showFolderModal && <FolderModal1 onClose={() => setShowFolderModal(false)} />}
      <ToastContainer />
    </div>
  );
};

export default QRCodePage;
