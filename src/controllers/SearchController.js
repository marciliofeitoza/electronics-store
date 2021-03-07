const electronic = require('../models/electronic')

module.exports = {
    async index(request, response) {
        const { name, marca} = request.query

        const electronics = await electronic.find({
            name: {
                $in: name,
            },
            marca: {
                $in: marca,
            },
        })

        return response.json({ electronics })
    }
}