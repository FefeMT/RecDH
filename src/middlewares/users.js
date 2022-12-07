const {index} = require('../models/users.model');
let middleware = (req,res,next) => {
    let user = null;
    // Existe cookie from user (casilla de 'Recuerdame')
    if (req.cookie && req.cookie.user) {
        let users = index();
        let result = users.find(user => user.email == req.cookie.user);
        req.session.user = result;
    }
    //Existe user in session
    if (req.session && req.session.user) {
        user = req.session.user
    }
    res.locals.user = user;
    return next()
}
module.exports = middleware;