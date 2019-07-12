const express = require('express')
const app = express()
const PORT = 4000
const products = require('../products')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')


app.get('/api/products',getProducts)
app.get('/api/product/:id', getProduct)


app.listen(PORT, () => console.log( `Listening on Port:' + ${PORT}`))

