function traerInformacionCategorias(){
    $.ajax({
        url:"http://129.151.105.241:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){

    let myTable="<table>";
    myTable+="<tr bgcolor='#186EE6'>";
    myTable+="<td>"+"Id"+"</td>";
    myTable+="<td>"+"Name"+"</td>";
    myTable+="<td>"+"Descripcion"+"</td>";
    myTable+="<td>"+"Actualizar"+"</td>";
    myTable+="<td>"+"Eliminar"+"</td>";
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        posicion = i + 1;
        myTable+="<tr>";
        myTable+="<td>"+posicion+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionCategorias("+respuesta[i].id+")' class='Actualizar'>Actualizar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.105.241:8080/api/Category/save",
       
        
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

function actualizarInformacionCategorias(idElemento){
    
    if ($("#Cname").val().length==0 || $("#Cdescription").val().length==0){

        alert("Todos los campos son obligatorios");
    }else{
    
    
    let myData={
        id:idElemento,
        name:$("#Cname").val(),
        description:$("#Cdescription").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.105.241:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Cname").val("");
            $("#Cdescription").val("");
            traerInformacionCategorias();
            alert("se ha Actualizado correctamente la categoria")
        }
    });}

}

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
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        posicion = i + 1;
        myTable+="<tr>";
        myTable+="<td>"+posicion+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
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
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        posicion = i + 1;
        myTable+="<tr>";
        myTable+="<td>"+posicion+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
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
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        posicion = i + 1;
        myTable+="<tr>";
        myTable+="<td>"+posicion+"</td>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
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