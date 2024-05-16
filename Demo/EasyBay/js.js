function compra(){
    alert("Esta haciendo click en el carro! 😌")
}


function esconder(elemto){
    elemto.remove();
}


function cambiarImgen(){

}



function sumaDosNumeros(numero1,numero2){
    suma = numero1 + numero2;
    return suma
}


function multiplicaTresNumeros(a,b,c){
    resultado = a*b*c;
    return resultado
}



let resultadoSuma = sumaDosNumeros(10,5)

var resultadoMultiplicacion = multiplicaTresNumeros(100,65,90)

console.log(resultadoMultiplicacion)




//PARA CAMBIAR LA IMAGEM

var suculenta = document.getElementById("suculenta")


function cambiarImagen(){

    if(suculenta.src == "imagenes/succulents-2.jpg"){
        suculenta.src = "imagenes/succulents-1.jpg"
    }else{
        suculenta.src = "imagenes/succulents-2.jpg"
    }
}