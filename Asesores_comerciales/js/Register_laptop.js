$(document).ready(function (e) {
    //$('#ID').hide();
    $('#Mid').hide(0);
    $('#Midentification').hide(0);
    $('#Mname').hide(0);
    $('#Maddress').hide(0);
    $('#Mcelphone').hide(0);
    $('#Memail').hide(0);
    $('#Mpassword').hide(0);
    $('#Mzone').hide(0);
    $('#MType').hide(0);
    $('#navbarDropdown1').hide(0);
    $('#navbarDropdown2').hide(0);
    $('#IDType').hide(0);
});
$('#submitbtn').click(function (e) {
    e.preventDefault()
    var id = $('#ID').val();
    var identification = $('#IDentification').val();
    var firstname = $('#FirstName').val();
    var address = $('#Address').val();
    var celphone = $('#Celphone').val();
    var email = $('#InputEmail').val();
    var password = $('#Password').val();
    var zone = $('#Zone').val();
    var type = $('#IDType').val();
    if(type==1){
        type="COORD";
    }else{
        type="ASES";
    }
    console.log(id);
    console.log(identification);
    console.log(firstname);
    console.log(address);
    console.log(celphone);
    console.log(email);
    console.log(password);
    console.log(zone);
    console.log(type);

    let datos={
        id:id,
        identification:identification,
        name: firstname,
        address:address,
        cellPhone:celphone,
        email: email,
        password: password,
        zone: zone,
        type:type
    }
   
    let datosPeticion = JSON.stringify(datos);
    console.log(datosPeticion);
    if (validarEditar()) {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.111.220:8080/api/user/new",
       // url: "http://localhost:8080/api/user/new",
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
             redireccionar();
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
        $("#Identification").val("");
        $("#FirstName").val("");
        $("#Celphone").val("");
        $("#Address").val("");
        $("#InputEmail").val("");
        $("#Password").val("");
        $("#Type").val("");
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
    $('#Midentification').hide();
    $('#Mname').hide();
    $('#Maddress').hide();
    $('#Mcelphone').hide();
    $('#Memail').hide();
    $('#Mpassword').hide();
    $('#Mzone').hide();
    $('#MType').hide();
    $('#navbarDropdown1').hide();
    $('#navbarDropdown2').hide();
    $('#IDType').hide();
    //obtiene valores
    let id = $('#ID').val();
    let identification = $('#IDentification').val();
    let firstname = $('#FirstName').val();
    let address = $('#Address').val();
    let celphone = $('#Celphone').val();
    let email = $('#InputEmail').val();
    let password = $('#Password').val();
    let zone = $('#Zone').val();
    let type = $('#IDType').val();
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if(validaesVacio(id)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mid").show(500);
        $("#ID").focus();
        return false;
    }else if(validaesVacio(identification)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Midentification").show(500);
        $("#IDentification").focus();
        return false;
    }else if(validaesVacio(firstname)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mname").show(500);
        $("#Firstname").focus();
        return false;
    }else if(validaesVacio(address)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Maddress").show(500);
        $("#Address").focus();
        return false;
    }else if(validaesVacio(celphone)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mcelphone").show(500);
        $("#Celphone").focus();
        return false;
    }else if(validaesVacio(email)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Memail").show(500);
        $("#InputEmail").focus();
        return false;
    }else if(validaesVacio(password)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mpassword").show(500);
        $("#nameEdit").focus();
        return false;
    }else if(validaesVacio(zone)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mzone").show(500);
        $("#Zone").focus();
        return false;
    }
    else if(validaesVacio(type)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#MType").show(500);
        $("#Zone").focus();
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
    alert("Usuario creado exitosamente!!!")
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

