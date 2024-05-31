import React from "react";
import Button from "./StyledButton";

const Logout = ({ onLogout }) => {
  return <Button onClick={onLogout}>Logout</Button>;
};

export default Logout;
