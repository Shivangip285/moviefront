import {useEffect, useState} from 'react';
import showsService from "../services/showsService";

const useMovies = () => {
    const [moviesLoading, setMoviesLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        showsService.fetchAllMovies().then(movies => {
            setMoviesLoading(false);
            setMovies(movies);
        });
        // eslint-disable-next-line
    }, []);

    return {
        movies: movies,
        moviesLoading: moviesLoading
    };
}

export default useMovies;