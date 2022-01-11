import compare from "./calculator.js";

const numberList = [[5, 4], [3, 4], [0, 0], [25, 30], [157, 157.1]];


/* Laço for(), então, dentro do () teremos três valores, sendo eles:

let i = 0  é a variável temporária, o início da condição
i < (numberList.length - 1) é a condicional do for
i++ é o final do loop 

*/


/* .length é o tamanho total do array. 

se a variavel i for menor que o comprimento da lista, faça 

[11:38] Endriw Ventura
pra fazer o loop apenas no numero de entidades



// for (let i = 0; i < numberList.length; i++) {
//     compare(numberList[i][0], numberList[i][1]);
// }


/* let i = 0;

// o problema do while é que sem o iterador, o programa vai ficar rodando eternamente
// i++ é a mesma coisa que i = i + 1

// leitura:  se a variável i for menor que o comprimento da lista, faça [ aí usa o numero das entidades pra condição, pois .length]

while(i < numberList.length) {
    compare(numberList[i][0], numberList[i][1]);
    i++;
} 

// então nesse caso vai funcionar sempre, porque sempre inicia em 0, e temos 4 entidades que é maior do que 0

*/

numberList.map(([x, y, z]) => {
    return compare(x,y, z);
});