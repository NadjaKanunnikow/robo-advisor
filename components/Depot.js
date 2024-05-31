import React, { useState, useEffect } from "react";

const Depot = () => {
  const [depotData, setDepotData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepotData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found, please login first");
        return;
      }

      try {
        const response = await fetch(
          `https://probetag.vercel.app/api/depot?token=${token}`
        );
        if (response.status === 200) {
          const data = await response.json();
          setDepotData(data);
        } else if (response.status === 403) {
          setError("Access denied: Invalid token");
        } else {
          setError("An error occurred");
        }
      } catch (err) {
        console.error("Error fetching depot data:", err);
        setError("An error occurred while fetching data");
      }
    };

    fetchDepotData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return depotData ? (
    <div>
      <p>Depot Number: {depotData.depotnumber}</p>
      <p>Name: {depotData.name}</p>
      <p>Balance: {depotData.balance}</p>
      <p>BalanceFuture: {depotData.balanceFuture}</p>
      <p>Performance: {depotData.performance}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Depot;
