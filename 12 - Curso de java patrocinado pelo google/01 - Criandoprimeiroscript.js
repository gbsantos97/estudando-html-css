// window.alert('minha primeira mensagem')
// window.confirm('esta gostando de jS?')
// var name = window.prompt('qual é seu nome?')
// window.alert('é um grande prazer em te conhecer ' + name + ' !')//concatenação

// AULA 6
// var n1 = Number(window.prompt('Digite um numero')) //estou convertendo essa string para number para que não haja concatenação e sim soma obtendo o resultado na concatenação abaixo
// var n2 = Number(window.prompt ('Digite outro numero'))
// var soma = n1 + n2
// window.alert('A soma dos valores é =' + String(soma))// concatenação    // e depois converti o resultado da soma Number para string
//+ serve pra adição                   (5+4=9)
// + tambem serve pra concatenação     (5+4=54)

//Formatando Strings
/*var s = 'JavaScript'
'Eu estou aprendendo s'      - não faz interpolação
'Eu estou aprendendo' + s    - usando concatenação
`Eu estou aprendendo ${s}`   - usa TEMPLATE STRING (usa`` crases)
 s.length                    - quantos caracteres a string tem
 s.toUpperCase()             - tudo para'MAIUSCULAS'
 s.toLowerCase()             - tudo para 'minusculas'
 toFixed()                   - para o numero de casas decimais
 replace()                   - usei para trocar os pontos por virgula
*/
var nome = window.prompt('Qual é seu nome?')
document.write(`Ola, <strong> ${nome}</strong> seu nome tem ${nome.length} letras.</br>`)
document.write(`Seu nome todo em maiusculas é ${nome.toUpperCase()}</br>`)
document.write(`Seu nome todo em minusculas é ${nome.toLowerCase()}</br>`)
/* var n1 = 1545.5
                 Resposta undefined
 n1
                 Resposta 1545.5
 n1.toFixed(2)    
                  Resposta'1545.50'
 n1.toFixed(2).replace('.',',')    trocando . por virgula 
                  Resposta'1545,50'
 n1.toLocaleString('pt-BR', {style:'currency' , currency: 'BRL'})
                  Resposta'R$ 1.545,50'
*/