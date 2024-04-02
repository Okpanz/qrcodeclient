import { BsQrCode } from "react-icons/bs";
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
  return (
    <section className={"qr-border qr-rounded py-4 px-6"}>
      <div className={"flex flex-col gap-4"}>
        <div className={"flex  gap-2.5 items-center"}>
          <input type="checkbox" />
          <label>QR Code</label>
          <HiOutlinePencil color={"#a480ae"} size={"20"} />
        </div>
        <div className={"flex gap-4"}>
          {qrCode}
          <div>
            <p>{qrLink}</p>
            <span>Type: {type}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function parseDate(date) {}
