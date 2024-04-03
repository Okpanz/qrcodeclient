import QrFrame from "../components/QrFrame.jsx";
import QrReader from "../components/QrReader.jsx";

export default function QrReaderPage() {
  return (
    <div
      className={
        "h-screen bg-slate-300 w-[80%] flex flex-col gap-2 justify-center items-center"
      }
    >
      <div
        className={
          "w-[60rem] bg-white rounded-sm border border-gray-300 p-10 flex flex-col gap-6"
        }
      >
        <QrFrame>
          <QrReader />
        </QrFrame>
      </div>
    </div>
  );
}
