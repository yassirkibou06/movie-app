const apiConfig =  {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'dde8e38e266d7defa44686375dd93a54',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;