import React from 'react';

const Card = ({ pokemon }) => {
  return (
    <div className="m-4 p-4 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{pokemon.name}</h2>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
      </div>
    </div>
  );
};

export default Card;
