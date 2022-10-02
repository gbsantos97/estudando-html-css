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
 toFixed()                   - para o numero de casas decimais ex 5.5 
 replace()                   - usei para trocar os pontos por virgula
*/
// var nome = window.prompt('Qual é seu nome?')
// document.write(`Ola, <strong> ${nome}</strong> seu nome tem ${nome.length} letras.</br>`)
// document.write(`Seu nome todo em maiusculas é ${nome.toUpperCase()}</br>`)
// document.write(`Seu nome todo em minusculas é ${nome.toLowerCase()}</br>`)
/* BRINCANDO NO TERMINAL
var n1 = 1545.5
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


              // AULA 7 operadores aritimedicos
/*
+ adição
- subtração
* multiplicação
/ divisão
% divisão inteira (resto da divisao ou oque sobra)
** ao quadrado (Potencia)

       Ordem de Precedencia dos operadores aritimedicos
()
**
* / %
+ -
exemplo na imagem Precedenciaaritimedica.png
 */



          //AULA 8 Operadores relacionais
/* os resultados são sempre valores booleanos true ou false
>  (- maior)
<  (- menor)
>= (- maior ou igual)
<= (- menor ou igual)
== (- igual)
!= (- não igual)

 
        OPERADORES DE IDENTIDADE
===(- extritamente igual)
    
    EX:
    5 == 5 true
    5 == '5'true
    5 === '5' falso
     
        OPERADORES LOGICOS ja na ordem de precedencia
1 - !  (- Negação)
2 - && (- Conjunção só se da por satisfeito se os dois valores for verdadeiro)
3 - || (- Disjunção satisfaz com apenas um dos valores for verdadeiro)
 
EM PORTUGUES
idade >= && idade <= 17            //a idade esta entre 15 e 17 ?
estado == 'RJ' || estado == 'SP'   //o estado é RJ ou SP?
salario > 1500 && sexo != 'M'      //o salario é acima de 1500 e não é homem?

 Ordem de Precedencia
1 - Aritimedicos 
2 - Relacionais 
3 - Logicos
4 - ternario

OPERADOR TERNARIO
? :
EX
var media = 5.5
media > 7 ? 'Aprovado':'Reprovado' (media é maior que 7 ? se sim Aprovado se nao reprovado)
(media>7?      'true' : 'false'   )               
*/

             //AULA 9 INTRO DOM
/*

*/