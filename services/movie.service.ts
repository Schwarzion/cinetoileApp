import axios from "../tools/axios";

export const getMovies = () => axios.get('/movies');

export const getMoviesFromTheater = (theaterId: number) => {
    return axios.get(`theater/${theaterId}/movies/enabled`)
}

export const getOneMovie = (movieId: number) => {
    return axios.get(`/movie/${movieId}`);
}
