  import React, { useState, useEffect } from "react";
  import axios from 'axios';
  import { BsQrCode } from "react-icons/bs";
  import Modal from "../components/Modal.jsx";
  import { HiOutlinePencil, HiOutlineFolder } from "react-icons/hi";

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
                <HiOutlinePencil
                  onClick={() => setEditModal(true)}
                  color="#a480ae"
                  size={20}
                  className="cursor-pointer hover:scale-1"
                />
              </div>
              <div className="flex gap-8 items-center">
              <div className="flex items-center gap-4 relative font-bold">
                <img src={item.qrCodeImage} alt="QR Code" width={120} />
                {/* Text appearing around the QR code */}
                <div className="absolute top-0 left-14 transform -translate-x-1/2 -mt-4">SCAN ME</div>
                <div className="absolute -bottom-5 left-14 transform -translate-x-1/2 mt-4">SAVE ME</div>
                <div className="absolute left-24 top-11 transform rotate-90 -ml-4">SHARE ME</div>
              </div>
              {/* Display vehicle information */}
              <div>
                <p>Vehicle Idetification No: {item.vehicle?.VIN}</p>
                <p>Vehicle Name: {item.vehicle?.vehicleName}</p>
                <p>Vehicle Price: {item.vehicle?.vehiclePrice}</p>
                <p>Vehicle URL: {item.vehicle?.vehicleURL}</p>
                <p>Stock No: {item.vehicle?.stockNo}</p>
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
