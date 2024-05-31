import React, { useState } from "react";
import Button from "./StyledButton";

const Deposit = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleDeposit = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("No token found, please login first");
      return;
    }

    const depositAmount = parseFloat(amount);
    if (isNaN(depositAmount) || depositAmount <= 0) {
      setMessage("Invalid amount. Please enter a positive number.");
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
          amount: depositAmount,
        }),
      });

      const responseBody = await response.text();

      if (response.status === 200) {
        setMessage("Deposit successful");
      } else {
        setMessage(`Deposit failed: ${response.status} - ${responseBody}`);
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
        min="0.01"
        step="0.01"
      />
      <Button onClick={handleDeposit}>Deposit</Button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Deposit;
