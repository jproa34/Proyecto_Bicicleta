///////////////////////////////////reservacion/////////////////////////////////////////

function traerInformacionReservacion(){
    $.ajax({
        url:"http://129.151.105.241:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservaciones(respuesta);
        }
    });
}

function pintarRespuestaReservaciones(respuesta){

    let myTable="<table>";
    myTable+="<tr bgcolor='#186EE6'>";
    myTable+="<td>"+"Id"+"</td>";
    myTable+="<td>"+"Fecha de prestamo"+"</td>";
    myTable+="<td>"+"Fecha de devolución"+"</td>";
    myTable+="<td>"+"Estado"+"</td>";
    myTable+="<td>"+"Actualizar"+"</td>";
    myTable+="<td>"+"Eliminar"+"</td>";
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        posicion = i + 1;
        myTable+="<tr>";
        myTable+="<td>"+posicion+"</td>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionReservacion("+respuesta[i].id+")' class='Actualizar'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarBikes("+respuesta[i].id+")'  class='Borrar'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservacion(){
    let var6 = {
        startDate:$("#RstartDate").val(),
        bdevolutionDate:$("#RdevolutionDate").val(),
        status:$("#Rstatus").val(),
        
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var6),
        
        url:"http://129.151.105.241:8080/api/Reservation/save",

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

function actualizarInformacionReservacion(idElemento){
    
    if($("#Bname").val().length == 0 || $("#Bbrand").val().length == 0 || $("#Byear").val().length == 0 || $("#Bdescription").val().length == 0){
        alert("Todos los campos deben estar llenos");
    }else{
        let elemento = {
            id: idElemento,
            name: $("#Bname").val(),
            brand: $("#Bbrand").val(),
            year: $("#Byear").val(),
            description: $("#Bdescription").val(),
            /*category:{id: +$("#select-category").val()},*/
            //proximamante agregar esta parte
        }
        
        console.log(elemento);
        let dataToSend = JSON.stringify(elemento);

        $.ajax({
            url:"http://129.151.105.241:8080/api/Bike/update",
            type: "PUT",
            data: dataToSend,
            contentType: "application/JSON",
            datatype: 'JSON',

            success: function (response) {
                
                console.log(response);
                $("#resultado2").empty(); 
                alert("se ha Actualizado Correctamente!")

                //Limpiar Campos
                $("#resultado2").empty();
                $("#id").val("");
                $("#Bname").val("");
                $("#Bbrand").val("");
                $("#Byear").val("");
                $("#Bdescription").val("");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("No se Actualizo Correctamente!")
            }
        });
    }
}