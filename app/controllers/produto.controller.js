const db = require('../models');
const Product = db.product;

// função para criar um produto

exports.create = (req, res) => {

    if(!req.body.title || !req.body.description || !req.body.price){
        res.status(400).json({status: "Dados Ausentes"});
        return;
    }
    
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    })

    product.save(product).then(data => {
        res.json({status: data})
    })
    .catch(
        err => {
            res.status(500).json({status: err})
        }
    )
}

// função para encontrar todos produtos

exports.findAll = (req, res) => {

    Product.find({}).then(data => {
        res.json(data);
    })
    .catch(
        err => {
            res.status(500).json({status: err})
        }
    )

};

// função para remover um produto

exports.deleteOne = (req, res) => {
    const id = req.params.id;
    Product.findByIdAndRemove(id).then(
        data => {
            if(data){
                res.json({status: "Produto removido com sucesso!"});
            }
            else{
                res.status(400).json({status: "Erro com algum dado inserido"})
            }
        }
    )
    .catch(
        err => {
            res.status(500).json({status: "Erro"})
        }
    )
    
}


// função para atualizar um produto

exports.UpdateOne = (req, res) => {
    const id = req.params.id;

    if(!req.body){
        res.json({status: 'Dados ausentes'});
        return
    }

    Product.findByIdAndUpdate(id, req.body).then(
        data => {
            if(data){
                res.json({status: "Produto atualizado com sucesso"});
            }
            else{
                res.status(400).json({status: 'Erro com algum dado inserido'})
            }
        }
    )
    .catch(
        err => {
            res.status(500).json({status: err})
        }
    )
}