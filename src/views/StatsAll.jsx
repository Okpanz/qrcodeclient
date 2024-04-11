import React, { useEffect, useState } from "react";
import axios from 'axios';
import ConvertTime from "../components/ConvertTime";

export default function StatsAll() {
  const [statsData, setStatsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://server-master-ullz.onrender.com/vehicle/`);
        const statsData = response.data;
        setStatsData(statsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterStatsByTime = async (timeFrame) => {
    let filteredStats = [];
    const currentTime = new Date().getTime();
    
    switch (timeFrame) {
      case '24hours':
        const past24HoursStats = statsData.filter(stat => currentTime - new Date(stat.createdAt).getTime() <= 24 * 60 * 60 * 1000);
        setStatsData(past24HoursStats);
        break;
      default:
        try {
          const response = await axios.get(`https://server-master-ullz.onrender.com/vehicle/`);
          const statsData = response.data;
          setStatsData(statsData);
        } catch (error) {
          setError(error);
        }
        break;
    }
  };

  return (
    <div className="container md:p-10 overflow-y-scroll w-66 mx-auto">
      <div className="filter-buttons bg-black text-white">
        <button onClick={() => filterStatsByTime('24hours')}>Last 24 Hours</button>
        <button onClick={() => filterStatsByTime('')}>Show All</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {statsData.length > 0 && (
        statsData.map((stats, idx) => (
          <div key={idx}>
            {/* <h2 className="text-center font-bold">Stats for QR Code{idx + 1}:</h2> */}
            <table className="stats-table">
              <tbody>
                <tr>
                  <td className="label">VIN:</td>
                  <td>{stats.VIN}</td>
                </tr>
                <tr>
                  <td className="label">Total Scans:</td>
                  <td>{stats.scanHistory.length}</td>
                </tr>
              </tbody>
            </table>

            <h2>Scan History:</h2>
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Scan Number</th>
                  <th>Scan Time</th>
                  <th>Scanned By Device</th>
                </tr>
              </thead>
              <tbody>
                {stats.scanHistory.map((scan, index) => (
                  <tr key={index}>
                    <td>{scan.scanNumber}</td>
                    <td><ConvertTime timestamp={scan.scanTime} /></td>
                    <td>{scan.scannedByDevice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}
