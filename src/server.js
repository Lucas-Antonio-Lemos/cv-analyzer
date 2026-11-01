const express=require('express')
const app=express()
const curriculoRoutes = require('./routes/curriculo') //"Todas as rotas definidas dentro de curriculoRoutes terão o prefixo /curriculo."
const port = 1000
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`CV Analyzer funcionando ! ! ! !`)
})

app.use('/curriculo', curriculoRoutes)


app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})