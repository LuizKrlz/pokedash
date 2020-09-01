import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <input placeholder="Type the Pokémon name" />
      </div>
      <div>
        <div>
          <div>
            <span>#1</span>
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <span>
              <strong>Name:</strong>
            </span>
            <span>
              <strong>Types:</strong>
              Grass, Poison
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
