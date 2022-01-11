const compare = (x, y) => {
    let msg;

    if ( x > y ) {
       msg = `O número ${x} é maior que ${y}.`;
    } else if ( x < y ) {
        msg = `O número ${x} é menor que ${y}.`;
    } else {
        msg = `Os dois números são iguais`;
    }

    console.log(msg);
}

// compare(2, 2);

export default compare;