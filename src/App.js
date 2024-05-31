import React, { useState } from "react";
import "./App.css";
import Login from "./LogIn";
import Logout from "./LogOut";
import Depot from "./Depot";
import Deposit from "./Deposit";
import Payout from "./Payout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <Login onLogin={handleLogin} />
        <h1>Logout</h1>
        {isLoggedIn && <Logout onLogout={handleLogout} />}
        <h1>Depot</h1>
        {isLoggedIn ? <Depot /> : <p>Please login to view depot data</p>}
        {isLoggedIn && (
          <>
            <h1>Deposit</h1>
            <Deposit />
            <h1>Payout</h1>
            <Payout />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
