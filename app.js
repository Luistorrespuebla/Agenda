
        // const misDatos=(nombre,apellido,edad)=>{
        //     console.log(`
        //     nombre:${nombre},
        //     apellido:${apellido},
        //     edad:${edad}
        //     `);
        // }
        
        // misDatos("juan","alberto",[20,"bhbj",25]); 
        
        // const misDatos1 = (nombre, apellido, [d1, d2, d3]) => {
        //     console.log(`
        //     nombre: ${nombre},
        //     apellido: ${apellido},
        //     d1: ${d1},
        //     d2: ${d2},
        //     d3: ${d3}
        //     `);
        // }
        
        // misDatos1("juan", "alberto", [20, "bhbj", 25]);

        // const misDatos2 = (nombre, apellido, edad) => {
        //     let [d1, d2, d3] = edad;
        //     console.log(`
        //     nombre: ${nombre},
        //     apellido: ${apellido},
        //     d1: ${d1},
        //     d2: ${d2},
        //     d3: ${d3}
        //     `);
        // }
        
        // misDatos2("juan", "alberto", [20, "bhbj", 25]);
        
        // const misDatos2=(...datos)=>{
        //     console.log(`
        //     nombre:${datos[0]},
        //     apellido:${datos[1]},
        //     edad:${datos[2]}
        //     `);
        // }

        // const misDatos3=(datos)=>{
        //     console.log(`
        //     nombre:${datos[0]},
        //     apellido:${datos[1]},
        //     edad:${datos[2]}
        //     `);
        // }
        
        // misDatos4=(...datos)=>{
        //     let[nombre, apellido,edad]=datos;
        //     datos.map((dato)=>{
        //         console.log(dato)
        //     })
        // }
        
        //misDatos2("juan","alberto",23);                                         
        //misDatos3("juan","alberto",23); 
        
// const mi_datos=(...datos)=>{
//     datos.map((dato)=>{
//         if(Array.isArray(dato)){
//             dato.map(data=>{
//                 console.log(data)
//             });

//         }else{
//             console.log(dato)
//         }
//     })
// }

// mi_datos(...["juan","perez",[20,"hkhkkhhj",22],"perra", "gato"])
                                                                                                                                                                                                                                               
// let arreglo1=[1,2,3,4,5];
// let arreglo2=[6,7,8,9,0];

// let arreglo3=["laura","ana","carmen"];



// const nombre=["diego","Luisa","Laura","Pedro"];

// const apellidos=["Lopez", "Medina", "Suarez", "Ramirez"];

// const carreras=["Sistemas", "Gestion","Industrial","Turismo"];


// let [alumno1, alumno2,alumno3,alumno4]=nombre;
// let [al1,al2,al3,al4]=apellidos;
// let[alu1,alu2,alu3,alu4]=carreras;

// let arreglo3=[...nombre,...apellidos,...carreras];

// let objetos=[];
// let pos=0;
// arreglo3.map(nombre=>{
//     objetos.push({"nombre":nombre,"apellido":apellidos[pos],"carrera":carreras[pos]})
//     console.log(objetos);
// })

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
    
    let objetos=[];
    let pos=0;
    arreglo3.map(nombre=>{
     objetos.push({"nombre":nombre,"apellido":apellidos[pos],"carrera":carreras[pos]})
     console.log(objetos);
    })
    
    return objetos;
}

const objetos = crearArregloDeObjetos(nombre, apellidos, carreras);
console.log(objetos);
console.log(typeof(objetos[0]));
