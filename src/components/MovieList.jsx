import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {movies.map((movie) => (
                <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer hover:border-4 hover:border-gray-500">
                        <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded-t-lg" />
                        <div className="p-2">
                            <h2 className="text-xl font-bold">{movie.Title}</h2>
                            <p className="text-sm">{movie.Year}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieList;