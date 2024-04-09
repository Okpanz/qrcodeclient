import React, { useState, useEffect } from "react";
import { MdDelete, MdOutlineContentCopy, MdCreateNewFolder, MdFolder, MdFilterAlt } from "react-icons/md";
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
  const [qrCodeId, setQrCodeId] = useState(null);
  const [dropDown, setDropDown] = useState(true)

  useEffect(() => {
    fetchFolders();
  }, []);


  const fetchVehicleInfo = () => {
    // Fetch vehicle information from API
    axios.get('https://server-master-ullz.onrender.com/vehicle')
      .then(response => {
        // Set vehicle information in state
        setVehicleInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching vehicle information:', error);
      });
  };


  const fetchFolders = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('user')).token;
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
      const response = await axios.get('https://server-master-ullz.onrender.com/folder', { headers });
      setFolders(response.data);
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
  const handleToggle = () => {
    setDropDown(prevState => !prevState)
  }
  const handleChecked = (event) => {
    setSelectAll(event.target.checked);
    localStorage.setItem('qrid', event.target.checked);
  };

  const handleQrCodeSelection = (id) => {
    setQrCodeId(id);
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
              <div className="text-gray-400 ml-auto flex flex-col items-center relative right-10">
              <MdFilterAlt onClick={() => handleToggle()} className={dropDown ? 'text-blue-700 hover:text-black cursor-pointer transition-all ease-in-out duration-200 ' : 'transition-all ease-in-out duration-300 cursor-pointer'}
 />
                 {dropDown &&
                  <div className={dropDown ?'absolute top-6 bg-white border border-gray-600 w-36 text-black transition-all ease-in-out duration-300 p-1': 'transition-all ease-in-out duration-300'}>
                    <p className="text-xs cursor-pointer hover:text-blue-600 text-gray-500" >sort by Dealer Name</p>
                    <p className="text-xs cursor-pointer hover:text-blue-600 text-gray-500">sort by Date Created</p>
                    <p className="text-xs cursor-pointer hover:text-blue-600 text-gray-500">sort by Date Modified</p>
                  </div> 
                  }
              </div>
            </div>
        
          </div>
          
          <MyQrCode onSelect={handleQrCodeSelection}  qrCodeId={qrCodeId} 
          />
        </div>
      </div>

      {showCreateModal && <Modal endpoint="generate" axiosPost={axios.post} title='Upload Vehicle information' onClose={() => setShowCreateModal(false)} />}
      {showFolderModal && <FolderModal1 onClose={() => setShowFolderModal(false)} />}
      <ToastContainer />
    </div>
  );
};

export default QRCodePage;
