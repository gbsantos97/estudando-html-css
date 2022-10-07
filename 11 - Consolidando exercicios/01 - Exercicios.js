

const name = [
    'gabriel',
    'joão',
    'igor',
    'matheus',
    'rafael',
]
const notas  = [ 
      91,
      87,
      79,
      69,
      30,


    
]

// for (let i = 0; i < name.length; i++){ /* name.length esta listando os nomes a partir de 0 depois i++ 
// para parar vai add +1 i=1 n vai reler novamente o for let i=0 pois ja tem o valor de 1*/
    
//     if( notas[i] >= 90) { /*aqui no if (notas[i]) o i é para pegar o length la em cima só da para fazer isso
//     quando temos a msm quantidade de const */
//         console.log(`${name[i]} = A`);    
//     }
//     else if (notas[i] <=89 && notas[i] >= 80 ){
//         console.log(`${name[i]} = B`)
//     }   
//     else if ( notas[i] <=79 && notas[i] >= 70) {
//         console.log(`${name[i]} = C`)

//     } 
//     else if ( notas[i] <=69 && notas[i] >= 60){
//         console.log(`${name[i]} = D`)
        
//     } 
//     else if(notas[i] <=59){
//         console.log(`${name[i]} = F`)
//     }
// }
//se eu adicionar tudo isso a uma função da para ligar no botão input e mt mais
//for estou indicando a estrutura de repetição das condições aninhadas abaixo
    for (let i = 0; i < name.length; i++) {
        if (notas[i] >= 90) {
            console.log(`${name[i]} = A`);

        } else {
            if (notas[i] <= 89 && notas[i] >= 80) {
                console.log(`${name[i]} = B`);
            } else {
                if (notas[i] <= 79 && notas[i] >= 70) {
                    console.log(`${name[i]} = C`);
                } else {
                    if (notas[i] <= 69 && notas[i] >= 60) {
                        console.log(`${name[i]} =D`);
                    } else {
                        if (notas[i] <= 59) {
                            console.log(`${name[i]} = F`);
                        }

                    }

                }
            }
        }

    }


