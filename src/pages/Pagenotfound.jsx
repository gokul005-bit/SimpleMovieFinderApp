import React from 'react';
import { Link } from 'react-router-dom';

// Animation keyframes as a style tag
const animationStyles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-30px);}
  to { opacity: 1; transform: translateY(0);}
}
@keyframes bounce {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-20px);}
}
`;

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '80px',
    color: '#222',
    fontFamily: 'Segoe UI, Arial, sans-serif',
    animation: 'fadeIn 1s ease'
  },
  code: {
    fontSize: '7rem',
    fontWeight: 'bold',
    color: '#ff4757',
    marginBottom: '10px',
    letterSpacing: '10px',
    animation: 'bounce 1.2s infinite'
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '12px',
    color: '#333'
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#555'
  },
  link: {
    display: 'inline-block',
    padding: '12px 28px',
    background: 'linear-gradient(90deg, #70a1ff, #5352ed)',
    color: '#fff',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    boxShadow: '0 4px 16px rgba(112,161,255,0.15)',
    transition: 'background 0.3s, transform 0.2s',
    animation: 'fadeIn 2s'
  }
};

const Pagenotfound = () => (
  <>
    <style>{animationStyles}</style>
    <div style={styles.container}>
      <div className='animate-pulse text-9xl text-[red]'>404</div>
      <h2 style={styles.heading}>Page Not Found</h2>
      <p style={styles.text}>The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>Go to Home</Link>
    </div>
  </>
);

export default Pagenotfound;
