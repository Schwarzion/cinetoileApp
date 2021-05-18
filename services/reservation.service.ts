import axios from '../tools/axios';

//Faking user id
const id = 1;

export const getPassedReservation = () => {
    return axios.get(`/reservations/passed/user/${id}`);
};

export const getIncomingReservation = () => {
    const test = axios.get(`/reservations/incoming/user/${id}`);
    return test;
}

export const editStatus = (id, status) => {
    return axios.put(`/reservations/${id}/${status}`);
}

export const addReservation = () => {
    return axios.post(`/reservation`);
}