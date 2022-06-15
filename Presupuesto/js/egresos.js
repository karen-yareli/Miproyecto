class egreso extends Registro {

    static idEgresos = 0
    constructor(descripcion, valor){
    super(descripcion, valor)
    this._id = ++egreso.idEgresos
    }
    get id(){
    return this._id
    }
    }