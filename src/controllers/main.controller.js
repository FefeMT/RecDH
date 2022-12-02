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
    let create= db.movie.create({
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length
    })
    const success = movies => res.redirect('/')
    const error = error => res.send(error)
    return create.then(success).catch(error);
}
const edit = (req,res) => {
    const one = db.movie.findByPk(req.params.id)
    const success = movies => res.render('edit', {movies:movies})
    const error = error => res.send(error)
    return one.then(success).catch(error);
}
const save = (req,res) => {
    let find = db.movie.findByPk(req.params.id)
    let update = db.movie.update({
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
    const success = res.redirect('/')
    const error = error => res.send(error)
    return find.then(update).then(success).catch(error);
}
const borrar = (req,res) => {
    let find = db.movie.findByPk(req.params.id)
    let erase =db.movie.destroy({
        where: {
            id: req.params.id
        }
    })
    const success = res.redirect('/')
    const error = error => res.send(error)
    return find.then(erase).then(success).catch(error);
}

module.exports = {home,detail,create,add,borrar,edit,save};