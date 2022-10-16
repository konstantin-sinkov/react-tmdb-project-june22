import {axiosService} from "./index";
import {urls} from "../configs";

const moviesService = {
    getMovies: () => axiosService.get(urls.movies),
    getGenres: () => axiosService.get(urls.genres),
    getMovieByID: (id) => axiosService.get(`${urls.movieById}/${id}`)
}

export {
    moviesService
}
