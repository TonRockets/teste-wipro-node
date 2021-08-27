const { movieMiddlewares } = require('../Routes/Movie');
const { customerMiddlewares } = require('../Routes/Costumer');
const { rentMiddlewares } = require('../Routes/Rent');

const Routes = (app, route) => {

    movieMiddlewares(route);
    customerMiddlewares(route);
    rentMiddlewares(route);
    app.use('/v1', route);
}

module.exports = Routes;