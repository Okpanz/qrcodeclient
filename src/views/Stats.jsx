import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Stats() {
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { qrcodeId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://server-master-ullz.onrender.com/vehicle/getstats/${qrcodeId}`);
        const statsData = response.data;
        setStatsData(statsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [qrcodeId]);

  return (
    <div className="container p-10 h-screen">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {statsData && (
        <div>
          <h2 className="text-center font-bold">Scans Data:</h2>
          <table className="stats-table">
            <tbody>
              <tr>
                <td className="label">VIN:</td>
                <td>{statsData.VIN}</td>
              </tr>
              <tr>
                <td className="label">createdAt:</td>
                <td>{statsData.createdAt}</td>
              </tr>
              <tr>
                <td className="label">Total Scans</td>
                <td>{statsData.scanHistory.length}</td>
              </tr>
            </tbody>
          </table>

          <h2>Scan History:</h2>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Scan Number</th>
                <th>Scan Time</th>
                {/* <th>Number of Times Scanned</th> */}
                <th>Scanned By Device</th>
              </tr>
            </thead>
            <tbody>
              {statsData.scanHistory.map((scan, index) => (
                <tr key={index}>
                  <td>{scan.scanNumber}</td>
                  <td>{scan.scanTime}</td>
                  {/* <td>{scan.numberOfTimesScanned}</td> */}
                  <td>{scan.scannedByDevice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
