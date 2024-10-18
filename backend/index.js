//Modules
const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
config();

const connection = require('./config/database_config');
const authentication = require('./middlewares/authenticate.middleware');

// Routes
const eyewearRouter = require('./routes/eyewear.route');
const userRoute = require('./routes/user.route');


const port = process.env.PORT;
const app = express();

// Middlewares
app.use(express.json());

app.use(cors({
    origin: '*'
}))

app.use('/user', userRoute);
app.use('/eyewear', eyewearRouter);

// Home Route  (GET request)
app.get('/', (req, res) => {
    res.send('Hello, World!');
})


// Listening Server
app.listen(port, async () => {
    try {
        await connection
        console.log(`Server is running on port ${port}`);
    } catch (error) {
        console.error(`Error occour - ${error}`);
    }
})