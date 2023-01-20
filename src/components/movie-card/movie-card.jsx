import PropTypes from 'prop-types';

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div onClick = {() => {onMovieClick(movie)}}>
            {movie.title}
        </div>
    );
};

//proptype contraints 
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        Director: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genre: PropTypes.string.isRequired,
    }) .isRequired,
    onMovieClick: PropTypes.func.isRequired
};