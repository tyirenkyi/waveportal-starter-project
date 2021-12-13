import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        <span role="img" aria-label="wave">👋</span> Hey there!
        </div>

        <div className="bio">
        I am darth_applejeewce. I'm a frontend developer. Connect your Ethereum wallet and high five me!
        </div>

        <button className="bg-blue-100 w-[200px] mx-auto mt-4 py-4 rounded-md font-semibold text-[18px]" onClick={wave}>
          High Five Me
        </button>
      </div>
    </div>
  );
}
