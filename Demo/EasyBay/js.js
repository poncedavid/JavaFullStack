
//PARA EMITIR UN ALERTA
function compra(){
    alert("Esta haciendo click en el carro! 😌")
}

//PARA OCULTAR ELEMENTOS
function esconder(elemto){
    elemto.remove();
}




//PARA CAMBIAR LA IMAGEM
var imagen = document.getElementById("suculenta")


function cambiarImagen(){



        // Verifica si la imagen actual es 'succulents-2.jpg', si es así cambia a 'succulents-1.jpg', si no, cambia a 'succulents-2.jpg'.
        if (imagen.src.includes("succulents-2.jpg")) {
            imagen.src = "imagenes/succulents-1.jpg";
        } else {
            imagen.src = "imagenes/succulents-2.jpg";
        }
}