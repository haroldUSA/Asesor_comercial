$(document).ready(function (e) {
    //$('#ID').hide();
    $('#Mid').hide(0);
    $('#Mmarca').hide(0);
    $('#Mmodelo').hide(0);
    $('#Mprocesador').hide(0);
    $('#Mos').hide(0);
    $('#Mdescription').hide(0);
    $('#Mmemoria').hide(0);
    $('#Mdisco_duro').hide(0);
    $('#Mdisponible').hide(0);
    $('#Mprecio').hide(0);
    $('#Mcantidad').hide(0);
    $('#Mfotografia').hide(0);
    $('#navbarDropdown1').hide(0);
    $('#navbarDropdown2').hide(0);
    $('#IDType').hide(0);
});
$('#submitbtn').click(function (e) {
    e.preventDefault()
    var id = $('#ID').val();
    var marca = $('#Marca').val();
    var modelo = $('#Modelo').val();
    var procesador = $('#Procesador').val();
    var os = $('#OS').val();
    var descripcion = $('#Descripcion').val();
    var memoria = $('#Memoria').val();
    var discoduro = $('#Disco_duro').val();
    var precio = $('#Precio').val();
    var cantidad = $('#Cantidad').val();
    var fotografia = $('#Fotografia').val();
    var disponibilidad = $('#IDType').val();
    
    if(disponibilidad==1){
        type="true";
    }else{
        type="false";
    }
    console.log(id);
    console.log(marca);
    console.log(modelo);
    console.log(procesador);
    console.log(os);
    console.log(descripcion);
    console.log(memoria);
    console.log(discoduro);
    console.log(precio);
    console.log(cantidad);
    console.log(fotografia);
    console.log(disponibilidad);

    let datos={
       // id:id,
        brand:marca,
        model: modelo,
        procesor:procesador,
        os:os,
        description:descripcion,
        memory:memoria,
        hardDrive:discoduro,
        availability:type,
        price:precio,
        quantity:cantidad,
        photography:fotografia
    }
   
    let datosPeticion = JSON.stringify(datos);
    console.log(datosPeticion);
    if (validarEditar()) {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.111.220:8080/api/laptop/new",
       // url: "http://localhost:8080/api/laptop/new",
        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
        data : datosPeticion,

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'POST',

        contentType:"application/JSON",

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            $("#mensajes").show(1000);
            $("#mensajes").html("Registro Agregado...");
            $("#mensajes").hide(1000);
            //location.reload();
            clearfield();
             mensaje();
            // redireccionar();
             //getid();
            //listar();
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
            $("#mensajes").hide(1000);
        }
    });
    }

    function clearfield() {
        $("#ID").val("");
        $("#Marca").val("");
        $("#Modelo").val("");
        $('#Modelo').val("");
        $('#Procesador').val("");
        $('#OS').val("");
        $('#Descripcion').val("");
        $('#Memoria').val("");
        $('#Disco_duro').val("");
        $('#Precio').val("");
        $('#Cantidad').val("");
        $('#Fotografia').val("");
        $('#IDType').val("");
    }
});

function selectType(llaveRegistro) {
    console.log(llaveRegistro);
    $('#navbarDropdown').hide(5);
    var idNumber = $('#IDnumber').val();
    for (let index = 1; index <= 2; index++) {
        if (llaveRegistro == index) {
            console.log("Entro");
            $('#navbarDropdown' + llaveRegistro).show(5);
            $("#IDType").val(llaveRegistro);
        } else {
            $('#navbarDropdown' + index).hide(5);
        }
    }
}

function validarEditar(){
    $('#Mid').hide();
    $('#Mmarca').hide();
    $('#Mmodelo').hide();
    $('#Mprocesador').hide();
    $('#Mos').hide();
    $('#Mdescription').hide();
    $('#Mmemoria').hide();
    $('#Mdisco_duro').hide();
    $('#Mdisponible').hide();
    $('#Mprecio').hide();
    $('#Mcantidad').hide();
    $('#Mfotografia').hide();
   // $('#navbarDropdown1').hide();
   // $('#navbarDropdown2').hide();
    $('#IDType').hide();
    //obtiene valores
    let id = $('#ID').val();
    let marca = $('#Marca').val();
    let modelo = $('#Modelo').val();
    let procesador = $('#Procesador').val();
    let os = $('#OS').val();
    let descripcion = $('#Descripcion').val();
    let memoria = $('#Memoria').val();
    let discoduro = $('#Disco_duro').val();
    let precio = $('#Precio').val();
    let cantidad = $('#Cantidad').val();
    let fotografia = $('#Fotografia').val();
    let disponibilidad = $('#IDType').val();
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    /*if(validaesVacio(id)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mid").show(500);
        $("#ID").focus();
        return false;
    }else*/ if(validaesVacio(marca)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mmarca").show(500);
        $("#Marca").focus();
        return false;
    }else if(validaesVacio(modelo)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mmodelo").show(500);
        $("#Modelo").focus();
        return false;
    }else if(validaesVacio(procesador)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mprocesador").show(500);
        $("#Procesador").focus();
        return false;
    }else if(validaesVacio(os)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mos").show(500);
        $("#OS").focus();
        return false;
    }else if(validaesVacio(descripcion)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mdescription").show(500);
        $("#Descripcion").focus();
        return false;
    }else if(validaesVacio(memoria)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mmemoria").show(500);
        $("#Memoria").focus();
        return false;
    }else if(validaesVacio(discoduro)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mdisco_duro").show(500);
        $("#Disco duro").focus();
        return false;
    }
    else if(validaesVacio(disponibilidad)) {
         errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mdisponible").show(500);
        $("#Disponible").focus();
        return false;
    }
    else if(validaesVacio(precio)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mprecio").show(500);
        $("#Precio").focus();
        return false;
    }else if(validaesVacio(cantidad)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mcantidad").show(500);
        $("#Cantidad").focus();
        return false;
    }else if(validaesVacio(fotografia)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mfotografia").show(500);
        $("#Fotografia").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }
}

function validaesVacio(dato){
    return !dato.trim().length;
}

function mensaje(){
    alert("Producto creado exitosamente!!!")
}

function redireccionar() {
    //var id = $('#ID').val();
    //console.log(id);
    //location.href = "/register_message.html?prodId="+id;
    location.href = "/login.html";
}
/*function getid(){
    $.getJSON("http://129.151.111.220:8080/api/Client/all", 
    function (data) {
        var ID=0;
        $.each(data,function(key,value){
         ID=value.idClient;
        });
        $('#ID').val(ID);
        console.log(ID);
        redireccionar();
        //clearfield();
    })
}*/

