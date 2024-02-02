import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Cart');
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className='logo-area'><img className='logo' src={logo} alt='logo'></img></div>
      <div className={`nav-option ${activeTab === 'Cart' ? 'active' : ''}`} onClick={() => handleTabClick('Cart')}><span className='nav-text'>Cart</span></div>
      <div className={`nav-option ${activeTab === 'Market' ? 'active' : ''}`} onClick={() => handleTabClick('Market')}><span className='nav-text'>Market</span></div>
      <div className={`nav-option ${activeTab === 'Setting' ? 'active' : ''}`} onClick={() => handleTabClick('Setting')}><span className='nav-text'>Setting</span></div>
      <div className={`nav-option ${activeTab === 'Logout' ? 'active' : ''}`} onClick={() => handleTabClick('Logout')}><span className='nav-text'>Logout</span></div>
    </div>
  );
}

export default Navbar;
