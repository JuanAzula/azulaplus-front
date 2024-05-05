import axios from "axios"

export async function getGenres() {
    const response = await axios.get("http://localhost:3333/api/genres")
    return response.data
}

export async function getMovies() {
    const response = await axios.get("http://localhost:3333/api/movies")
    return response.data
}

export async function getMovieById(id: string) {
    const response = await axios.get(`http://localhost:3333/api/movies/${id}`)
    return response.data
}

export async function postMovie(movie: any) {
    delete movie?.id
    const response = await axios.post("http://localhost:3333/api/movies", movie)
    return response.data
}

export async function patchMovie(movie: { id: string }) {
    const response = await axios.patch("http://localhost:3333/api/movies" + '/' + movie.id, movie)
    return response.data
}

export async function deleteMovie(id: string) {
    const response = await axios.delete("http://localhost:3333/api/movies" + '/' + id)
    return response
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

export async function uploadImage(file: any) {
    const formData = new FormData();
    formData.append('file', file);
    // const config = {
    //     headers: {
    //         Authorization: token,
    //         'Content-Type': 'multipart/form-data'
    //     }
    // }
    try {
        const response = await axios.post("http://localhost:3333/api/upload", formData);
        return response.data;
    } catch (error) {
        throw error;
    }
}