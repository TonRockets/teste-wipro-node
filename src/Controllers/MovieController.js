const Movie = require('../Models/Movie');


const insertMovieController = async (req, res) => {

    const { name, status, year } = req.body;
    await Movie.create({ name, status, year });
    const all = await Movie.find();
    return res.json(all);

}

const getMovieController = async (req, res) => {

    const result = await Movie.find();
    return res.json(result);
}

const deleteMovieController = async (req, res) => {

    try {
        const movieId = req.params.id;
        await Movie.findByIdAndDelete(movieId).exec((err) => err ? res.send({msg: "Missing movie!", error: err.message }) : "");
        const query = await Movie.find();
        return res.json({ status: "200", movies: query });

    } catch (err) {
        return res.status()
    }
}


module.exports = {
    insertMovieController,
    getMovieController,
    deleteMovieController
};