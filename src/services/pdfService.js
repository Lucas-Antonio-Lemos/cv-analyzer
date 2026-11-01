const fs=require('fs')
const pdf = require ('pdf-parse')



async function extrairTexto(caminhoArquivo){
    
    const buffer=fs.readFileSync(caminhoArquivo)//leitura do arquivo pdf
    const resultado= await pdf(buffer)//Extração do texto do PDF

    return resultado.text //retorna propriedade text do objeto resultado.
}

module.exports=extrairTexto
