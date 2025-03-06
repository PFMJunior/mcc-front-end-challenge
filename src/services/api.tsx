import axios from 'axios';

const API_BASE_URL = 'https://randomuser.me/api/?results=21';

export const fetchData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);
        return response.data.results;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
    }
};