const arregloEstudiantes = [new Estudiante("Pepporoni", "Triplequeso")];

function mostrarEstudiantes() {
  let Texto = "";
  for (let item of arregloEstudiantes) {
    Texto += `<li>${item.nombre} ${item.apellido}</li>`;
  }
  document.getElementById("alumnos").innerHTML = Texto;
}

function agregarEstudiante() {
  const formulario = document.forms["formulario"];
  const nombre = formulario["nombre"];
  const apellido = formulario["apellido"];
  const objEstudiante = new Estudiante(nombre.value, apellido.value);
  arregloEstudiantes.push(objEstudiante);
  mostrarEstudiantes();
}
