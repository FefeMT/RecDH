let middleware = (req,res,next) => {
    if (req.session && req.session.user && req.session.user && (req.session.user.rol == 1)){
        return next()
    } else {
        return res.redirect('/404')
    }
}
module.exports = middleware; 