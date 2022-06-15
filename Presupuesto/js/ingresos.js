class ingreso extends Registro {

        static idIngresos = 0
        constructor(descripcion, valor){
        super(descripcion, valor)
        this._id = ++ingreso.idIngresos
        }
        get id(){
        return this._id
        }
        }
