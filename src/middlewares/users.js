const db = require('../database/models/index');
let middleware = (req,res,next) => {
    let user = null;
    if (req.cookie && req.cookies.user) {
        let one = db.user.findOne({where:{email:req.cookies.user}})
        let success = one => req.session.user = one
        let errors = errors => res.send(error)
        one.then(success).catch(errors)
    }
    if (req.session && req.session.user) {
        user = req.session.user
    }
    res.locals.user = user;
    return next()
} 
module.exports = middleware;