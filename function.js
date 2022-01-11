function imc(peso, altura) {    
   imc = peso / (altura * 2);
    return imc;
}

console.log(imc(80, 1.70));

/* peso e altura são os parâmetros
80 e 170 são os argumentos */

addEventListener('click', function(){
    console.log('Clicou');
})

// essa função addEventListener possui dois argumentos,
// 1. 'click' é o tipo de evento. 
// 2. função que será executada caso o click ocorra. 

// nesse caso, a função está dentro do paramatro. 

// tbm poderia adiconar: 

function mostraConsole() {
    console.log('Clicou');
}

addEventListener('click', mostraConsole());

function terceiraIdade(tuaIdade){
    if(typeof tuaIdade !== 'number') {
        return 'Informe a sua idade';
    } else if (tuaIdade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log (terceiraIdade(23));

// terceiraIdade é uma função, o tuaIdade é um parametro necessário pra rodar a função
// e a variavel tuaIdade pode vir de outra função ou de um input do usuario
// !== diferente
