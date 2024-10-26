import React, { useState } from 'react';
import './App.css';

const pichu = "https://img.pokemondb.net/sprites/scarlet-violet/normal/pichu.png";
const pikachu = "https://img.pokemondb.net/sprites/scarlet-violet/normal/pikachu.png";
const raichu = "https://img.pokemondb.net/sprites/scarlet-violet/normal/raichu.png";

function App() {
  const [level, setLevel] = useState(0);

  const increaseLevel = (points) => {
    setLevel(level + points);
  };

  const resetLevel = () => {
    setLevel(0);
  };

  let displayedImage;
  if (level < 20) {
    displayedImage = pichu;
  } else if (level < 75) {
    displayedImage = pikachu;
  } else {
    displayedImage = raichu;
  }

  return (
    <div
      style={{
        width: '375px',
        margin: '0 auto',
        border: '1px solid #ccc',
        padding: '20px',
        height: '90vh',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        position: 'relative',
      }}
    >
      {/* Level display */}
      <h2 style={{ position: 'absolute', top: 0, left: 30 }}>Level: {level}</h2>

      {/* Conditional Rendering: Show either the main content or the final stage message */}
      {level < 100 ? (
        <>
          {/* Pokémon Display */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '60vh',
            }}
          >
            <img
              src={displayedImage}
              alt="Pokemon"
              style={{ width: '300px', height: 'auto' }}
              className="bouncy"
            />
          </div>

          {/* Food Buttons */}
          <div style={{ position: 'absolute', bottom: 490, right: 0 }}>
            <button
              onClick={() => increaseLevel(1)}
              style={{
                padding: '10px 10px',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                margin: '10px',
              }}
            >
              <img
                src="https://minecraft.wiki/images/Cookie_JE2_BE2.png?a911c&20190505051355"
                alt="Cookie"
                style={{ width: 30, height: 30, marginRight: 5 }}
              />
              (+1)
            </button>
            <button
              onClick={() => increaseLevel(5)}
              style={{
                padding: '10px 10px',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                margin: '10px',
              }}
            >
              <img
                src="https://minecraft.wiki/images/Steak_JE4_BE3.png?45317&20190504055306"
                alt="Steak"
                style={{ width: 30, height: 30, marginRight: 5 }}
              />
              (+5)
            </button>
            <button
              onClick={() => increaseLevel(25)}
              style={{
                padding: '10px 5.5px',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                margin: '10px',
              }}
            >
              <img
                src="https://minecraft.wiki/images/Golden_Apple_JE2_BE2.png?aa827&20200521041809"
                alt="Golden Apple"
                style={{ width: 30, height: 30, marginRight: 5 }}
              />
              (+25)
            </button>
          </div>
        </>
      ) : (
        // Final Stage Message and Retry Button
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '70vh',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>You've reached the final stage!</p>
          <button
            onClick={resetLevel}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: '#ffcc00',
              border: 'none',
              borderRadius: '5px',
              marginTop: '10px',
            }}
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
