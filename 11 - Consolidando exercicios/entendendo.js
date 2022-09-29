//outra maneira que um amigo me ensinou
const names = ['Gabriel', 'test2', 'test3', 'test4', 'test5'];

const notas = [91, 85, 80, 75, 70];

let persons = [];/*aqui a variavel esta vazia para receber os resultados  da junção para obter o resultado*/

for (let i = 0; i < names.length; i++) {
  let objAux = { /*o objeto esta sendo feito pelas consts la em cima para poder juntalas na sequencia length*/ 
    alunos: names[i],
    nota: notas[i],
  };
  persons.push(objAux); /*estou empurrando o objeto para let persons*/
}

console.log(persons);