const db = require('../database/models/index');

const home = (req,res) => {
    const all = db.movie.findAll()
    const success = movies => res.render('home', {movies:movies})
    const error = error => res.send(error)
    return all.then(success).catch(error);
}
const detail = (req,res) => {
    const one = db.movie.findByPk(req.params.id, {
        include: [{association: 'genre'},{association: 'actors'}]
    })
    const success = movies => res.render('detail', {movies:movies})
    const error = error => res.send(error)
    return one.then(success).catch(error);
}
const create = (req,res) => {
    return res.render('create');
}
const add = (req,res) => {
    db.movie.create({
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length
    })
    return res.redirect('/')
}
const destroy = (req,res) => {
    return res.render('create');
}
const edit = (req,res) => {
    const one = db.movie.findByPk(req.params.id)
    const success = movie => res.render('edit', {movie:movie})
    const error = error => res.send(error)
    return one.then(success).catch(error);
}
const save = (req,res) => {
    db.movie.update({
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length
    },{
        where: {
            id: req.params.id
        }
    })
    return res.redirect('/req.params.id');
}

module.exports = {home,detail,create,add,destroy,edit,save};