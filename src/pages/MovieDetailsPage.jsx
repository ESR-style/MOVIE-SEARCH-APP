import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails.jsx';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-32 w-32 mb-4"></div>
          <p>Loading...</p>
        </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <MovieDetails movie={movie} />
      )}
    </div>
  );
};

export default MovieDetailsPage;