"use client"

import { SetStateAction, useState } from "react";
import Link from 'next/link';
import './test.css'

const Test = () => {
  const [activeTab, setActiveTab] = useState('text');

  const handleTabChange = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 'text' ? 'active' : ''}`}
          onClick={() => handleTabChange('text')}
        >
          Text
        </div>
        <Link href="/ ">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        <div
          className={`tab ${activeTab === 'speak' ? 'active' : ''}`}
          onClick={() => handleTabChange('speak')}
        >
          Speak
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'text' && <input type="text"  className="text-input" placeholder="Ask Joseph Something..."></input>}
        {activeTab === 'speak' && <input type="text" className="text-input" placeholder="Ask Joseph Something..."></input>}
      </div>
      <div className="copyright">
        &copy; 2023 ReVision. All rights reserved.
      </div>
      <div className="copyright">
        &copy; 2023 ReVision. All rights reserved.
      </div>
    </div>
  );
};


export default Test;
