import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // To link back to the dashboard

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/api/leaderboard')
      .then(response => {
        setLeaderboard(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching leaderboard data!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={styles.container}><h2>Loading Leaderboard...</h2></div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Intern Leaderboard</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Rank</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Donations Raised</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((intern, index) => (
            <tr key={intern.id}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{intern.internName}</td>
              <td style={styles.td}>${intern.donationsRaised}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/dashboard" style={styles.link}>← Back to Dashboard</Link>
    </div>
  );
};

// Basic styling
const styles = {
  container: { padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' },
  h1: { fontSize: '2em', marginBottom: '20px', color: 'white' },
  table: { width: '100%', borderCollapse: 'collapse', marginTop: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
  th: { border: '1px solid #ddd', padding: '12px', backgroundColor: '#007bff', color: 'white' },
  td: { border: '1px solid #ddd', padding: '10px', textAlign: 'left',color: 'white' },
  link: { display: 'inline-block', marginTop: '20px', color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }
};

export default Leaderboard;