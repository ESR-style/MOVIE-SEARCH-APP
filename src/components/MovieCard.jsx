import { Link } from "react-router-dom";


const MovieCard = ({movie}) => {
    return (
        <div>
            <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
            </Link>
        </div>
    );
};


export default MovieCard;