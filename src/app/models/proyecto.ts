export class proyecto{
    id : Number;
    nombre : String;
    descripcion : String;
  
    link: String;

    constructor(id : Number ,nombre : String, descripcion : String, link : String){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.link = link;
    }
    
}