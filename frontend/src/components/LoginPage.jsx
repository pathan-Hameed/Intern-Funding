import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.h2}>Intern Portal Login</h2>
        <input type="text" placeholder="Username" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
};

// styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  loginBox: {
    padding: "40px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  h2: {
    marginBottom: "20px",
    color: "black",
    backgroundColor: "white",
  },
  input: {
    display: "block",
    width: "250px",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    color: "white",
  },
  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default LoginPage;
