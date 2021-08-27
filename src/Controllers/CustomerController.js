const Customer = require('../Models/Costumer');


const insertCustomerController = async (req, res) => {

    const { name, cpf} = req.body;
    await Customer.create({ name, cpf });
    const all = await Customer.find();
    return res.json(all);

}

const getCustomerController = async (req, res) => {

    const result = await Customer.find();
    return res.json(result);
}

const deleteCustomerController = async (req, res) => {

    try {
        const customerId = req.params.id;
        await Customer.findByIdAndDelete(customerId).exec((err) => err ? res.send({msg: "Missing Customer!", error: err.message }) : "");
        const query = await Customer.find();
        return res.json({ status: "200", costumers: query });

    } catch (err) {
        const code = res.status()
        return res.send({statusCode: code, msg: "An error has ocorred!"})
    }
}


module.exports = {
    insertCustomerController,
    getCustomerController,
    deleteCustomerController
};