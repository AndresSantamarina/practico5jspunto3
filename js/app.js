/*
3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
*/

const formularioTarea = document.querySelector('form');
const seccion = document.querySelector('section');

function agregarTarea(e) {
    e.preventDefault()

    const inputTarea = document.querySelector('input');
    const tareaNueva = document.createElement('li');
    tareaNueva.innerHTML = `${inputTarea.value} <button onclick="eliminarTarea(this)" class= "btn btn-danger m-2">Eliminar</button>`;
    tareaNueva.className = 'text-center my-2'
    seccion.appendChild(tareaNueva);
    formularioTarea.reset();
}

function eliminarTarea(btnEliminar){
    console.log(seccion.children)
    const elementoPadre = btnEliminar.parentNode;
    seccion.removeChild(elementoPadre);
}

formularioTarea.addEventListener('submit', agregarTarea)