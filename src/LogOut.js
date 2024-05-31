import React from "react";

function Logout({ onLogout }) {
  const handleLogout = async () => {
    try {
      const response = await fetch("https://probetag.vercel.app/api/logout", {
        method: "GET",
      });

      if (response.status === 200) {
        onLogout();
        alert("Logout successful");
      } else {
        alert("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("An error occurred during logout");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
