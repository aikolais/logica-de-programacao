// const notas = [10, 6.5, 8, 7.5];

// notas.push(2)

// console.log(notas);

// let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

// console.log(media);


// const nomes = ['Lais', 'Aiko', 'João', 'Camila', 'André', 'Bandida', 'Preto', 'Donatella', 'Matilda', 'Vitória', 'Cristiane', 'Lair', 'Lucia', 'Larissa', 'Aline', 'Ricardo', 'Rafaela', 'Marina', 'Bianca', 'Jenifer'];

// const sala1 = nomes.slice(0,nomes.length/2);
// const sala2 = nomes.slice(nomes.length/2);

// console.log(`sala 1 é ${sala1}`);
// console.log(`sala 2 é ${sala2}`);

const listaDeChamada = ['Lais', 'Aiko', 'João', 'Camila', 'André', 'Bandida'];


                      // primeirro parametro onde começa a remoção, qts parametros vai tirar, incluir.  
listaDeChamada.splice(1,2, 'Larissa');

console.log(listaDeChamada);