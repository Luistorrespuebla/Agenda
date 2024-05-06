const inputIds = ["nombre", "paterno", "materno", "numero", "correo"]; // Se declara una vareable de tipo arreglo, en ella se almacenaran los input del objeto document
const curpGenerado = document.getElementById('curp_generado'); //se solicita el valor de los inputs por medio del metodo getElementById
let contador = 1; // Se declara la vareable contador para asignar ID único a cada registro
const registros = []; // Se declara un arreglo para almacenar los registros

// Función flecha para obtener los valores de los inputs y mostrarlos
const obtener = () => {
    const nombre = convertirMayuscula(document.getElementById('nombre').value.trim()); // Obtiene el valor del input nombre
    const paterno = convertirMayuscula(document.getElementById('paterno').value.trim()); // Obtiene el valor del input paterno
    const materno = convertirMayuscula(document.getElementById('materno').value.trim()); // Obtiene el valor del input materno
    const numero = document.getElementById('numero').value.trim(); // Obtiene el valor del input numero
    const correo = document.getElementById('correo').value.trim(); // Obtiene el valor del input correo

    if (nombre !== "" && paterno !== "" && materno !== "" && numero !== "" && correo !== "") { //Se declara una condicional if que verifica que todos los campos estén llenos
        const nombreCompleto = `${nombre} ${paterno} ${materno}`; // Se declara una vareable y se le asigna como valor la concatenación de; nombre, paterno y materno
        const registro = { id: contador, nombre: nombreCompleto, numero: numero, correo: correo }; // Se crea un objeto con atributos en los cuales se reemplazaran los valores por los de los inputs
        registros.push(registro); // Se agrega el registro al arreglo de registros por medio del metodo push
        mostrarRegistros(); // Se invoca la funcion para mostrar registros
        limpiarInputs(); // Se invoca la función para limpiar los campos de los inputs
        contador++; // Se incrementa el contador
    } else {// En caso de que no se cumpla la condicional if se ejecuta el siguiente bloque de código
        curpGenerado.textContent = "Por favor completa todos los campos"; // Se envía un mensaje de error al alert, si algún campo está vacío
    }
} //Se cierra la función obtener

// Función para convertir a mayúscula la primera letra de una cadena
const convertirMayuscula = (string) => {//Se declara una función flecha que recibe como parametro una cadena 
    return string.charAt(0).toUpperCase() + string.slice(1);//Se retorna el valor de la posición 0 de la cadena y este se convierte a mayúscula por medio del metodo toUppercase
}


// Función para limpiar los campos de los inputs después de agregar los valores
const limpiarInputs = () => {//Se declara una función flecha que no recibe un parametro
    inputIds.forEach(id => { //Se recorre el arreglo inpusIds por medio de un forEach
        document.getElementById(id).value = ""; // Se asigna el valor de cadena vacia a cada posición recorrida
    });
}

const mostrarRegistros = () => {
    curpGenerado.innerHTML = ""; 
    registros.forEach(registro => { 
        const fila = document.createElement('div'); 
        const contenido = document.createElement('span'); 
        contenido.textContent = `Id: ${registro.id}, Nombre: ${registro.nombre}, Telefóno: ${registro.numero}, Email: ${registro.correo}`; 
        fila.appendChild(contenido); 

        const botonEditar = document.createElement('button'); 
        botonEditar.textContent = "Editar"; 
        botonEditar.addEventListener('click', () => editarRegistro(registro.id)); 
        fila.appendChild(botonEditar); 

        const botonEliminar = document.createElement('button'); 
        botonEliminar.textContent = "Eliminar"; 
        botonEliminar.addEventListener('click', () => eliminarRegistro(registro.id)); 
        fila.appendChild(botonEliminar); 

        curpGenerado.appendChild(fila); 
    });
}
const eliminarRegistro = (id) => {
    const indice = registros.findIndex(registro => registro.id === id);
    if (indice !== -1) { 
        registros.splice(indice, 1); 
        mostrarRegistros(); 
    }
}

const editarRegistro = (id) => {
    const indice = registros.findIndex(registro => registro.id === id);
    if (indice !== -1) { 
        const registroEditado = registros[indice]; 
        document.getElementById('nombre').value = registroEditado.nombre.split(' ')[0];
        document.getElementById('paterno').value = registroEditado.nombre.split(' ')[1];
        document.getElementById('materno').value = registroEditado.nombre.split(' ')[2];
        document.getElementById('numero').value = registroEditado.numero;
        document.getElementById('correo').value = registroEditado.correo;
        registros.splice(indice, 1);
        mostrarRegistros();
    }
}