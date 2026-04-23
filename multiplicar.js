function generarTablas(){

    let tabla=document.getElementById("txtTabla").value;
    let contenedor = document.getElementById("contenedor");
    if (tabla == "" || isNaN(tabla)) {
    contenedor.innerHTML = '<div class="fila">Por favor, escribe un número</div>';
    return;
}

    
   

    let contenido = " ";
    for(let i=1; i<=10; i++){
       contenido += '<div class="fila">'+ tabla + ' x ' + i + ' = ' + (tabla*i) + '</div>';


    }

    contenedor.innerHTML= contenido;

}