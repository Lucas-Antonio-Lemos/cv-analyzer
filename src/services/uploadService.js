const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => { //define onde o arquivo sera salvo
        cb(null, './uploads')
    },

    filename: (req, file, cb) => { // mantém o nome original do arquivo enviado pelo usuário
        cb(null, file.originalname)
    }
})

const upload = multer({ storage }) //cria o middleware que será usado na rota 

module.exports = upload