///////////////////Bikes//////////////////////////////////////
function traerInformacionBikes(){
    $.ajax({
        url:"http://129.151.105.241:8080/api/Bike/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaBikes(respuesta);
        }
    });
}

function pintarRespuestaBikes(respuesta){

    let myTable="<table>";
    myTable+="<tr bgcolor='#186EE6'>";
    myTable+="<td>"+"Id"+"</td>";
    myTable+="<td>"+"Name"+"</td>";
    myTable+="<td>"+"Brand"+"</td>";
    myTable+="<td>"+"Year"+"</td>";
    myTable+="<td>"+"Description"+"</td>";
    myTable+="<td>"+"Actualizar"+"</td>";
    myTable+="<td>"+"Eliminar"+"</td>";
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        posicion = i + 1;
        myTable+="<tr>";
        myTable+="<td>"+posicion+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionBikes("+respuesta[i].id+")' class='Actualizar'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarBikes("+respuesta[i].id+")'  class='Borrar'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionBikes(){
    let var3 = {
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://129.151.105.241:8080/api/Bike/save",
       
        
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

function actualizarInformacionBikes(idElemento){
    
    if($("#Bname").val().length == 0 || $("#Bbrand").val().length == 0 || $("#Byear").val().length == 0 || $("#Bdescription").val().length == 0){
        alert("Todos los campos deben estar llenos")
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
        alert("funciono bien")
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