const { insertCustomerController, getCustomerController, deleteCustomerController } = require('../../Controllers/CustomerController')

const customerMiddlewares = (route) => {
    route.post('/insert-customer', insertCustomerController);
    route.get('/get-customers', getCustomerController);
    route.delete('/delete-customer/:id', deleteCustomerController);
}

module.exports = {
    customerMiddlewares
}