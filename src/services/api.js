import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '36aa473dfc5ec81fada547082bc4a5dd',
        language: 'en-US',
    },
});

export async function fetchTrendingMovies() {
    try {
        const { data } = await instance.get(`/trending/movie/day`)
        return data.results;
    } catch (error) {
        throw error;
    }
}

export async function searchMovie(queryString, signal) {
  try {
    const { data } = await instance.get(`/search/movie?query=${queryString}`, {
      signal,
    });
    return data.results;
  } catch (error) {
    throw error;
  }
}



export async function getMovieById(id) {
    try {
        const { data } = await instance.get(`/movie/${id}`)
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getCast(id) {
  try {
    const { data } = await instance.get(`/movie/${id}/credits`);
    return data.cast;
  } catch (error) {
    throw error;
  }
}

export async function getReviews(id) {
  try {
    const { data } = await instance.get(`/movie/${id}/reviews`);
    return data.results;
  } catch (error) {
    throw error;
  }
}