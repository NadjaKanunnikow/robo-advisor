import React, { useState } from "react";

function Payout() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePayout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("No token found, please login first");
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
          amount: parseFloat(amount),
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
      />
      <button onClick={handlePayout}>Payout</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Payout;
