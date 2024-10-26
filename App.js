import React, { useState } from 'react';
import './App.css';

function App() {
  // Step 1: Set up state for Pikachu's level
  const [level, setLevel] = useState(0);

  // Step 2: Define a function to increase the level based on points
  const increaseLevel = (points) => {
    setLevel(level + points);
  };

  return (
    <div
      style={{
        width: '375px', // Limit width to phone screen size
        margin: '0 auto', // Center the container on the page
        border: '1px solid #ccc', // Optional: add border to mimic a phone frame
        padding: '20px',
        height: '90vh', // Set height for a consistent look
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: add shadow for aesthetics
        position: 'relative', // relative positioning
      }}
    >
    {/* level display */}
    <h2 style={{ position: 'absolute', top: 0, left: 30 }}>Level: {level}</h2>

    <div // POKEMON DISPLAY 
      style ={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh', 
      }}
    >
    <img 
    src="https://img.pokemondb.net/sprites/scarlet-violet/normal/pichu.png" 
    alt="Pichu"
    style={{ width: '300px', height: 'auto'}} // adjust size if needed.
    className = "bouncy" // bouncy animation
    />
    </div>

    {/* Food Buttons*/}
    <div style ={{ position: 'absolute', bottom: 490, right: 0 }}> 
      <button onClick={() => increaseLevel(1)} // Cookie 
        style = {{
          padding: '10px 10px',
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center', // center-aligns 
          margin: '10px'
        }}
        ><img src="https://minecraft.wiki/images/Cookie_JE2_BE2.png?a911c&20190505051355" alt="Cookie" style={{ width: 30, height: 30, marginRight: 5 }}/>(+1)</button>
      <button onClick={() => increaseLevel(5)} // Steak
        style = {{
          padding: '10px 10px',
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center', // center-aligns 
          margin: '10px'
        }}
        ><img src="https://minecraft.wiki/images/Steak_JE4_BE3.png?45317&20190504055306" alt="Steak" style={{ width: 30, height: 30, marginRight: 5 }}/>(+5)</button>
      <button onClick={() => increaseLevel(25)} // Golden Apple
        style = {{
          padding: '10px 5.5px',
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center', // center-aligns 
          margin: '10px'
        }}
        ><img src="https://minecraft.wiki/images/Golden_Apple_JE2_BE2.png?aa827&20200521041809" alt="Golden Apple" style={{ width: 30, height: 30, marginRight: 5 }}/>(+25)</button>
    </div>

    
  </div>
  );
}

export default App;
