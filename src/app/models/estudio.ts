export class estudio{
    id : Number;
    nombre : String;
    descripcion : String;
    periodo_inicio : Number;
    periodo_fin : Number;

    constructor(id : Number ,nombre : String, descripcion : String, periodo_inicio : Number, periodo_fin : Number){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.periodo_inicio = periodo_inicio;
        this.periodo_fin = periodo_fin;
    }
    
}