const express = require('express')
const axios = require('axios')
const tradutor = require('watson-developer-cloud/language-translator/v3')
const cors = require('cors');

const app = express()

app.use(cors())

const hostname = '127.0.0.1';
const port = 3000

const chave = '7rKW8F_sCn3grtS35sIn38XS8P4FS5KzkUvCHBWLlzwK'
const url = 'https://gateway.watsonplatform.net/language-translator/api'



const listaClientes = [
    {
        nome: 'Xumes',
        cargo: 'dev'
    },
    {
        nome: 'Robinson',
        cargo: 'adv'
    },
    {
        nome: 'Brian',
        cargo: 'tecladinho'
    },
    {
        nome: 'Reginaldo',
        cargo: 'professor'
    },
    {
        nome: 'Marcelo',
        cargo: 'aluno'
    }
]

const oCara = {
    nome: 'Robinson',
    cargo: 'adv'
}

app.get('/traduz', (req, res) => {
    var languageTranslator = new tradutor({
        version: '2018-05-01',
        iam_apikey: chave,
        url: url
    });

    const parameters = {
        text: req.query.piada,
        source: 'en',
        target: 'pt'
    };

    languageTranslator.translate(
        parameters,
        function (error, response) {
            if (error){
                console.log(error)
                res.send(error)
            }
            else {
                console.log(JSON.stringify(response, null, 2));
                res.send(response)
            }
        }
    );


})

app.get('/le-piada', (req, res) => {
    axios
        .get('https://api.chucknorris.io/jokes/random')
        .then((resultado) => {
            console.log(resultado.data)
            res.send(resultado.data.value)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })

})

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get('/clientes', (req, res) => {
    res.send(listaClientes)
})

app.get('/xumes', (request, response) => {
    response.json(oCara)
})

app.listen(port, hostname, () => {
    console.log(`Serveris running in http://${hostname}:${port} `)
});



// const http = require('http');

// const hostname = '127.0.0.1';
// const port = process.env.PORT || 3000;


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });