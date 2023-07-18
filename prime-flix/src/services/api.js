import axios from 'axios'

// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=3790253604aa07af218badb6767b5e8e&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api

//https://api.themoviedb.org/3/movie/now_playing?api_key=3790253604aa07af218badb6767b5e8e&language=pt-BR
