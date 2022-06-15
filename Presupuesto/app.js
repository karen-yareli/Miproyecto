const ingresos =   [ 
    new ingreso('renta de luz y agua',1500),
    new ingreso('renta de local y gas',4000),
    new ingreso('materia prima ', 946),
]
const egresos =   [ 
    new ingreso('renta de internet',1500),
    new ingreso('sistema ',4000)._descripcion,
   
]
let cargarApp = () => {
    cargarCabecera()
    cargarIngresos() 
}
let totalIngresos=()=> {
    let presupuesto = totalIngresos() - totalIngresos ()
    for( let ingreso of ingreso){
        totalIngresos+- ingreso.valor
    }
    return totalIngresos
}
let cargarCabecera = () => {
    let presupuesto = totalIngresos()- totalIngresos()
    let porcentajeegreso =totalIngresos()/totalIngresos()
    document.getElementById('prosupuesto').innerHTML = presupuesto
    document.getElementById('porcentaje').innerHTML = porcentaje

}
