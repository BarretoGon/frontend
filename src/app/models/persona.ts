export class persona{
    id : Number;
    nombre : String;
    apellido : String;
    edad: String;
    domicilio : String;
    fechaNac : String;
    telefono : Number;
    correo : String;
    url_foto : String;
    titulo : String;
    sobre_mi : String;

    constructor(id : Number ,nombre : String, apellido : String, edad: String, fechaNac: String,  telefono: Number, domicilio : String, correo: String, url_foto : String, titulo : String, sobre_mi : String){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad=edad;
        this.domicilio=domicilio;       
        this.fechaNac=fechaNac;
        this.telefono=telefono;
        this.correo=correo;
        this.url_foto = url_foto;
        this.titulo = titulo;
        this.sobre_mi = sobre_mi;
    }
}