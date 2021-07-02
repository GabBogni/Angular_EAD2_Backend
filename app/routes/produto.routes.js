module.exports = app => {
    const produto = require('../controllers/produto.controller.js');
    var router = require("express").Router();

    router.post('/', produto.create);
    router.get('/',  produto.findAll);
    router.put("/:id", produto.UpdateOne);
    router.delete("/:id",  produto.deleteOne);

    app.use('/api/produtos', router);
}