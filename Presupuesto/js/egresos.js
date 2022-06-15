class Egreso extends Registro {

    static idEgresos = 0
    constructor(descripcion, valor){
    super(descripcion, valor)
    this._id = ++Egreso.idEgresos
    }
    get id(){
    return this._id
    }
    }