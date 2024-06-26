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
  const [filterBy, setFilterBy] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropDown, setDropDown] = useState(false)
  const [vehicleInfo, setVehicleInfo] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [searchedVehicleInfo, setSearchedVehicleInfo] = useState([])
  const [activeSort, setActiveSort] = useState(null);
  useEffect(() => {
    fetchFolders();
    fetchVehicleInfo()

  }, []);


  const fetchVehicleInfo = () => {
    const token = JSON.parse(localStorage.getItem('user')).token;
    
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    const queryParams = {
      sortBy: sortBy,
      filterBy: filterBy,
    };

    axios.get('https://server-master-ullz.onrender.com/vehicle', {
      headers: headers,
      params: queryParams
    })
    .then(response => {
      const sortedVehicleInfo = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setVehicleInfo(sortedVehicleInfo);
      console.log(sortedVehicleInfo);
    })
    .catch(error => {
      console.error('Error fetching vehicle information:', error);
    });
  };
  useEffect(() => {
    // Fetch vehicle info or update filtered data when searchQuery changes
    if (searchQuery.trim() === "") {
      // If search query is empty, set filtered data to original data
      setSearchedVehicleInfo(vehicleInfo);
    } else {
      // If search query is not empty, filter data based on search query
      const filteredData = vehicleInfo.filter(item =>
        item.vehicle?.vehicleName.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
      setSearchedVehicleInfo(filteredData);
    }
  }, [searchQuery, vehicleInfo]);

  // Function to handle changing the search query
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
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

  const handleSort = (criterion) => {
    let sortedInfo = [...vehicleInfo];
    switch (criterion) {
      case "dateCreated":
        sortedInfo.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "dateModified":
        sortedInfo.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        break;
      case "dealerName":
        sortedInfo.sort((a, b) => a.vehicle?.DealerName.localeCompare(b.vehicle?.DealerName));
        break;
      default:
        break;
    }
    setVehicleInfo(sortedInfo);
    setSortBy(criterion);
    setActiveSort(criterion);
  };

  const handleSortByDateCreated = () => {
    handleSort('dateCreated');
    setDropDown(!dropDown)
  };

  const handleSortByDateModified = () => {
    handleSort('dateModified');
    setDropDown(!dropDown)

  };

  const handleSortByDealerName = () => {
    handleSort('dealerName');
    setDropDown(!dropDown)

  };
  const filteredVehicleInfo = vehicleInfo.filter((item) =>
    item.vehicle?.vehicleName.toLowerCase().includes(searchQuery.toLowerCase())
  );


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
      <button onClick={() => setShowCreateModal(true)} className="hidden absolute right-0 top-0 m-10 p-3 rounded-sm bg-blue-300 md:flex items-center gap-2 text-blue-800">
        Create QR Code <MdCreateNewFolder />
      </button>
      <button onClick={() => setShowCreateModal(true)} className="md:hidden absolute right-0 top-0 m-5 p-3 rounded-lg bg-blue-300 text-3xl items-center gap-2 text-blue-800">
       <MdCreateNewFolder />
      </button>

      <div className="flex h-[90vh] w">
        <div className="md:w-[60vw] bg-white rounded-sm border border-gray-300 p-10 flex flex-col gap-6 overflow-hidden">
          <div className="flex  flex-row gap-8">
            <div className="px-5 py-4 gap-5 flex text-gray-400 items-center justify-between qr-border qr-rounded w-full">
              
              <MdOutlineContentCopy className="hover:text-black cursor-pointer transition-all ease-in-out duration-200" />
              <MdDelete onClick={handleDeleteQRCode} className="hover:text-black cursor-pointer transition-all ease-in-out duration-200" />
              <BsFolderSymlink onClick={handleFolderIconClick} className="hover:text-black cursor-pointer transition-all ease-in-out duration-200" />
              <div className="text-gray-400 ml-auto flex flex-col items-center relative right-10">
              <MdFilterAlt onClick={() => handleToggle()} className={dropDown ? 'text-blue-700 hover:text-black cursor-pointer transition-all ease-in-out duration-200 ' : 'transition-all ease-in-out duration-300 cursor-pointer'}
 />
                 {dropDown &&
                  <div className={dropDown ?'absolute z-30 top-6 bg-white border border-gray-600 w-36 text-black transition-all ease-in-out duration-300 p-1': 'transition-all ease-in-out duration-300 '}>
                   <p className={`text-xs cursor-pointer ${activeSort === 'dealerName' ? 'font-bold' : ''}`} onClick={() => handleSortByDealerName()}>sort by Dealer Name</p>
                    <p className={`text-xs cursor-pointer ${activeSort === 'dateCreated' ? 'font-bold' : ''}`} onClick={handleSortByDateCreated}>sort by Date Created</p>
                    <p className={`text-xs cursor-pointer ${activeSort === 'dateModified' ? 'font-bold' : ''}`} onClick={handleSortByDateModified}>sort by Date Modified</p>
                  </div> 
                  }
              </div>
            </div>
        
          </div>
          
          <MyQrCode onSelect={handleQrCodeSelection}  qrCodeId={qrCodeId} 
          filteredVehicleInfo={filteredVehicleInfo}
          handleSearchQueryChange={handleSearchQueryChange}
          />
        </div>
      </div>

      {showCreateModal && <Modal endpoint="vehicle/generate" axiosPost={axios.post} title='Upload Vehicle information' onClose={() => setShowCreateModal(false)} />}
      {showFolderModal && <FolderModal1 onClose={() => setShowFolderModal(false)} />}
      <ToastContainer />
    </div>
  );
};

export default QRCodePage;
