import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import sheCanFoundation from "../assets/sheCanFoundation.jpg";
import lunchVoucher from "../assets/lunchVoucher.jpg";
import hoodie from "../assets/companyHoodie.jpg";
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/intern-data")
      .then((response) => {
        setInternData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={styles.container}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!internData) {
    return (
      <div style={styles.container}>
        <h2>Could not load intern data. Is the backend server running?</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.dashboard}>
          <h1 style={styles.heading}>Welcome, {internData.internName}!</h1>
          <Link to="/leaderboard" style={styles.button}>View Leaderboard</Link>
          <div style={styles.card}>
            <h3 style={styles.h3}>Your Referral Code</h3>
            <p style={styles.code}>{internData.referralCode}</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.h3}>Total Donations Raised</h3>
            <p style={styles.donations}>${internData.donationsRaised}</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.h3}>Rewards & Unlockables</h3>
            <ul style={styles.rewardsList}>
              <li style={styles.listItems}>
                <img
                  src={sheCanFoundation}
                  alt="company T-shirt"
                  style={styles.img}
                />
                $100 Raised: Company T-Shirt
              </li>
              <li style={styles.listItems}>
                <img src={lunchVoucher} alt="lunchVoucher" style={styles.img} />
                $250 Raised: Free Lunch Voucher
              </li>
              <li style={styles.listItems}>
                <img src={hoodie} alt="hoodie" style={styles.img} />
                $500 Raised: Company Hoodie
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#272727",
    minHeight: "100vh",
    minWidth: "100%",
    color: "white",
  },
  dashboard: { maxWidth: "800px", margin: "0 auto" },
  heading: {
    textAlign: "center",
    color: "#61dafb",
    marginBottom: "20px",
    fontSize: "2.5em",
  },
  card: {
    background: "#000",
    padding: "20px",
    margin: "20px 0",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  h3: {
    marginBottom: "10px",
    fontSize: "1.5em",
    backgroundColor: "black",
  },
  code: {
    padding: "10px",
    backgroundColor: "black",
    borderRadius: "4px",
    fontFamily: "monospace",
    fontSize: "1.2em",
    color: "#61dafb",
  },
  donations: { fontSize: "2em", fontWeight: "bold", color: "#28a745", backgroundColor: "black" },
  rewardsList: {
    listStyle: "none",
    padding: 0,
    margin: "4rem 0",
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    backgroundColor: "#000",
  },
  img: {
    width: "150px",
    height: "150px",
    verticalAlign: "middle",
    marginRight: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  listItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "10px",
    color: "#61dafb",
    width: "150px",
    textAlign: "left",
    backgroundColor: "black",
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#61dafb",
    color: "#000",
    textDecoration: "none",
    borderRadius: "5px",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "1.2em",
  },
};

export default DashboardPage;
