let middleware = (req,res,next) => {
    let ruta = req.path.split("/");
    let style;
    if (req.path.length == 1){
        style = "home"
    } else if (req.path.length > 1 && ruta[1] == "users"){
        style = ruta[2]
    } else {
        style = ruta[1]
    }
    res.locals.style = style;
    return next()
}
module.exports = middleware;