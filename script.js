class Doctor{
    constructor(nombre, apellido, correo, telefono, dni){
        this.nombre = nombre 
        this.apellido = apellido
        this.correo = correo
        this.telefono = telefono
        this.dni = dni
    }

    getNombre(){
        return this.nombre
    }
    getPaciente(){
        return this.apellido
    }
    getCorreo(){
        return this.correo
    }
    getTelefono(){
        return this.telefono
    }
    getDni(){
        return this.dni
    }
}

lista = [];
i = 0


function RegDoctor() {
    nuevaPersona = new Doctor (document.getElementById("nombre").value, document.getElementById("apellido").value,document.getElementById("correo").value, document.getElementById("telefono").value, document.getElementById("dni").value)
    lista.push(nuevaPersona);
    mostrarPersona();
}

function mostrarPersona() {
    if (lista.length > 0) {
        document.getElementById("infoN").innerHTML = lista[i].getNombre();
        document.getElementById("infoP").innerHTML = lista[i].getPaciente();
        document.getElementById("infoC").innerHTML = lista[i].getCorreo();
        document.getElementById("infoT").innerHTML = lista[i].getTelefono();
        document.getElementById("indoD").innerHTML = lista[i].getDni();

    }else{
            alert("No hay personas");
    }
    
}

function siguienteDoctor() { 
    if (lista.length > 0) { 
        if (i < lista.length - 1) {
            i++;
            mostrarPersona();
        }
    }else{
        alert("No hay personas");
    }
}


function anteriorDoctor() { 
    if (lista.length > 0) { 
        if (i > 0 ) {
            i--;
            mostrarPersona();
        }
    }else{
        alert("No hay personas");
    }
}

function regdoc(){
    
    if (document.getElementById("contenedor").style.display === "none") {
        document.getElementById("contenedor").style.display = "block";
    }else{
        document.getElementById("contenedor").style.display = "none";
    }
}

