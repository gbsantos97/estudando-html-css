// Função é um liquidificador (coloquei o "liquid" atribui um nome ao que ele vai fazer
// fazerSuco e a "boca do liquid" e dentro vem o produto abaixo)

function fazerSuco(fruta1, fruta2){
    return `suco de ${fruta1} ${fruta2}`
}

const copo = fazerSuco ('banana', 'maçã') //const aqui é o copo que quando sair do "liquid" ela que 
                                          //recebera o suco que vai "return" de dentro do liquid

console. log (copo)                       //me mostra oque tem dentro do copo