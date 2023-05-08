const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Laryssa Peçanha',
        imagem: 'https://lh3.googleusercontent.com/pw/AJFCJaXV5k-awUe1faCwEfoXI61Zh98WzrJCME0AhpXrXOhLj55jqMUrbwXwg4EEENtTDTajlhpnIDT0HiW6Q4EiHBnXFylUUea_FXAW-7jrHFykbbIJ3SKkhZFow4EWLpsEQzDWlSZaU-LyzbeA8n_oA3F2DCyCyftmvCdCaz5m-KC4WeY3YijF8fZBpurJOV1DSDLGlqVvpg08UFOWqSzdtImzlXqkPAIFGV51X-7MkIT5DgA7pLL1ig8ZVI1sc6H0p62d78kGkKsPmuMNWOwHRkvbhZRWD73O7LFaxdi24maKBsdDgqCM1AbKFnT8iSTacy-Aar8IBu-OJ3NZquhALHjRiqEuedR3wkEiNlKskACiJIqN9c5NgKPnOlo13znpA9qhTAXFp4uKtmEf4oDC8Ai8Jv-RuKCZkvbjNRuffJ2aYsbrlXKTJVLKtOCMqWkVVnodp0lnYMHZhYSa7GeTNLJR0OQMhTdDZFZQNUl30IQk69oTNizm9ieXhAetVlXH5TiuKEmBZZsQ43Utnw2iTTEjBtgVfYFyBpCow2v_XCsmvRoeuq7LwzELPjC1cEHjxsJvZx4L7cYrgUsEkZMYIoyRpIB3p2vjujobQfd9IiNbm6e72mJf7hlrcSRe5cT3ikCyhv_Uzye-jtq2o9Z4TtDbX6tgNONqGNXu3zqnCC57deeFjhjXq7QCwEYtDi4K8qM5-VXPqWPlLg6f2CLmwzcFOeV4EkJWEE3lT8Aw6V-81NfIctu8pn8rtMucJQtp5FbF6SaKyAJqYsmVoVLkQKVygDEFUx5_CRigtRA1R5IpMTij1kz9t9aIlHi2OEAlj_M1leRiLmHpGxB1r5UqRGHTiu7XtArHKKs0pu0mT73xoiXzHOli6dlvAq0PkBzEClvd71nlKn8wO4T2RjNPF48=w541-h961-s-no?authuser=0',
        minibio: 'Desenvolvedora Back-end e Administradora de dados'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)