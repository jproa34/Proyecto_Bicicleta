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
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        posicion = i + 1;
        myTable+="<tr>";
        myTable+="<td>"+posicion+"</td>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
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