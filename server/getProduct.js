const products = require('../products.json')


const getProduct = (req,res) => {
    const {id} = req.params
    const did = products.filter(products => products.id === +id)[0]
    if(did === true){
        res.status(200).send(did)
    } else {
      
        res.status(500).send(did)
    }
}



module.exports = getProduct