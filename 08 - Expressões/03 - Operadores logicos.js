
// - 2 valores booleanos, quando verificados,
//resultará em verdadeiro ou falso
let pao = true
let queijo = true

// AND && só aceita se tiver sim para os 2 se não da falso
//console.log (pao && queijo)

//OR || aqui aceita se tiver apenas 1
//console.log (pao  || queijo)

//NOT ! e aqui é negação se é falso vira verdadeiro e viceversa
// console.log (!pao)

// Operador TERNARIO ou de condição EX se condição pao && queijo for verdadeiro 'café top' 
// (se for = :) falso 'Café ruim' 
const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log (niceBreakfast)

// Maior de 18

let age = 17
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log (canDrive)