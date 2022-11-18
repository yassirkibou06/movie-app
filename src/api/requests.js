const API_KEY = 'dde8e38e266d7defa44686375dd93a54';

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchTopRatedTv: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchMovies: `/videos?api_key=${API_KEY}`,
    fetchSimilar: `/similar?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSearch: `/search?api_key=${API_KEY}&language=en-US&page=1`
}


export default requests;