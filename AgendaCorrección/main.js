const input=["nombre", "apellidos", "email", "tel"];
let valores =[]; 
let datos_agenda = []; 

const obtener = () => {
    valores = [];
    input.forEach((campo) => {
        valores.push(document.getElementById(campo).value); 
    });
}



const validar = () => {
    for(let i = 0; i < valores.length; i++) {
        if(valores[i] == "") {
            alert(`El campo ${input[i]} está vacío`);
            return false;
        }
    }
    return true; 
}

const ejecutar = () => {
    obtener();
    if(validar()) {
        mostrar_info();
    }
}

const eliminarRegistro = (indice) => {
    datos_agenda.splice(indice, 1);
    mostrarInfo();
}

const actualizarRegistro = (indice) => {
    if (validar()) {
        datos_agenda[indice] = valores.slice(); // Actualizar el registro con los nuevos valores
        mostrarInfo();
    }
}

