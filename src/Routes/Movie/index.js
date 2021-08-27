const { insertMovieController, getMovieController, deleteMovieController } = require('../../Controllers/MovieController')

const movieMiddlewares = (route) => {
    route.post('/insert-movie', insertMovieController);
    route.get('/get-movies', getMovieController);
    route.delete('/delete-movie/:id', deleteMovieController);
}

module.exports = {
    movieMiddlewares
}