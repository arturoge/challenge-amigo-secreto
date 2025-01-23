let listaAmigos = [];
const $inputFormulario = document.querySelector("#amigo");
const $contenedorListaAmigos = document.querySelector("#listaAmigos")
const $elementoResultado = document.querySelector("#resultado");

function amigoComponente(nombre) {
  const elementoLista = document.createElement("li");
  const nodoContenido = document.createTextNode(nombre);
  elementoLista.appendChild(nodoContenido);
  return elementoLista;
}

function numeroAleatorio() {
  return Math.floor(Math.random() * listaAmigos.length);
}

function agregarAmigoALista() {
  if ($inputFormulario.value !== "") {
    listaAmigos.push($inputFormulario.value);
    $inputFormulario.value = "";
    actualizarLista();
  } else {
    alert("Ingresa un nombre porfavor!");
  }
}

function actualizarLista() {
  $contenedorListaAmigos.innerHTML = "";
  listaAmigos.forEach((value, index, array) => {
    $contenedorListaAmigos.appendChild(amigoComponente(value))
  })
}

function nuevoSorteo() {
  listaAmigos = [];
  $contenedorListaAmigos.innerHTML = "";
  $elementoResultado.innerHTML = "";
  $inputFormulario.innerHTML = "";
}

function removerDeLista(item){
  const index = listaAmigos.indexOf(item);
  listaAmigos.splice(index, 1)
}

function sortearAmigo() {
  if (listaAmigos.length > 1) {
    const resultadoSorteo = listaAmigos[numeroAleatorio()];
    removerDeLista(resultadoSorteo);
    actualizarLista();
    $elementoResultado.innerHTML = `Tu amigo secreto es ${resultadoSorteo}!`
  } else {
    alert("No hay suficientes nombres para realizar el sorteo!")
  }
}
