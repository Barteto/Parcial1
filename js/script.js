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


