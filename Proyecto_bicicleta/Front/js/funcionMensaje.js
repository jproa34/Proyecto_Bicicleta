////////////////////////////////////MENSAJE/////////////////////////////////////////

function traerInformacionMensaje(){
    $.ajax({
        url:"http://129.151.105.241:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensaje(respuesta);
        }
    });
}

function pintarRespuestaMensaje(respuesta){

    let myTable="<table>";
    myTable+="<tr bgcolor='#186EE6'>";
    myTable+="<td>"+"Id"+"</td>";
    myTable+="<td>"+"Mensaje"+"</td>";
    myTable+="<td>"+"Nombre de bicicleta"+"</td>";
    myTable+="<td>"+"Actualizar"+"</td>";
    myTable+="<td>"+"Eliminar"+"</td>";
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        posicion = i + 1;
        myTable+="<tr>";
        myTable+="<td>"+posicion+"</td>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionMensaje("+respuesta[i].id+")' class='Actualizar'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCategoria("+respuesta[i].id+")'  class='Borrar'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensaje(){
    let var5 = {
        messageText:$("#MmessageText").val(),
        name:$("#Mname").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        
        url:"http://129.151.105.241:8080/api/Message/save",

        success:function(response) {
            console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()

    },
    
    error: function(jqXHR, textStatus, errorThrown) {
          window.location.reload()
        alert("No se guardo correctamente");


    }
    });

}

function actualizarInformacionMensaje(idElemento){
    let myData={
        idMessage:idElemento,
        messageText:$("#MmessageText").val(),
       // skate:{id: +$("#select-skate").val()},
       // client:{idClient: +$("#select-client").val()},

    


    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.105.241:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultado4").empty();
            $("#MmessageText").val("");
           
            autoInicioMensajes();
            alert("se ha Actualizado correctamente el Mensaje")
        }
    });

}