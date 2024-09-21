import React, { useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList.jsx';
import Searchbar from '../components/Searchbar.jsx';

export default function Home() {
    const [movies, setMovies] = useState([]);

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
            setMovies(response.data.Search);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <header className="bg-purple-800 p-4 shadow-md fixed w-full top-0 z-10">
                <h1 className="text-center font-sans font-medium text-3xl">Cinema Hunt</h1>
            </header>
            <div className="pt-20">
                <p className="text-center mb-4">Welcome to the Home Page</p>
                <Searchbar onSearch={handleSearch} />
                <MovieList movies={movies} />
            </div>
        </div>
    );
}