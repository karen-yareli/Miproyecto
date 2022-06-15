class registro {
    constructor(descripcion, valor){
        this._descripcion=descripcion
        this._valor=valor
    }
    get descripcion(){
        returnthis._descripcion
    }
    set descripcion(descripcion){
        this._descripcion=descripcion
    }
    get valor(){
        returnthis._valor
    }
    set valor(valor){
        this._valor=valor
    }
    
}