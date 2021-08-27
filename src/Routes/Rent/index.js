const { insertRentController, 
    getRentController, 
    deleteRentController 
} = require('../../Controllers/RentCotroller')

const rentMiddlewares = (route) => {
    route.post('/insert-rent', insertRentController);
    route.get('/get-rent/:id', getRentController);
    route.delete('/delete-rent/:id', deleteRentController);
}

module.exports = {
    rentMiddlewares
}