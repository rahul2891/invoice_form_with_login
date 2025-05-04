import React, { useState } from 'react';
import './Header.css'

const Header = () => {
    const [activeTab, setActiveTab] = useState("vendor");

  const handleLogout = () => {
    localStorage.removeItem('session');
    window.location.href = '/login';
  };

  return (
    <div className="invoice-header">
    <button className="back-button">←</button>
    <h1>Create New Invoice</h1>
    <div className="tabs">
      <button
        className={activeTab === "vendor" ? "active" : ""}
        onClick={() => setActiveTab("vendor")}
      >
        Vendor Details
      </button>
      <button
        className={activeTab === "invoice" ? "active" : ""}
        onClick={() => setActiveTab("invoice")}
      >
        Invoice Details
      </button>
      <button
        className={activeTab === "comments" ? "active" : ""}
        onClick={() => setActiveTab("comments")}
      >
        Comments
      </button>
    </div>
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  </div>
  );
};

export default Header;
