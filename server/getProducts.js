const products = require('../products.json')


const getProducts = (req, res) => {
    const {price} = req.query
    if(price){
      const pros =  products.filter(pro => pro.price >= +price)
        return res.status(200).send(pros)
    } else {
        
          res.status(200).send(products)
    }
}


module.exports = getProducts
