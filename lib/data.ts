import axios from "axios"
export async function getGenres() {
    const response = await axios.get("http://localhost:3333/api/genres")
    return response.data
}