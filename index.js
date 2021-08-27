const express = require('express');
const cors = require('cors')
const Db = require('mongoose');
const routes = require("./src/Routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const v1Routes = express.Router();
routes(app, v1Routes);

try {
    Db.connect('mongodb://localhost:27017/locadora-wipro',
        { useNewUrlParser: true }, () => {
            console.log(`DB connected, ${Db.Error}`);
        });
} catch (e) {
    console.log(`Connect database error:  ${e}`);
}



app.listen(PORT, () => console.log(`run at ${PORT}`));
