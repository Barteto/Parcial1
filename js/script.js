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


const botones = document.querySelectorAll(".btn-categoria");
/*cuenta boton por boton*/
botones.forEach(boton => {
    /*cuando hace click el usuario detecta y inicializa el evento*/
    boton.addEventListener("click", () => {

    categoriaActual = boton.dataset.categoria;

    console.log("Categoría seleccionada:", categoriaActual);

    filtrar(); 
    });
});