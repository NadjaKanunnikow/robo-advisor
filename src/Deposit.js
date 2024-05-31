import React, { useState } from "react";

function Deposit() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleDeposit = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("No token found, please login first");
      return;
    }

    try {
      const response = await fetch("https://probetag.vercel.app/api/deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          amount: parseFloat(amount),
        }),
      });

      if (response.status === 200) {
        setMessage("Deposit successful");
      } else if (response.status === 405) {
        setMessage("Deposit failed: Method not allowed");
      } else {
        setMessage("An error occurred");
      }
    } catch (error) {
      console.error("Error during deposit:", error);
      setMessage("An error occurred during deposit");
    }
  };

  return (
    <div className="Deposit">
      <h2>Deposit</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={handleDeposit}>Deposit</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Deposit;
