const express = require('express')

const routes = express.Router()

routes.get('/', (req, res)=>{
    return res.json({
        events: 'Semana OmniStack 11.0',
        aluno: 'Guilherme Augusto'  
    })
})

module.exports = routes