const cursos = document.getElementById('lista-cursos');
const contenedorLista = document.getElementById('lista-contenedor');
const imagenCarrito = document.getElementById('carrito');
let arregloCursos = [];

cargarListeners();

function cargarListeners (){
    cursos.addEventListener('click', comprarCurso);
    imagenCarrito.addEventListener('click', mostrarCarrito);
}

function comprarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('btn')){
        let curso = e.target.parentElement;
        leerDatosCurso(curso);
    }
}

function leerDatosCurso(curso){
    const infoCurso = {
        titulo: curso.querySelector('h3').textContent,
        precio: curso.querySelector('.precio').textContent,
        imagen: curso.querySelector('img').src,
    }
    insertarCarrito(infoCurso);
}

function insertarCarrito(curso){
    arregloCursos.push(curso);
    console.log(arregloCursos);
    const fila = document.createElement('tr');
    arregloCursos.forEach(arregloCurso =>{
        fila.innerHTML = `
        <th><img src="${arregloCurso.imagen}" width="50px"></th>
        <th>${arregloCurso.titulo}</th>
        <th>${arregloCurso.precio}</th>
        <th id="eliminar"><i class="fa fa-trash" aria-hidden="true"></i></th>
    `
    });
    valor.textContent = arregloCursos.length;
    contenedorLista.appendChild(fila);
}

function mostrarCarrito(){
    document.querySelector('.nav-menu-show').classList.toggle('show');
}

