import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LogOut from "../components/LogOut";
import Depot from "../components/Depot";
import Deposit from "../components/Deposit";
import Payout from "../components/Payout";

const Dashboard = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    console.log("Token from localStorage:", tokenFromStorage);
    setToken(tokenFromStorage);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !token) {
      router.push("/");
    }
  }, [token, isMounted, router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <LogOut onLogout={handleLogout} />
      <h2>Depot</h2>
      <Depot />
      <h2>Deposit</h2>
      <Deposit />
      <h2>Payout</h2>
      <Payout />
    </div>
  );
};

export default Dashboard;
