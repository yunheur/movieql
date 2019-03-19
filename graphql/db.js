let movies = [{
	id: 0,
	name: "Star Wars - The new one",
	score: 1
}, {
	id: 1,
	name: "Avengers - The new one",
	score: 8
}, {
	id: 2,
	name: "The Goxfater I",
	score: 99
}, {
	id: 3,
	name: "Logan",
	score: 2
}]

export const getMovies = () => movies;

export const getById = id => {
	const filteredMovie = movies.filter(movie => movie.id === id);
	return filteredMovie[0];
};

export const deleteMobie = (id) => {
  const cleanedMovies = mobies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}