let middleware = (req,res,next) => {
    let ruta = req.path.split("/");
    let style;
    if (req.path.length == 1){
        style = "home"
        console.log(style)
    } else if (req.path.length > 1 && ruta[1] == "users"){
        style = ruta[2]
        console.log(style)
    } else {
        style = ruta[1]
        console.log(style);
    }
    res.locals.style = style;
    return next()
}
module.exports = middleware;