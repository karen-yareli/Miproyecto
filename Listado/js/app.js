const arregloDomicilio= [
    new Domicilio ('Miguel hidalgo',   'Limas #103'),
    new Domicilio ('Santa isabel',   'Acacias #2303'),
    new Domicilio ('Francisco villa',   'cocos #345'),



    ]
    
    function mostrar(){
        let Texto =''
        for(let item of arregloDomicilio){
        Texto += `<li>${item.nombre} ${item.calle}</li>`
        }
        document.getElementById('direcciones').innerHTML = Texto 
   
       
        
        }


        function agregarDomicilio(){
            const formulario = document.forms["formulario"]
            const nombre = formulario["nombre"]
            const calle = formulario["calle"]
            const objDomicilio = new Domicilio(nombre.value, calle.value)
            arregloDomicilio.push(objDomicilio)
            mostrarDomicilio()
           


        }