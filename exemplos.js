function soma(a, b) {
    return a + b
}

multiplica = (a, b) => {
    return a * b
}



const a = 5
const b = 3
let resultadoSoma = 0
let resultadoMultiplica = 0

resultadoSoma = soma(a, b)
resultadoMultiplica = multiplica(a, b)

console.log("A soma de" + a + " mais " + b + " é igual a " + resultadoSoma)
console.log(`A soma de ${a} mais ${b} é igual a ${resultadoSoma}`)
console.log(`${a} vezes ${b} é igual a ${resultadoMultiplica}`)

const nome = "Reginaldo"
const apelido = 'Xumes'

//template string


//exercicio 1
let x = 30
let y = 19

console.log(`VAlor original a=${x} b=${y}`)

let tempA = y
let tempB = x

x = tempA
y = tempB

console.log(`Resultado invertido a=${x} b=${y}`)

//solução ideal

inverte = (a, b) => {
    return b, a
}

let num1 = 30
let num2 = 19
console.log(num1, num2)



//num1, num2 = num2, num1
console.log(num1, num2)


