class Domiclio{ 
    constructor(nombre, calle){ 
    this._nombre = nombre
    this._calle = calle
    }
       

       get nombre(){
        return this._nombre
        
        }
        set nombre(nombre){
        this._nombre = nombre 
        
        }

        get calle(){
            return this._calle
            
            }
            set calle(calle){
            this.calle = calle 

           
           }
              }