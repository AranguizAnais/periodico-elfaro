
document.addEventListener("DOMContentLoaded", () => {
  iniciarReloj();
  configurarFormularioArticulo();
  configurarFormularioContacto();
  actualizarContador();
});

function iniciarReloj() {
  const reloj = document.getElementById("reloj");
  if (!reloj) return;

  function actualizarReloj() {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString("es-CL");
    const hora = ahora.toLocaleTimeString("es-CL");
    reloj.textContent = `${fecha} - ${hora}`;
  }

  actualizarReloj();
  setInterval(actualizarReloj, 1000);
}

function actualizarContador() {
  const contenedor = document.getElementById("contenedor-articulos");
  const contador = document.getElementById("contador");
  if (!contenedor || !contador) return;

  const total = contenedor.querySelectorAll(".article-item").length;
  contador.textContent = total;
}

function crearCardArticulo(titulo, descripcion) {
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4 article-item";

  col.innerHTML = `
    <article class="card h-100 custom-shadow article-card border-0">
      <img src="https://via.placeholder.com/800x500?text=Nuevo+Articulo" class="card-img-top" alt="Imagen de artículo nuevo">
      <div class="card-body">
        <span class="badge badge-category mb-2">Nuevo</span>
        <h5 class="card-title">${escapeHTML(titulo)}</h5>
        <p class="card-text">${escapeHTML(descripcion)}</p>
      </div>
    </article>
  `;

  return col;
}

function configurarFormularioArticulo() {
  const boton = document.getElementById("btn-agregar");
  if (!boton) return;

  boton.addEventListener("click", () => {
    const titulo = document.getElementById("titulo");
    const descripcion = document.getElementById("descripcion");
    const contenedor = document.getElementById("contenedor-articulos");

    if (!titulo || !descripcion || !contenedor) return;

    if (titulo.value.trim() === "" || descripcion.value.trim() === "") {
      alert("Completa todos los campos del artículo.");
      return;
    }

    contenedor.appendChild(crearCardArticulo(titulo.value, descripcion.value));
    titulo.value = "";
    descripcion.value = "";
    actualizarContador();
  });
}

function configurarFormularioContacto() {
  const boton = document.getElementById("btn-contacto");
  if (!boton) return;

  boton.addEventListener("click", () => {
    const nombre = document.getElementById("nombre");
    const mensaje = document.getElementById("mensaje");

    if (!nombre || !mensaje) return;

    if (nombre.value.trim() === "" || mensaje.value.trim() === "") {
      alert("Completa todos los campos del formulario de contacto.");
      return;
    }

    alert("Mensaje enviado correctamente.");
    nombre.value = "";
    mensaje.value = "";
  });
}

function escapeHTML(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}
