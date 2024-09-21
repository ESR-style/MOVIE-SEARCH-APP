import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">{movie.Title}</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img src={movie.Poster} alt={movie.Title} className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6 shadow-md" />
        <div className="flex-1">
          <p className="mb-4"><strong>Year:</strong> {movie.Year}</p>
          <p className="mb-4"><strong>Genre:</strong> {movie.Genre}</p>
          <p className="mb-4"><strong>Director:</strong> {movie.Director}</p>
          <p className="mb-4"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="mb-4"><strong>Plot:</strong> {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;