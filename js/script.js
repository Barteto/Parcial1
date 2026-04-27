let categoriaActual = "todas";

const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");

function openFullImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

function closeImg(){
    fulImgBox.style.display = "none";
}

const botones = document.querySelectorAll(".btn-categoria");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        categoriaActual = boton.dataset.categoria;
        console.log("Categoría seleccionada:", categoriaActual);
        filtrar(); 
    });
});



function filtrar(){
    const imagenes = document.querySelectorAll(".img-gallery img");

    imagenes.forEach(img => {
        const categoriaImg = img.dataset.categoria;

        if(categoriaActual === "todas" || categoriaImg === categoriaActual){
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
