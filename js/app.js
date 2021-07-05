let usuarios = [];
let nombre = [];
let edad = [];
let contador;
let control = false;
let mayor;

while(control == false) {

    contador = parseInt(prompt("Buenas! Diga la cantidad de datos que va a utilizar: "));
    if (!isNaN(contador)) {
        control = true;
    }
}

control = false;

for (let i = 0; i < contador; i++) {

    let itemNombre = prompt("Ingrese su nombre para visualizar la página: ");

    nombre.push(itemNombre)

    while(control == false) {
        let itemEdad = parseFloat(prompt(`Verificaremos su edad ${nombre[i]}, por favor ingresela a continuación: `));

        if (!isNaN(itemEdad)) {
            edad.push(itemEdad)
            control = true;
        }
        else {
            console.log(`Hubo un error en el numero que ingreso, vuelta a intentarlo ${nombre[i]}`);
        }
    }

    control = false;
    
}

usuarios.push({
    nombres: [...nombre],
    edades: [...edad]
})

for (let i = 0; i < contador; i++) {
    if(usuarios[0].edades[i] > 0 && usuarios[0].edades[i] < 18) {
        alert(`Eres menor de edad aún, ${usuarios[0].nombres[i]}!`);
    } else if (usuarios[0].edades[i] >= 18) {
        alert(`Eres mayor de edad, ${usuarios[0].nombres[i]}!`);
        mayor = usuarios[0].nombres[i]
    }  
}