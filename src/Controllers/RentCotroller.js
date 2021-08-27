const Rent = require('../Models/Rent');
const moment = require('moment')



const insertRentController = async (req, res) => {

    const { customerId, movieId } = req.body;

    const dtLocacao = moment().format('YYYY-MM-DD');
    const dtDevolucao = moment().subtract(4, 'days').format('YYYY-MM-DD');

    await Rent.create({ customerId, movieId, dtLocacao, dtDevolucao});
    const all = await Rent.find();
    return res.json(all);

}

const getRentController = async (req, res) => {

    const result = await Rent.find();
    return res.json(result);
}

const deleteRentController = async (req, res) => {

    try {
        const rentId = req.params.id;
        await Rent.findByIdAndDelete(rentId).exec((err) => err ? res.send({ msg: "Missing rent!", error: err.message }) : "");
        const query = await (await Rent.find()).filter();
        return res.json({ status: "200", movies: query });

    } catch (err) {
        return res.status()
    }
}


module.exports = {
    insertRentController,
    getRentController,
    deleteRentController
};