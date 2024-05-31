import React, { useState } from "react";
import Button from "./StyledButton";

const Payout = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePayout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("No token found, please login first");
      return;
    }

    const payoutAmount = parseFloat(amount);
    if (isNaN(payoutAmount) || payoutAmount <= 0) {
      setMessage("Invalid amount. Please enter a positive number.");
      return;
    }

    try {
      const response = await fetch("https://probetag.vercel.app/api/payout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          amount: payoutAmount,
        }),
      });

      const responseBody = await response.text();

      if (response.status === 200) {
        setMessage("Payout successful");
      } else {
        setMessage(`Payout failed: ${response.status} - ${responseBody}`);
      }
    } catch (error) {
      console.error("Error during payout:", error);
      setMessage("An error occurred during payout");
    }
  };

  return (
    <div className="Payout">
      <h2>Payout</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        min="0.01"
        step="0.01"
      />
      <Button onClick={handlePayout}>Payout</Button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Payout;
