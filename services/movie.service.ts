import axios from "../tools/axios";

export const getMovies = () => axios.get('/movies');
