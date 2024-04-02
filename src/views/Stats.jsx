import StatsCard from "../components/StatsCard.jsx";

export default function Stats({ totalScan = 0 }) {
  return (
    <div
      className={
        "px-8 h-screen bg-slate-300 w-[80%] flex flex-wrap  justify-between items-center"
      }
    >
      <StatsCard>
        <h2 className={"mb-4 font-medium text-[#46444a] text-xl md:text-3xl"}>
          Total Scans
        </h2>
        <p className={"mb-8"}>
          Total scans of your QR code. Counting all scans, <br /> even by the
          same user
        </p>
        <div className={"mb-3"}>icon All Time</div>
        <span className={"font-bold text-black text-2xl"}>{totalScan}</span>
      </StatsCard>{" "}
      <StatsCard>
        <h2 className={"mb-4 font-medium text-[#46444a] text-xl md:text-3xl"}>
          Unique Device Scans
        </h2>
        <p className={"mb-8"}>
          Count unique scans of your QR code even if, <br /> scanned multiple
          times by the same user
        </p>
        <div className={"mb-3"}>icon All Time</div>
        <span className={"font-bold text-black text-2xl"}>{totalScan}</span>
      </StatsCard>{" "}
      <StatsCard>
        <h2 className={"mb-4 font-medium text-[#46444a] text-xl md:text-3xl"}>
          Total Scans
        </h2>
        <p className={"mb-8"}>
          Total scans of your QR code. Counting all scans, <br /> even by the
          same user
        </p>
        <div className={"mb-3"}>icon All Time</div>
        <span className={"font-bold text-black text-2xl"}>{totalScan}</span>
      </StatsCard>{" "}
      <StatsCard>
        <h2 className={"mb-4 font-medium text-[#46444a] text-xl md:text-3xl"}>
          Unique Device Scans
        </h2>
        <p className={"mb-8"}>
          Count unique scans of your QR code even if, <br /> scanned multiple
          times by the same user
        </p>
        <div className={"mb-3"}>icon All Time</div>
        <span className={"font-bold text-black text-2xl"}>{totalScan}</span>
      </StatsCard>
    </div>
  );
}
