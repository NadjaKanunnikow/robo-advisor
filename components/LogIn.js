import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "./StyledButton";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("https://probetag.vercel.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else if (response.status === 403) {
        setMessage("Error: Invalid credentials");
      } else {
        setMessage("Error: Something went wrong");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occurred during login");
    }
  };

  return (
    <Container className="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label></label>
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label></label>
          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Anmelden</Button>
      </form>
      {message && <p>{message}</p>}
    </Container>
  );
};

export default LogIn;

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #012d2f;
`;
