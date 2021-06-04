//  EJERCICIO 1 JEJE
function ejercicio1() {
    //se define las variables
var not = document.getElementById("nota").value;
var nuevoNumero = parseInt(not);
//se genera un if para comparar la nota
if (parseInt(not) <= 3) {
console.log("Muy deficiente");
} else if (parseInt(not) <= 5) {
console.log("Insuficiente");
} else if (parseInt(not) <=6 ) {
    console.log("Suficiente");
} else if (parseInt(not) <=7) {
 console.log("Bien");
}else if (parseInt(not) <=9) {
    console.log("Notable");
} else if (parseInt(not) <= 10) {
    console.log("Sobresaliente!");
}
alert(`Mire el resultado por consola!`);
//se muestra por consola
}

//  EJERCICIO 2 JEJE
const ejercicio2 = () => {
    // define variable texto donde se va a guardar cada nuevo input
    let text = '';

    // se inicia un while
    while (true) {
        // se guarda input en una variable
        let input = prompt('Ingrese una cadena de texto a concatenar con las siguientes');

        // se chequea se se clickeo cancelar o se ingresó algún dato
        if(input == null) {
            // si se clickeo cancelar se sale del while
            console.log('cancel');
            break;
        }else{
            // sino se concatena el input con la variable text
            text = `${text}-${input}`;
        }
    }
    // se elimina el primer caracter del text, es un guion
    let formattedText = text.substring(1);

    // se muestra el resultado
    alert(`Las cadenas concatenadas son: ${formattedText}`);
}

//  EJERCICIO 3 JEJE
const ejercicio3 = () => {
    // define variable texto donde se va a guardar cada nuevo input
    let sum = 0;

    // se inicia un while
    while (true) {
        // se guarda input en una variable
        let input = prompt('Ingrese un numero a sumar');

        // se chequea si clickeo cancelar o se ingresó algo
        if(input == null) {
            // si se clickeo cancelar se sale del while
            console.log('cancel');
            break;
        }else if(isNaN(parseFloat(input))){// chekea si e un numero
            alert('Este programa solo permite ingresar numeros, pruebe nuevamente.')
        }else{// sumar al total
            sum += parseFloat(input);
        }
    }

    // se muestra el resultado
    alert(`La sumatoria de los numeros es: ${sum}`);
}
//  EJERCICIO 4 JEJE
const ejercicio4 = () => {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    // se inicia un while
    while (true) {
        // se guarda input en una variable
        let input = prompt('Ingrese DNI a calcular');
        let parsedInput = parseFloat(input);

        // se chequea se se clickeo cancelar o se ingresó algún dato
        if(input == null) {
            // si se clickeo cancelar se sale del while
            console.log('cancel');
            break;
        }else if(isNaN(parsedInput)){// check si es NaN
            alert('Este programa solo permite ingresar numeros, pruebe nuevamente.');
        }else if(parsedInput < 0 || parsedInput > 99999999){// out of bounds
            alert('Este programa solo permite numeros del 0 al 99999999, pruebe nuevamente.');
        }else{
            alert(`La letra correspondiente al DNI es "${letras[parsedInput%23]}". (resto ${parsedInput%23})`)
        }
    }
}

//  EJERCICIO 5 JEJE
const ejercicio5 = () => {
    let piramide = '';
    let altPiramide = '';
    let lenght = 30;

    for(let i=1; i<= lenght; i++){
    
        let str = i.toString().repeat(i);
        piramide += str + '\n';

        let altStr = ' '.repeat(lenght-i);
        let altStr2 = i < 10 ? i.toString().repeat(i*2-1) : i.toString().repeat(i);
        altPiramide += (altStr + altStr2 + altStr) + '\n';
    }

    alert('Ver resultado en consola.');
    console.log('Piramide original:');
    console.log(piramide);
    console.log('---------------------------------------------------------------------------------');
    console.log('Piramide centrada (se rellenan los indices menores a 10):');
    console.log(altPiramide);
}

//  EJERCICIO 6 :)
const ejercicio6 = () => {
    let piramide = '';
    let altPiramide = '';
    let lenght = prompt('Ingrese cantidad de filas de la piramide:');

    if(isNaN(parseFloat(lenght))){// check si es NaN
        alert('Este programa solo permite ingresar numeros, ingrese nuevamente.')
    }else{
        for(let i = lenght; i >= 1; i--){
        
            let str = i.toString().repeat(i);
            piramide += str + '\n';
            let altStr = ' '.repeat(lenght-i);
            let altStr2 = i < 10 ? i.toString().repeat(i*2-1) : i.toString().repeat(i);
            altPiramide += (altStr + altStr2 + altStr) + '\n';
    
        }
    
        alert('Ver resultado en la consola.');
        console.log('Piramide original:');
        console.log(piramide);
        console.log('---------------------------------------------------------------------------------');
        console.log('Piramide centrada (se rellenan los indices menores a 10):');
        console.log(altPiramide);
    }
}

//  EJERCICIO 7 :D
const ejercicio7 = () => {
    let res = '';
    let iteracion = 0;

    for (let i = 1; i < 501; i++) {
        iteracion++;
        if(i%4 === 0){
            res += `${i} (Multiplo de 4) \n`;
        }else if(i%9 === 0){
            res += `${i} (Multiplo de 9) \n`;
        }else{
            res += `${i} \n`;
        }

        if(iteracion === 5){
            res += '———————————————————— \n';
            iteracion = 0;
        }
    }
    
    alert('Ver resultado en la consola.');
    console.log(res)
}