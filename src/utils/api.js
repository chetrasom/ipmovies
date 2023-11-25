import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromAPI = async (url, params) => {
    try {
        const response = await axios.get(BASE_URL + url, {
            headers,
            params
        })

        const data = await response.data;
        return data;
        
    } catch (error) {
        console.log(error);
        return error
    }
}