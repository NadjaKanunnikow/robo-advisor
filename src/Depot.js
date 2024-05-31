import React, { useState } from "react";

function Depot() {
  const [depotData, setDepotData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDepotData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found, please login first");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://probetag.vercel.app/api/depot?token=${token}`
      );

      if (response.status === 200) {
        const data = await response.json();
        setDepotData(data);
        setError(null);
      } else if (response.status === 403) {
        setError("Access denied: Invalid token");
        setDepotData(null);
      } else {
        setError("An error occurred");
        setDepotData(null);
      }
    } catch (err) {
      console.error("Error fetching depot data:", err);
      setError("An error occurred while fetching data");
      setDepotData(null);
    }

    setLoading(false);
  };

  return (
    <div className="Depot">
      <button onClick={fetchDepotData}>Fetch Depot data</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {depotData && (
        <div>
          <p>Depot Number: {depotData.depotnumber}</p>
          <p>Name: {depotData.name}</p>
          <p>Balance: {depotData.balance}</p>
          <p>BalanceFuture: {depotData.balanceFuture}</p>
          <p>Performance: {depotData.performance}</p>
        </div>
      )}
    </div>
  );
}

export default Depot;
