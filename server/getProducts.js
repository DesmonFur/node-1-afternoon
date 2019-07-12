const products = require('../products.json')


const getProducts = (req, res) => {
    const {price} = req.query
    if(price === true){
      let pros=  products.filter(products => products.price >= +price)[0]
        return res.status(200).send(pros)
    } else {
        
          res.status(200).send(products)
    }
}


module.exports = getProducts
