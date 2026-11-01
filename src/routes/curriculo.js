const express = require('express')
const upload = require('../services/uploadService')
const extrairTexto = require('../services/pdfService')

const router=express.Router() //Cria um roteador (Router) do Express. Ele permite organizar as rotas da sua API em arquivos separados, deixando o código mais organizado e fácil de manter.



router.post(
    '/upload',
    upload.single('curriculo'), //single é um middleware do multer que espera receber apenas um arquivo por campo
    (req,res)=>{
        res.json({
            mensagem:'Arquivo recebido com sucesso!',
            arquivo: req.file.originalname //salvar o arquivo  com o nome enviado 
        })
    }
)

router.post(
    '/ler',
    upload.single('curriculo'),
    async (req,res)=>{
        const texto=await extrairTexto(req.file.path)
        
        res.json({
            texto
        })
    }
    
)

module.exports=router