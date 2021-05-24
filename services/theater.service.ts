import axios from "../tools/axios";

export const getTheaters = () => axios.get("/theater");
