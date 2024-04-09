import React, { useState, useEffect } from "react";
import axios from 'axios';
import { MdDelete, MdDownload, MdOutlineQrCodeScanner, MdSearch, MdPrint } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import DownloadFormatModal from "./DownloadFormatModal";
import domToImage from 'dom-to-image-more';
import { HiOutlinePencil } from "react-icons/hi";
import html2canvas from "html2canvas";

const MyQrCode = () => {
  const [vehicleInfo, setVehicleInfo] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [filterBy, setFilterBy] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [qrName, setQrName] = useState(""); 
  const [deleting, setDeleting] = useState(false); 
  const [showFormatModal, setShowFormatModal] = useState(false); 
  const [selectedFormat, setSelectedFormat] = useState(null); 
  const [showCreateModal, setShowCreateModal] = useState({ open: false, id: null });
  const [editModal, setEditModal] = useState({ open: false, id: null });


  useEffect(() => {
    fetchVehicleInfo();
  }, []);

  useEffect(() => {
    console.log(vehicleInfo);
  }, [vehicleInfo]);

  const fetchVehicleInfo = () => {
    const token = JSON.parse(localStorage.getItem('user')).token;
    
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    // Construct query parameters for sorting and filtering
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
    })
    .catch(error => {
      console.error('Error fetching vehicle information:', error);
    });
  };

  // Function to handle selecting a format for download
  const handleFormatSelect = (format) => {
    setSelectedFormat(format); 
    if (selectedItemId && !deleting) {
      if (format === "PNG" || "SVG" || "JPEG") {
        // convertToSVG(selectedItemId);
        downloadInFormat(selectedItemId, format)
      } else {
        setShowFormatModal(true); 
      }
    }
  };


  const downloadInFormat = (qrCodeId, format) => {
    if (!deleting) {
      const qrCodeSection = document.getElementById(`qr-code-${qrCodeId}`);
      qrCodeSection.style.background = 'white'; // Set background color to white
      qrCodeSection.style.color = 'black'; // Set text color to black
  
      // Remove any existing styles
      qrCodeSection.style.border = 'none'; 
      qrCodeSection.style.boxShadow = 'none'; // Remove box shadow, if any
      qrCodeSection.style.outline = 'none'; // Remove outline, if any
        
      if (format === "PNG" || format === "JPEG") {
        html2canvas(qrCodeSection).then(canvas => {
          const link = document.createElement('a');
          link.download = `qrcode.${format.toLowerCase()}`;
          link.href = format === "PNG" ? canvas.toDataURL('image/png') : canvas.toDataURL('image/jpeg');
          link.click();
        });
      } else if (format === "SVG") {
        // Convert QR code section to SVG format
        domToImage.toSvg(qrCodeSection)
          .then(function (dataUrl) {
            // Convert SVG data URL to Blob
            const svgBlob = new Blob([dataUrl], { type: 'image/svg+xml' });
  
            // Create download link
            const link = document.createElement('a');
            link.download = 'qrcode.svg';
  
            // Set href to URL object representing the Blob
            link.href = URL.createObjectURL(svgBlob);
  
            // Click the link to initiate download
            link.click();
          })
          .catch(function (error) {
            console.error('Error converting HTML to SVG:', error);
          });
      } else {
        console.error(`Unsupported format: ${format}`);
      }
    }
  };
  
  

  // Function to handle selecting a QR code for download
  const downloadQRCode = (qrCodeId) => {
    setSelectedItemId(qrCodeId); 
    setShowFormatModal(true); 
  };

  // Function to handle changing the search query
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle changing the QR name
  const handleQrNameChange = (event) => {
    setQrName(event.target.value);
  };

  const handleEditQr = (id) => {
    console.log("Edit QR clicked with id:", id);
    setShowCreateModal({ open: true, id: id });
  };
  
  // Function to handle deleting a QR code item
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
      setDeleting(false); 
      fetchVehicleInfo();
    })
    .catch(error => {
      console.error('Error deleting item:', error);
    });
  };
  const handleDeleteButtonClick = (itemId) => {
    setSelectedItemId(itemId);
    setDeleting(true); // Set deleting flag to true
    deleteItem(itemId);
  };
  const handleEditButtonClick = (itemId) => {
    setSelectedItemId(itemId);
    setEditModal({open:true, id:itemId});
  }
  const handleClose = () => {
    setEditModal({open:false, id:null})
  }
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
      setEditModal({ open: false, id: null });
      fetchVehicleInfo();
    })
    .catch(error => {
      console.error('Error updating QR Name:', error);
    });
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
  };

  const handleSortByDateCreated = () => {
    handleSort('dateCreated');
  };

  const handleSortByDateModified = () => {
    handleSort('dateModified');
  };

  const handleSortByDealerName = () => {
    handleSort('dealerName');
  };

  // Filtered vehicle information based on search query
  const filteredVehicleInfo = vehicleInfo.filter((item) =>
    item.vehicle?.vehicleName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="qr-border qr-rounded p-4 overflow-y-scroll">
     <div className=" w-fit flex items-center">
      <input
        type="text"
        placeholder="Search by Vehicle Name..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-64"
      />
    <div className="flex justify-end text-xs items-center ">
      <p className="text-blue-900 mx-2">Sort by: </p>
    <button onClick={handleSortByDateCreated} className="mr-2"> Date Created</button>
        <button onClick={handleSortByDateModified} className="mr-2"> Date Modified</button>
        <button onClick={handleSortByDealerName}> Dealer Name</button>
    </div>
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
                <button onClick={() => printQRCode(item._id)}>
                  <MdPrint />
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
                <button className="flex items-center text-blue-500" onClick={() => handleEditQr(item._id)}>
                  <MdOutlineQrCodeScanner /><span className="text-xs">edit qr</span>
                </button>
              </div>
              
              <div className="" id={`qr-code-${item._id}`}>
  <div className="flex gap-8 justify-center w-full flex-row-reverse mr-auto items-center shadow-md p-10 bg-white rounded-md">
    <div className="flex flex-row-reverse items-center gap-4 relative font-bold bg-red-600 ml-auto z-50">
      {item?.qrCodeImage && (
        <img src={item.qrCodeImage} alt="QR Code" width={120} />
      )}
      <div className="absolute top-0 left-20 transform -translate-x-1/2 w-full -mt-5">
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
      <p>Sale Price: ${item.vehicle?.vehiclePrice}</p>
      <p>Doc Fee: {item.vehicle?.docFee}</p>
      <p>{item.vehicle?.vehicleName}</p>
      {item.vehicle.DealerName && (
        <p>Dealer's Name: {item.vehicle?.DealerName}</p>
      )}
      {item.vehicle?.vehicleURL && (
        <a
          href={
            item.vehicle.vehicleURL.startsWith("http")
              ? item.vehicle.vehicleURL
              : `http://${item.vehicle.vehicleURL}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          Vehicle URL 
        </a>
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
      {showCreateModal.open && (
  <Modal
    onClose={() => setShowCreateModal(false)}
    endpoint={`vehicle/${showCreateModal.id}`}
    axiosPost={axios.patch}
  />
)}

      {showFormatModal && (
        <DownloadFormatModal onClose={() => setShowFormatModal(false)} onSelectFormat={handleFormatSelect} />
      )}
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
          <div className="flex justify-between">

          <button onClick={handleEditQrName} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update QR Name</button>
          <button onClick={() => handleClose()} className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-600">Close</button>
          </div>
        </div>
      </div>
      
      )}
    </section>
  );
};

export default MyQrCode;
