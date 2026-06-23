function generarTablas(){

    let tabla=document.getElementById("txtTabla").value;
    let contenedor = document.getElementById("contenedor");
    if (tabla == "" || isNaN(tabla)) {
    contenedor.innerHTML = '<div class="fila">Por favor, escribe 2 numeros</div>';
    return;
}

    
   

    let contenido = "Contenido Inicial";
    for(let i=1; i<=10; i++){
       contenido += '<div class="fila">'+ tabla + ' x 2' + i + ' =2 ' + (tabla*i) + '</div>';


    }

    contenedor.innerHTML= contenido;

}