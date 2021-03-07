const { Router } = require('express')
const ElectronicController = require('./controllers/ElectronicController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.get('/electronics', ElectronicController.index)
routes.post('/electronics', ElectronicController.store)

routes.get('/search', SearchController.index)

routes.put('/electronics/:id', ElectronicController.update)
routes.delete('/electronics/:id', ElectronicController.destroy)

module.exports = routes