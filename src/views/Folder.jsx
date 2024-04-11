import React, { useState, useEffect } from 'react';
import { MdDelete, MdEdit, MdFolder, MdClose, MdDownload } from 'react-icons/md';
import { MdCreateNewFolder } from 'react-icons/md';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FolderModal from '../components/FolderModal';
import { HiFolderRemove } from "react-icons/hi";
import html2canvas from 'html2canvas';
import { GridLoader } from 'react-spinners';

const Folder = () => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [loading, setLoading] = useState(false);
  const [qrCodeData, setQRCodeData] = useState(null);
  const [qrCodeName, setQRCodeName] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [vehicleInfo, setVehicleInfo] = useState(null);

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
  
  const downloadQRCode = (qrCodeId) => {
    const qrCodeSection = document.getElementById(`qr-code-${qrCodeId}`);
    const ignoredElements = qrCodeSection.querySelectorAll('.exclude-from-download'); // Select elements with the specified class
    html2canvas(qrCodeSection, {
      ignoreElements: (element) => {
        return element.classList.contains('exclude-from-download'); // Exclude elements with the specified class
      }
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'qrcode.png'; 
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };
  
  const handleFolderClick = async (folderId, folderName) => {
    setSelectedFolder(folderId);
    console.log(selectedFolder)
    localStorage.setItem('selectedFolder', selectedFolder)
    setShowModal(true);

    try {
      const token = JSON.parse(localStorage.getItem('user')).token;
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.get(`https://server-master-ullz.onrender.com/folder/${folderId}`, { 
        headers,
        params: { folderName } 
      });

      if (response && response.data && response.data.qrCodes && Array.isArray(response.data.qrCodes)) {
        const qrCodesArray = [...response.data.qrCodes];
      
        setQRCodeData(qrCodesArray.map((item) => item.vehicleInfo[0])); 
        setVehicleInfo(qrCodesArray.map((item) => item.vehicleInfo[1].qrCodeImage));

      } else {
        console.error("Response or QR codes array is undefined or not an array.");
      }
      
    } catch (error) {
      console.error('Error fetching QR code data:', error);
      toast.error('Failed to fetch QR code data');
    }
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
        fetchFolders(); 
        setNewFolderName(''); 
        setLoading(false);
        toast.success('Folder updated successfully');
        setShowEditModal(false)
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
        fetchFolders(); 
        setLoading(false);
        toast.success('Folder deleted successfully');
        window.location.reload()
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

  const handleRemoveQRFromFolder = ( qrcodeId) => {
    const folderId = localStorage.getItem('selectedFolder')
    setLoading(true);
    const token = JSON.parse(localStorage.getItem('user')).token;
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    axios
        .delete(`https://server-master-ullz.onrender.com/vehicle/folders/${folderId}/qrcodes/${qrcodeId}`, { headers })
        .then((response) => {
            fetchFolders(); // Fetch folders again after removing QR code
            setLoading(false);
            toast.success('QR code removed from folder successfully');
        })
        .catch((error) => {
            console.error('Error removing QR code from folder:', error);
            setLoading(false);
            toast.error('Failed to remove QR code from folder');
        });
};


  return (
    <div className='h-screen  bg-slate-300 flex w-screen  flex-col gap-2 justify-center items-center md:w-screen ' >
      <ToastContainer />
      {loading && 
      <div className="fixed top-0 left-0 right-0 bottom-0 w-[100%] text-white bg-slate-950 flex justify-center items-center opacity-50 z-50">
      <GridLoader color='#fff' />
      </div>
      }
      <button
        onClick={handleCreateFolder}
        className='absolute right-0 top-0 m-10 p-3 rounded-sm bg-blue-300 md:flex hidden items-center gap-2 text-blue-800'
      >
        Create Folder <MdCreateNewFolder />
      </button>
      <button
        onClick={handleCreateFolder}
        className='absolute md:hidden right-0 top-0 m-10 p-3 text-3xl rounded-lg bg-blue-300 flex items-center gap-2 text-blue-800'
      >
         <MdCreateNewFolder />
      </button>
      <h1 className='font-bold'>Folders</h1>
      <div className='flex h-[70vh] gap-4 justify-center'>
        <div className='md:w-[50rem] bg-white rounded-sm border border-gray-300'>
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
                    onClick={() => handleFolderClick(folder._id, folder.name)} 
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
                      <button className='text-blue-600 hover:text-blue-900' onClick={(e) => {
                        e.stopPropagation(); 
                        setShowEditModal(true); 
                      }}>
                        <MdEdit />
                      </button>
                      <button className='text-red-600 hover:text-red-900 ml-2' onClick={() => handleDeleteFolder(selectedFolder, folder._id)}>
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
  <div className='fixed inset-0 flex flex-row md:flex-col items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-scroll'>
    <div className='bg-white p-8 h-[60vh] md:w-[50%] overflow-y-scroll rounded-md shadow-lg transition-opacity duration-300'>
      <h2 className='font-bold text-lg mb-4'>QR Code for Folder: {folders.find(folder => folder._id === selectedFolder)?.name}</h2>
      <div className="grid grid-cols-1 gap-4">
        {loading && <div className='text-black opacity-40 flex justify-center items-center w-full h-full'>
      <GridLoader color='black' />
          
         
          </div>}
        {qrCodeData && qrCodeData.map((qrData, index) => (
          <div key={index} className='border w-full border-gray-200 p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer rounded-md flex md:flex-row flex-col justify-between'  id={`qr-code-${qrData._id}`}>
            <img
  src={vehicleInfo[index]}
  alt={`QR Code for ${vehicleInfo}`}
  className="m mb-2"
  style={{ maxWidth: "150px" }}
/>

            <div className='flex flex-col items-start'>
              <p className='mb-1'><span className='font-bold '>Vehicle Name:</span> {qrData?.vehicleName}</p>
              <p className='mb-1'><span className='font-bold '>VIN:</span> {qrData?.VIN}</p>
              <p className='mb-1'><span className='font-bold '>Stock No:</span> {qrData?.stockNo}</p>
              <p className='mb-1'><span className='font-bold '>Dealer Name:</span> {qrData?.DealerName}</p>
              <p className='mb-1'><span className='font-bold '>Doc Fee:</span> {qrData?.docFee}</p>
            </div>
            
            <div>
            </div>
            <div>
              <h1 className='font-bold uppercase exclude-from-download'>
              Action
              </h1>
              <div className='flex md:justify-center'>
            <button className='cursor-pointer hidden md:block exclude-from-download hover:text-red-500' onClick={() => downloadQRCode(qrData._id)}><MdDownload /></button>
            <button className='cursor-pointer  bg-green-600 text-white p-2 rounded-md md:hidden exclude-from-download hover:text-red-500' onClick={() => downloadQRCode(qrData._id)}>Download</button>
                {/* <p className='cursor-pointer hover:text-red-500 flex items-center ' onClick={() => handleRemoveQRFromFolder(qrData._id)}>
                  <span className='text-sm'>Remove from folder</span> <HiFolderRemove />
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={() => setShowModal(false)} 
        className="absolute top-[22em] md:right-[25rem] right-[9rem] text-white bg-red-500 md:p-3  p-2 rounded-md text-xl"
      >
        <MdClose />
      </button>
    </div>
  </div>
)}

      {showEditModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-scroll'>
          <div className='bg-white p-8 h-[60vh] md:w-[50%] overflow-y-scroll rounded-md shadow-lg transition-opacity duration-300'>
            <h2 className='font-bold text-lg mb-4'>Edit Folder: {selectedFolder}</h2>
            <input
              type='text'
              placeholder='New Folder Name'
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              className='w-full border border-gray-300 p-2 rounded-md mb-4'
            />
            <button 
              onClick={handleEditFolder} 
              className='bg-blue-500 text-white px-4 py-2 rounded-md'
            >
              {loading ? 'Updating...' : 'Update Folder'}
            </button>
            <button 
              onClick={() => setShowEditModal(false)} 
              className="absolute top-[22em] right-[25rem] text-white bg-red-500 p-3 rounded-md text-xl"
            >
              <MdClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Folder;
