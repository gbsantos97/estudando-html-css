//aqui é declaração ou declaration
var name

// assignment or atribuição de valores
name = "gabriel"

//que tipo de dado foi colocado na variavel
console.log(typeof name)

//agrupamento de declarações
/*let age, isHuman     (let somente no principal e os valores separados)
 age = 25
 isHuman = true   
*/


let age = 25
let isHuman = true

console.log(name, age, isHuman) /*aqui name, age, isHuman são argumentos*/
/*esse é um jeito de escrita de  texto +  variaveis
Concatenando valores*/

console.log('o ' + name + ' tem ' + age + ' anos.')
/* Ou assim
console.log('o gabriel tem 25 anos')
*/

/*interpolando valores com template literals or tamplate strings*/
console.log(`o ${name} tem ${age} anos.`) /* ${name} ${age}aqui dentro deles é uma expressão*/