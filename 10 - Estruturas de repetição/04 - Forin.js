// for ... in
let person = {
    name: 'Jhon',
    age: 30,
    weight: 88.
}
for (let property in person){
    console.log(property) //aqui estou rodando a variavel 
    console.log(person[property])//aqui estou acessando a propriedade de person
}