import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BsQrCode } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import html2canvas from 'html2canvas';
import { MdDelete, MdDownload, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const MyQrCode = ({
  onSelect,
  onSort,
  onFilter
}) => {
  const [vehicleInfo, setVehicleInfo] = useState([]);
  const [editModal, setEditModal] = useState({ open: false, id: null }); // Modify editModal state
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [filterBy, setFilterBy] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [qrName, setQrName] = useState(""); // State for qrName input
  const [deleting, setDeleting] = useState(false); // Flag to indicate delete operation in progress

  useEffect(() => {
    fetchVehicleInfo();
  }, []);

  useEffect(() => {
    console.log(vehicleInfo);
  }, [vehicleInfo]);

  useEffect(() => {
    if (selectedItemId && !deleting) {
      const qrCodeSection = document.getElementById(`qr-code-${selectedItemId}`);
      if (qrCodeSection) {
        html2canvas(qrCodeSection).then(canvas => {
          const link = document.createElement('a');
          link.download = 'qrcode.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        });
      } else {
        console.error(`QR code section with ID 'qr-code-${selectedItemId}' not found.`);
      }
    }
  }, [selectedItemId, deleting]);

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
      const sortedVehicleInfo = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setVehicleInfo(sortedVehicleInfo);
    })
    .catch(error => {
      console.error('Error fetching vehicle information:', error);
    });
  };

  const downloadQRCode = (qrCodeId) => {
    if (!deleting) { // Check if delete operation is not in progress
      const qrCodeSection = document.getElementById(`qr-code-${qrCodeId}`);
      html2canvas(qrCodeSection).then(canvas => {
        const link = document.createElement('a');
        link.download = 'qrcode.png'; 
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };
  
  const handleCheckboxChange = (event, itemId) => {
    console.log("Checkbox with ID", itemId, "was clicked");
    localStorage.setItem('qrcodeId',itemId )
    onSelect(itemId);
  };

  const handleDeleteButtonClick = (itemId) => {
    setSelectedItemId(itemId);
    setDeleting(true); // Set deleting flag to true
    deleteItem(itemId);
  };

  const handleEditButtonClick = (itemId) => {
    setEditModal({ open: true, id: itemId }); // Set editModal state with ID
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleQrNameChange = (event) => {
    setQrName(event.target.value);
  };

  const deleteItem = (itemId) => {
    const token = JSON.parse(localStorage.getItem('user')).token;
    
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    axios.delete(`https://server-master-ullz.onrender.com/vehicle/${itemId}`, {
      headers: headers
    })
    .then(response => {
      console.log('Item deleted successfully:', response.data);
      setSelectedItemId(null);
      setDeleting(false); // Reset deleting flag
      fetchVehicleInfo();
    })
    .catch(error => {
      console.error('Error deleting item:', error);
    });
  };

  const filteredVehicleInfo = vehicleInfo.filter((item) =>
    item.vehicle?.vehicleName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle editing qrName
  const handleEditQrName = () => {
    const token = JSON.parse(localStorage.getItem('user')).token;
    
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    axios.patch(`https://server-master-ullz.onrender.com/vehicle/${editModal.id}`, { qrName: qrName }, {
      headers: headers
    })
    .then(response => {
      console.log('QR Name updated successfully:', response.data);
      // Close the modal after successful update
      setEditModal({ open: false, id: null });
      // Refetch vehicle info to reflect changes
      fetchVehicleInfo();
    })
    .catch(error => {
      console.error('Error updating QR Name:', error);
    });
  };

  return (
    <section className="qr-border qr-rounded p-4 overflow-y-scroll">
     <div className="relative w-fit flex items-center">
  <input
    type="text"
    placeholder="Search by Vehicle Name..."
    value={searchQuery}
    onChange={handleSearchQueryChange}
    className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-64"
  />
  <MdSearch className="absolute right-3 top-[40%] text-2xl transform -translate-y-1/2 text-gray-400" />
</div>
      <div className="flex flex-col gap-4">
        {filteredVehicleInfo.map((item, index) => (
          <div key={index} className="qr-card-container">
            <div className="flex flex-col gap-2 p-5">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  onChange={(event) => handleCheckboxChange(event, item._id)}
                />
                <label>{item?.qrName} </label>
                <button onClick={() => handleDeleteButtonClick(item._id)}> 
                  <MdDelete />
                </button>
                <button onClick={() => downloadQRCode(item._id)}>
                  <MdDownload />
                </button>
                <HiOutlinePencil
                  onClick={() => handleEditButtonClick(item._id)} 
                  color="#a480ae"
                  size={20}
                  className="cursor-pointer hover:scale-1"
                />
                <Link to={`/dash/stats/${item._id}`} className="text-blue-500">
                  View Stats
                </Link>
              </div>
              <div className="bg-white" id={`qr-code-${item._id}`}>

              <div className="flex gap-8 justify-center w-full flex-row-reverse mr-auto items-center shadow-md p-10 bg-white rounded-md" >
                <div className="flex flex-row-reverse items-center gap-4 relative font-bold bg-white ml-auto">
                  <img src={item.qrCodeImage} alt="QR Code" width={120} />
                  <div className="absolute top-0 left-20 transform -translate-x-1/2 w-full -mt-5 ">
                    SCAN ME
                  </div>
                  <div className="absolute -bottom-3 left-20 transform -translate-x-1/2 w-full -mt-3">
                    SAVE ME
                  </div>
                  <div className="absolute left-24 top-[4rem] transform rotate-90 w-full -ml-6">
                    SHARE ME
                  </div>
                </div>
                <div className="text-center font-bold ml-auto">
                  <p> Sale Price: ${item.vehicle?.vehiclePrice}</p>
                  <p> Doc Fee: {item.vehicle?.docFee}</p>
                  <p>  {item.vehicle?.vehicleName}</p>
                  {item.vehicle.DealerName&&
                  <p> Dealer's Name: {item.vehicle?.DealerName}</p>
                  }
                  {item.vehicle?.vehicleURL && (
  <a href={item.vehicle.vehicleURL.startsWith("http") ? item.vehicle.vehicleURL : `http://${item.vehicle.vehicleURL}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">Vehicle URL</a>
)}

                  <div className="flex mt-10">
                    <p className="font-normal relative left-20 -bottom-8">
                      Stock #: {item.vehicle?.stockNo}.
                    </p>
                    <p className="font-normal relative -bottom-8 left-44">
                      VIN: {item.vehicle?.VIN}.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {editModal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
        <div className="modal-content bg-white w-80 rounded-md shadow-lg p-5">
          <span className="close absolute top-2 right-2 cursor-pointer" onClick={() => setEditModal({ open: false, id: null })}>&times;</span>
          <h2 className="text-xl font-bold mb-4">Edit QR Name</h2>
          <input
            type="text"
            value={qrName}
            onChange={handleQrNameChange}
            placeholder="Enter new QR Name"
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
          <button onClick={handleEditQrName} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update QR Name</button>
        </div>
      </div>
      
      )}
    </section>
  );
};

export default MyQrCode;