//throw (lançar)
function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é obrigatório")
    }

    console.log(name)
}
//try...catch (tentar...pegar)
try {
    sayMyName('Gabriel')
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')