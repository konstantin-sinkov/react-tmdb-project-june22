import {axiosService} from "./index";
import {urls} from "../configs";

const moviesService = {
    getMovies: (page) => axiosService.get(urls.movies,{params: {page}}),
    getGenres: () => axiosService.get(urls.genres),
    getMovieByID: (id) => axiosService.get(`${urls.movieById}/${id}`)
}

export {
    moviesService
}
