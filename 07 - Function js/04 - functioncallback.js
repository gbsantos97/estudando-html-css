function SayMyName(name){
    console.log ('antes de executar a função callback')

    name()

    console.log ('depois de executar a função callback')
}   
SayMyName(
        () =>{
        console.log('estou em uma call back name no cod') //aqui estou mandando uma função de fora para dentro
        }
)