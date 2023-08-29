import express, {Request, Response, NextFunction} from 'express';

require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

app.use('/static', express.static('node_modules/bootstrap/dist'));

const {PORT, MONGO_URI} = process.env;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// CONNECT TO MONGODB SERVER
// mongoose
//     .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Successfully connected to mongodb'))
//     .catch((e: Error) => {
//         console.error("Error details:");
//         console.error("Name:", e.name);
//         console.error("Message:", e.message);
//         console.error("Stack:", e.stack);
//     });

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/fetch-content', (req, res) => {
    res.send(`
    <div class="container mt-5">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">게임 할사람 구함(5명)</h5>
                <p class="card-text">This is some text within a card body. You can put content here including text, images, and more!</p>
            </div>
        </div>
    </div>`);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}: http://localhost:4500/`));
