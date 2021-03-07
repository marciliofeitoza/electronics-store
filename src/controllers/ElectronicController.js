const electronic = require('../models/electronic')

module.exports = {

    async index(request, response) {

        const electronics = await electronic.find()

        return response.json(electronics)
    },

    async store(request,response) {
        const { name, marca, preco, descricao } = (request.body)
        
        let electro = await electronic.findOne({ name })

        //Se não tiver cadastrado, é realizado o cadastro
        if (!electro) {
            electro = await electronic.create({
                name,
                marca,
                preco,
                descricao,
            })
        }
    
        return response.json(electro)
    
    },

    async update(request, response){
        
        const electronics = await electronic.findByIdAndUpdate(request.params.id, request.body, {
            new: true
        })

        return response.json(electronics)
    },

    async destroy(request, response){
        
        await electronic.findByIdAndRemove(request.params.id)

        return response.send()
    }
}