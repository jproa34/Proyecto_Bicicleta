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