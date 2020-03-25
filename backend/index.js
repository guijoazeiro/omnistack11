const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    return res.json({
        events: 'Semana OmniStack 11.0',
        aluno: 'Guilherme Augusto'  
    })
})

app.listen(3333)