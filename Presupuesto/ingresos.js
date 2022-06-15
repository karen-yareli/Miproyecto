class ingreso extends registro {
    idingresos=0
    contructor(descripcion,valor){
        super(descripcion, valor)
        this._id= ++ingreso.idingresos
    }
    get id(){
        return this._id
    }
}
