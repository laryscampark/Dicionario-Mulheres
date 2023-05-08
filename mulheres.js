const express = require("express")
const router = express.Router()

const cors = require('cors')

const conectaBanco = require('./bancoDeDados')
conectaBanco()

const Mulher = require('./mulherModel')

const app = express()
app.use(express.json())
app.use(cors())

const porta = 3333


async function mostraMulheres(request, response) {
    try {
        const mulherBanco = await Mulher.find()

        response.json(mulherBanco)
    } catch (erro) {
        console.log(erro)
    }
}

async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log()
    }
}

async function corrigeMulher(request, response) {

    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }

        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }

        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }
        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        const mulherAtualizadaBanco = await mulherEncontrada.save()

        response.json(mulherAtualizadaBanco)

    } catch (erro) {
        console.log(erro)
    }
}

async function deletaMulher(request, response) {

    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ messagem:'Mulher deletada com sucesso!'})
    } catch (erro) {
        console.log(erro)
    }
}

app.use(router.get('/mulheres', mostraMulheres))
app.use(router.post('/mulheres', criaMulher))
app.use(router.patch('/mulheres/:id', corrigeMulher))
app.use(router.delete('/mulheres/:id', deletaMulher))

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta)