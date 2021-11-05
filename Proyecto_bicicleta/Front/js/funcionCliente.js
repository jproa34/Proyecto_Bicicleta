//////////////////////Clientes//////////////////////////////////
function traerInformacionClientes(){
    $.ajax({
        url:"http://129.151.105.241:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable="<table>";
    myTable+="<tr bgcolor='#186EE6'>";
    myTable+="<td>"+"Id"+"</td>";
    myTable+="<td>"+"Name"+"</td>";
    myTable+="<td>"+"Age"+"</td>";
    myTable+="<td>"+"Email"+"</td>";
    myTable+="<td>"+"Password"+"</td>";
    myTable+="<td>"+"Actualizar"+"</td>";
    myTable+="<td>"+"Eliminar"+"</td>";
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        posicion = i + 1;
        myTable+="<tr>";
        myTable+="<td>"+posicion+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionCliente("+respuesta[i].id+")' class='Actualizar'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCliente("+respuesta[i].id+")'  class='Borrar'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://129.151.105.241:8080/api/Client/save",
       
        
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

function actualizarInformacionCliente(idElemento){
    if($("#CLemail").val().length == 0 || $("#CLpassword").val().length == 0 || $("#CLname").val().length == 0 || $("#CLage").val().length == 0){
        alert("Todos los campos deben estar llenos")
    }else{

        let myData={
            idClient:idElemento,
            email:$("#CLemail").val(),
            password:$("#CLpassword").val(),
            name:$("#CLname").val(),
            age:$("#CLage").val(),
            
        
        };



        console.log(myData);
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url:"http://129.151.105.241:8080/api/Client/update",
            type:"PUT",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",


            success:function(respuesta){
                //Limpiar Campos
                $("#resultado3").empty();
                $("#idClient").val("");
                $("#CLemail").val("");
                $("#CLpassword").val("");
                $("#CLname").val("");
                $("#CLage").val("");
                //autoInicioCliente();
                alert("se ha Actualizado correctamente Cliente")
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("No se Actualizo Correctamente!")
            }

        });

    }


}