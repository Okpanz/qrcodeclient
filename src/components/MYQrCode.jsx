import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BsQrCode } from "react-icons/bs";
import Modal from "../components/Modal.jsx";
import { HiOutlinePencil, HiOutlineFolder } from "react-icons/hi";
import html2canvas from 'html2canvas';
import { MdDownload } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function MyQrCode({
  checkedAll,
  
  qrCode = <BsQrCode size={120} />,
  qrLink = "https://me-qr.com/XIGZJRNF",
  type = "Text",
  created = new Date(),
}) {
  const [vehicleInfo, setVehicleInfo] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    fetchVehicleInfo();
  }, []);

  useEffect(() => {
    // Log vehicleInfo whenever it changes
    console.log(vehicleInfo);
  }, [vehicleInfo]); // Dependency array ensures this effect runs when vehicleInfo changes

  const fetchVehicleInfo = () => {
    const token = JSON.parse(localStorage.getItem('user')).token;
    
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    
    axios.get('https://server-master-ullz.onrender.com/vehicle', {
      headers: headers
    })
    .then(response => {
      setVehicleInfo(response.data);
    })
    .catch(error => {
      console.error('Error fetching vehicle information:', error);
    });
  };

  const fetchFolders = () => {
    const token = JSON.parse(localStorage.getItem('user')).token;
    
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    
    axios.get('https://server-master-ullz.onrender.com/folder', {
      headers: headers
    })
    .then(response => {
      setFolders(response.data);
      console.log(response.data.map((item) => {
        item
      }))
    })
    .catch(error => {
      console.error('Error fetching folders:', error);
    });
  };

  const handleCheckboxChange = (event, itemId) => {
    console.log("Checkbox with ID", itemId, "was clicked");
    localStorage.setItem('qrcodeId', itemId)
  };

  const handleFolderIconClick = () => {
    fetchFolders();
    console.log(folders)
  };

  const downloadQRCode = (qrCodeId) => {
    const qrCodeSection = document.getElementById(`qr-code-${qrCodeId}`); 
    
    html2canvas(qrCodeSection).then(canvas => {
      const link = document.createElement('a');
      link.download = 'qrcode.png'; // Set the filename for the downloaded image
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return (
    <section className="qr-border qr-rounded p-4 overflow-y-scroll">
      <div className="flex flex-col gap-4">
        {vehicleInfo.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 p-5">
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                onChange={(event) => handleCheckboxChange(event, item._id)}
              />
              <label>QR Code</label>
              <button onClick={() => downloadQRCode(item._id)}><MdDownload /></button>
              <HiOutlinePencil
                onClick={() => setEditModal(true)}
                color="#a480ae"
                size={20}
                className="cursor-pointer hover:scale-1"
              />
              {/* Add a Link to view stats */}
              <Link to={`/dash/stats/${item._id}`} className="text-blue-500">View Stats</Link>
            </div>
            <div className="flex gap-8 justify-center flex-row-reverse mr-auto items-center shadow-md p-10 bg-white rounded-md" id={`qr-code-${item._id}`}>
            <div className="flex flex-row-reverse items-center gap-4 relative font-bold bg-white">
              <img src={item.qrCodeImage} alt="QR Code" width={120} />
              {/* Text appearing around the QR code */}
              <div className="absolute top-0 left-20 transform -translate-x-1/2 w-full -mt-5 ">SCAN ME</div>
              <div className="absolute -bottom-3 left-20 transform -translate-x-1/2 w-full -mt-3">SAVE ME</div>
              <div className="absolute left-24 top-[4rem] transform rotate-90 w-full -ml-6">SHARE ME</div>

            </div>
            {/* Display vehicle information */}
            <div className="text-center font-bold">
              <p> Sale Price: ${item.vehicle?.vehiclePrice}</p>
              {/* <p> {item.vehicle?.VIN}</p> */}
              <p> {item.vehicle?.vehicleName}</p>
              <Link to={item.vehicle?.vehicleURL}>
              <p className="text-blue-600"> Vehicle URL</p>
              </Link>
              <div className="flex ">
              <p className="font-normal relative left-16 -bottom-10">Stock #: {item.vehicle?.stockNo}.</p>
              <p className="font-normal relative -bottom-10 left-36">VIN: {item.vehicle?.VIN}.</p>
              </div>
              {/* You can display other vehicle information similarly */}
            </div>
          
          </div>
            </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <HiOutlineFolder 
          onClick={handleFolderIconClick} 
          color="#a480ae" 
          size={20} 
          className="cursor-pointer hover:scale-1"
        />
        <span>Fetch Folders</span>
      </div>

      {editModal && 
        <Modal 
          title="Edit Vehicle Information"
          action="Update Qr"
          onClose={() => setEditModal(false)}
        />
      }
    </section>
  );
  
}
