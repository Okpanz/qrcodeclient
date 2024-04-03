import React, { useState } from "react";
import { BsQrCode } from "react-icons/bs";
import Modal from "../components/Modal.jsx";
import { HiOutlinePencil } from "react-icons/hi2";
export default function MyQrCode({
  checkedAll,
  qrCode = <BsQrCode size={120} />,
  qrLink = "https://me-qr.com/XIGZJRNF",
  type = "Text",
  created = new Date(),
}) {
  const handleCheckedAll = (event) => {
    if (checkedAll instanceof Boolean) {
      event.target.checked = checkedAll;
    }
  };
  const [editModal, setEditModal] = useState(false);

  return (
    <section className={"qr-border qr-rounded py-4 px-6"}>
      <div className={"flex flex-col gap-4"}>
        <div className={"flex  gap-2.5 items-center"}>
          <input type="checkbox" />
          <label>QR Code</label>

          <HiOutlinePencil
            onClick={() => setEditModal(true)}
            color={"#a480ae"}
            size={"20"}
            className="cursor-pointer hover:scale-1"
          />
        </div>
        <div className={"flex gap-4"}>
          {qrCode}
          <div>
            <p>{qrLink}</p>
            <span>Type: {type}</span>
          </div>
        </div>
      </div>


      {editModal && 
      <Modal 
      title="Edit Vehicle Information"
      action= "Update Qr"
      onClose={() => setEditModal(false)}
      />
      }
 main

    </section>
  );
}

function parseDate(date) {}
