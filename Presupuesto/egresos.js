class egresos extends registro {
    idegresos=0
    contructor(descripcion,valor){
        super(descripcion, valor)
        this._id= ++iegresos.idegresos
    }
    get id(){
        return this._id
    }
}
let totalegresos = ()=>{
     let totalegresos = 0
}