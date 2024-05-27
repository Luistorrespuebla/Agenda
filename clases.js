class MiClase{
    constructor(nombre,apellido){
        this.nombre=nombre
        this.apellido=apellido
    }

    mis_datos(){
        console.log(`
        nombre:${this.nombre},
        apellido${this.apellido}
        `)
    }

}

let clase=new MiClase("diego", "bollas");
clase.set_nombre("julio")
