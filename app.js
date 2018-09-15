const express = require('express')

const app = express()

const hostname = '127.0.0.1';
const port = 3000

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

app.get('le-piada', (req, res) => {
    res.send('Aguarde que vamos implementar a função que le uma piada nova')
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