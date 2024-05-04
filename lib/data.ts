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