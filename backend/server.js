require('dotenv').config();
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./passport');
const cors = require('cors');

const app = express();

app.use(cookieSession({
    name: 'session',
    keys: ['thisismysecret'],

    maxAge: 24 * 60 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
}));

app.use('/auth', require('./routes/auth'));

// app.get('/', (req, res) => {
//     res.send('Working');
// });

app.listen(5000, () => {
    console.log('Server on port 5000');
});