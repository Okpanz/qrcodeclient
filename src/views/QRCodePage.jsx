
import React, {useState} from "react";
import { MdDelete, MdOutlineContentCopy,MdCreateNewFolder } from "react-icons/md";
import { BsFolderSymlink } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import MyQrCode from "../components/MYQrCode.jsx";
import Modal from "../components/Modal.jsx";

const QRCodePage = () => {
  const [selectAll, setSelectAll] = React.useState(false);
  const [showModal, setShowModal] = useState(false);


  const handleChecked = (event) => {
    setSelectAll(event.target.checked);
  };
  return (
    <div className="h-screen bg-slate-300 w-[80%] flex flex-col gap-2 justify-center items-center">

     <button onClick={() => setShowModal(true)} className="absolute right-0 top-0 m-10 p-3 rounded-sm bg-blue-300 flex items-center gap-2 text-blue-800">
  Create QR Code <MdCreateNewFolder />
</button>


      <div className="flex h-[70vh] w">
        <div className="w-[60vw] bg-white rounded-sm border border-gray-300 p-10 flex flex-col gap-6 overflow-hidden">
          <div className="flex  flex-row gap-8">
            <div className="px-5 py-4 gap-5 flex text-gray-400 items-center justify-between  qr-border qr-rounded w-4/5">
              <div className={"flex gap-2"}>
                <input type="checkbox" value="Select" />
                <h2>Select all</h2>
              </div>
              <MdOutlineContentCopy className="hover:text-black cursor-pointer transition-all ease-in-out duration-200" />
              <MdDelete className="hover:text-black cursor-pointer transition-all ease-in-out duration-200" />
              <BsFolderSymlink className="hover:text-black cursor-pointer transition-all ease-in-out duration-200" />
              <div className="text-gray-400 ml-auto">
                <CiFilter className="hover:text-black cursor-pointer transition-all ease-in-out duration-200" />
              </div>
            </div>
            <input
              onClick={handleChecked}
              type={"search"}
              placeholder={"search here"}
              className={"qr-border outline-none ml-auto qr-rounded px-4"}
            />
          </div>
          <MyQrCode />
        </div>
      </div>
      {showModal && (
  <Modal
    title="Create QR Code"
    action="Create QR"
    onClose={() => setShowModal(false)}
  />
)}

    </div>
  );
};

export default QRCodePage;
