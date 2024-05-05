import axios from "axios"

export async function getGenres() {
    const response = await axios.get("http://localhost:3333/api/genres")
    return response.data
}

export async function getMovies() {
    const response = await axios.get("http://localhost:3333/api/movies")
    return response.data
}
export async function getSeries() {
    const response = await axios.get("http://localhost:3333/api/series")
    return response.data
}

export async function getSearchedTerm(term: string) {
    const response = await axios.get(`http://localhost:3333/api/search/${term}`)
    return response.data
}

export async function getResultsByGenre(id: string) {
    const response = await axios.get(`http://localhost:3333/api/search/genres/${id}`)
    return response.data
}