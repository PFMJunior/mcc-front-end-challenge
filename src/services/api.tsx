import axios from 'axios';

const API_BASE_URL = 'https://randomuser.me/api/?results=21';
const CACHE_KEY = 'apiData';
const CACHE_EXPIRATION_TIME = 60 * 60 * 1000; // 1 hora

export const fetchData = async () => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(`${CACHE_KEY}_time`);

    if (cachedData && cachedTime) {
        const now = new Date().getTime();
        if (now - parseInt(cachedTime) < CACHE_EXPIRATION_TIME) {
            return JSON.parse(cachedData);
        }
    }

    try {
        const response = await axios.get(`${API_BASE_URL}`);
        const data = response.data.results;
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(`${CACHE_KEY}_time`, new Date().getTime().toString());
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
    }
};