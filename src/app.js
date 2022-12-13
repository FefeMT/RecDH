const express = require('express');
const app = express();
const {resolve} = require('path');
const {port,start} = require('./modules/server');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mainRoutes = require('./routes/main.routes');
const usersRoutes = require('./routes/users.routes');

app.listen(port,start());

app.set('views', resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(resolve(__dirname,'..','public')));
app.use(methodOverride('m'));
app.use(express.urlencoded({extended:true}));
app.use(session({secret: 'secreto', resave: true, saveUninitialized: true}));
app.use(cookieParser());
app.use(require('./middlewares/users'));
app.use(require('./middlewares/style'));

app.use(mainRoutes);
app.use('/users', usersRoutes);
app.use((req,res,next) => {res.status(404).render('404')});