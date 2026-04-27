/*funcion que inicializa el proceso de filtrar*/
let categoriaActual = "todas";
/**/
const fulImgBox = document.getElementById("fulImgBox");
fulImg = document.getElementById("fulImg");

/*funcion para abrir la imagen seleccionada*/
function openFullImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

/*funcion para cerrar img y volver a la galeria*/
function closeImg(){
    fulImgBox.style.display = "none";
}




const searchBar = document.querySelector(".search-bar"); //retorna el primer elemento que coinciden con el selector
const cards = document.querySelectorAll(".auto-card"); //retorna todos los elementos que coinciden con el selector

/* funcion para convertir el input a minusculas */ 
searchBar.addEventListener("input", function() {
  const texto = this.value.toLowerCase().trim();
  cards.forEach(filtrarCard);
  

function filtrarCard(card) { // filtro para mostrar solo las cards que coincidan con el input
    const nombre = card.querySelector("h3").textContent.toLowerCase();
    const marca  = card.dataset.categoria;

    if (nombre.includes(texto) || marca.includes(texto)) { //si el nombre o la marca coinciden con el input retorna true
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
}
});