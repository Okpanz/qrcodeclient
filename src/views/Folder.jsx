import React, { useState } from 'react';
import { MdDelete, MdEdit, MdFolder } from 'react-icons/md';
import { MdCreateNewFolder } from "react-icons/md";
import Modal from "../components/Modal.jsx";

const Folder = () => {
  const [folders, setFolders] = useState([
    { id: 1, name: 'Folder 1', qrcodes: ['QRCode 1', 'QRCode 2'] },
    { id: 2, name: 'Folder 2', qrcodes: ['QRCode 3', 'QRCode 4'] },
  ]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const handleFolderClick = (folderId) => {
    setSelectedFolder(folderId);
    setShowModal(true);
  };

  return (
    <div className='h-screen bg-slate-300  flex flex-col gap-2 justify-center items-center'>
      <button onClick={() => setShowModal1(true)}
      className="absolute right-0 top-0 m-10 p-3 rounded-sm bg-blue-300 flex items-center gap-2 text-whiet">Create Folder <MdCreateNewFolder />  </button>
      <h1 className='font-bold'>Folders</h1>
      <div className='flex h-[70vh] gap-4'>
        <div className='w-[60rem] bg-white rounded-sm border border-gray-300'>
          <div className='p-4'>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Folder Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {folders.map((folder) => (
                  <tr key={folder.id} onClick={() => handleFolderClick(folder.id)} className={selectedFolder === folder.id ? 'bg-gray-100 cursor-pointer' : 'cursor-pointer'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MdFolder className="h-6 w-6 text-gray-400" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{folder.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex justify-center text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900"><MdEdit /> </button>
                      <button className="text-red-600 hover:text-red-900 ml-2"><MdDelete /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showModal1 &&
      <Modal 
      title="Create Folder"
      action = "Create Folder"
      onClose={() => setShowModal1(false)}/>

    }
      {/* Modal for displaying QR codes */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md shadow-lg transition-opacity duration-300">
            <h2 className="font-bold text-lg mb-4">QR Codes in Selected Folder</h2>
            <ul>
              {folders.find((folder) => folder.id === selectedFolder)?.qrcodes.map((qrcode, index) => (
                <li key={index}>{qrcode}</li>
              ))}
            </ul>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Folder;
