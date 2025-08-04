import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const handleLoginout = () => {
        // No real auth, just navigate to the login page
        navigate("/login");
    }
  return (
    <div style={style.container}>
        <div style={style.logo}>Intern Funding</div>
        <div style={style.navLinks}>
            <a href="/dashboard" style={style.link} onMouseOver={(e) => e.target.style.textDecoration = style.linkHover.textDecoration} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>Dashboard</a>
        </div>
        <button  onClick={handleLoginout} style={style.button} onMouseOver={(e) => e.target.style.backgroundColor = style.buttonHover.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = '#61dafb'}>
            <span style={style.buttonText} onMouseOver={(e) => e.target.style.color = style.buttonTextHover.color} onMouseOut={(e) => e.target.style.color = 'white'}>Logout</span>
        </button>
    </div>
  )
}

const style = {
    container: {
        width: '100%',
        height: '60px',
        backgroundColor: '#282c34',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        color: 'white'
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
    },
    navLinks: {
        display: 'flex',
        gap: '20px'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px'
    },
    linkHover: {
        textDecoration: 'underline'
    },  
    button: {
        padding: '10px 20px',
        backgroundColor: '#61dafb',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        color: '#282c34'
    },
    buttonHover: {
        backgroundColor: '#21a1f1'
    },
    buttonText: {
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
    },
    buttonTextHover: {
        color: '#282c34'
    },
    
}
