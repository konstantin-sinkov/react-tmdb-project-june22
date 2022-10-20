import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {Movie} from "../Movie/Movie";

const Movies = () => {
    const dispatch = useDispatch();
    const {movies, currentPage} = useSelector(state => state.moviesReducer);
    
    useEffect(() => {
        dispatch(moviesActions.getMovies(currentPage));
    }, [currentPage]);
    // console.log(state);
    console.log(movies);
    
    return (
        <div>
            {movies && movies.map((movie) => <Movie movie={movie} key={movie.id} />)}
        </div>
    );
}

export {Movies};
