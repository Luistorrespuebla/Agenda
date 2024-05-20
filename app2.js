// const nombre = ["Diego", "Luisa", "Laura", "Pedro"];
// const apellidos = ["Lopez", "Medina", "Suarez", "Ramirez"];
// const carreras = ["Sistemas", "Gestion", "Industrial", "Turismo"];

// let [alumno1, alumno2,alumno3,alumno4]=nombre;
// let [al1,al2,al3,al4]=apellidos;
// let[alu1,alu2,alu3,alu4]=carreras;

// let arreglo3=[...nombre,...apellidos,...carreras];

// let objetos = [];
// let index=0;

// arreglo3.map((nombre, index) => {
//     objetos.push({
//         nombre: nombre,
//         apellido: apellidos[index],
//         carrera: carreras[index]
//     });
// });

// console.log(objetos.map(objeto => `{nombre: '${objeto.nombre}', apellido: '${objeto.apellido}', carrera: '${objeto.carrera}'} `));
// console.log(typeof(objetos[0]));

const nombre=["Diego","Luisa","Laura","Pedro"];
const apellidos=["Lopez", "Medina", "Suarez", "Ramirez"];
const carreras=["Sistemas", "Gestion","Industrial","Turismo"];

const destructurarDatos=(nombres, apellidos, carreras)=> {
    const [alumno1, alumno2, alumno3, alumno4] = nombres;
    const [al1, al2, al3, al4] = apellidos;
    const [alu1, alu2, alu3, alu4] = carreras;
    
    return { alumnos: [alumno1, alumno2, alumno3, alumno4], 
             apellidos: [al1, al2, al3, al4], 
             carreras: [alu1, alu2, alu3, alu4] };
}

const crearArregloDeTres=(datos)=> {
    return [...datos.alumnos, ...datos.apellidos, ...datos.carreras];
}

const crearArregloDeObjetos=(nombres, apellidos, carreras)=> {
    const datos = destructurarDatos(nombres, apellidos, carreras);
    const arreglo3 = crearArregloDeTres(datos);
    
    const objetos = arreglo3.map((nombre, index) => ({
        nombre: nombre,
        apellido: datos.apellidos[index],
        carrera: datos.carreras[index]
    }));
    
    return objetos;
}

const objetos = crearArregloDeObjetos(nombre, apellidos, carreras);
console.log(objetos);
console.log(typeof(objetos[0]));
