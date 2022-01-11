// Objeto é um tipo de dado que pode conter vários outros dados. 

const person = {
    name: "Lais",
    age: 23,
    teacher: false,
    sayHello: function () {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age} anos. `);
        // O this aqui significa que é o próprio objeto person. 

       /* sayHello() {
            console.log(`Meu nome é ${this.name} e minha idade é ${this.age} anos. `);

            alternativa para não escrever function pois arrow function não tem acesso ao contexto então não funciona dentro do objeto.
            */
    },

};

// person.sayHello();

// person objeto .sayHello é a função dentro do objeto.

// ======================= //


Object.keys(person).map((key) => console.log(`${key}: ${person[key]}`));

// entra a key e sai  a key com valor. key é a propriedade do objeto. ai passo o objeto que quero mapear, no caso person, e dps a chave q é a variável que q vou receber, ai na saída eu solto, chave e o valor do objeto na posição chave.

