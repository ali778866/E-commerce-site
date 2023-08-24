const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json({extended:false}));

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

var cors = require('cors');
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/user', userRoutes);

app.use(errorController.get404);

sequelize
    .sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => console.log(err))

