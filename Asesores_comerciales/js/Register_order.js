var usuario="";
var tabla="";
var id="";
$(document).ready(function (e) {
    //$('#ID').hide();
    var Id = getParameterByName('AsesorId');
    id=Id;
    var Tabla= getParameterByName('Tabla');
    $('#client').append(Tabla);
    console.log(Id)
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
    $('#navbarDropdown3').hide(0);
    $('#IDnumber').hide(0);
    $('#IDLaptop').hide(0);
    $('#navbarDropdown3').hide(0);
    $('#Mlaptop').hide(0);
    $('#IDType').hide(0);
    $('#IDType').val(0);
    $('#Mdate').hide(0);

    $("#datepicker").datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
    })

    $.getJSON("http://129.151.111.220:8080/api/user/"+Id,
    function (data) {
        usuario=data;
        console.log(usuario);  
        //clearfield();
    })

    $.getJSON("http://129.151.111.220:8080/api/laptop/all",
    function (data) {
        var client_data = "";
        var select_data = "";
        var cont = 0;
        $.each(data, function (key, value) {
//            ID = value.ID;
        console.log(value.id)
            client_data += '<a class="dropdown-item" onclick="selectLaptop(' + value.id + ')';
            // client_data+='<td>'+value.id+'</td>';
            client_data += '">' + value.brand + " modelo: "+value.model+'</a><div class="dropdown-divider"></div>';
            select_data = `<a class="nav-link dropdown-toggle" id="navbarDropdown0${value.id}"
    role="button" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">
    ${value.brand + " modelo: "+value.model}
    </a>`;
            $('#barra').append(select_data);
            $('#navbarDropdown0' + value.id).hide(5);
            cont = value.id;
        });
        $('#client').append(client_data);
        $("#IDnumber").val(cont);
        //clearfield();
    })
});
$('#submitbtn').click(function (e) {
    e.preventDefault()
    var id = $('#ID').val();
    var estado = $('#IDType').val();
    var date = $('#datepicker').val();
    var idlaptop= $('#IDLaptop').val();
    if(estado==1){
        estado="Aprobado";
    }else if(estado==1){
        estado="Rechazado";
    }else{
        estado="Pendiente";
    }
    console.log(id);
   /* console.log(identification);
    console.log(firstname);
    console.log(address);
    console.log(celphone);
    console.log(email);
    console.log(password);
    console.log(zone);
    console.log(type);
    console.log(date);
    console.log(month);
    console.log(month[1]);   */

    let datos={
        //id:id,
        resgisterDay:date,
        name: firstname,
        address:address,
        cellPhone:celphone,
        email: email,
        password: password,
        zone: zone,
        type:type,
        birthtDay:date,
        monthBirthtDay:month[1]
    }
   
    let datosPeticion = JSON.stringify(datos);
    console.log(datosPeticion);
    if (validarEditar()) {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.111.220:8080/api/user/new",
        //url: "http://localhost:8080/api/user/new",
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
            location.reload();
            clearfield();
             mensaje();
             //redireccionar();
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

function add(){
    console.log("entro12");
        var nombre = $("#navbarDropdown0"+$("#IDLaptop").val()).val();
        console.log(nombre);
        console.log($("#Cantidad").val());
        client_data="";
        client_data+='<tr>';
        client_data+='<td>'+" "+'</td>';
        client_data+='<td>'+$("#Cantidad").val()+'</td>';
        client_data+='<td>'+" "+'</td>';
        client_data+='</tr>';
        tabla=client_data;
        $('#client').append(tabla);
        location.reload();
//        redireccionar();
/*        var table = $('#dataTable').DataTable();
        table.ajax.reload();*/
}

function selectType(llaveRegistro) {
    console.log(llaveRegistro);
    $('#navbarDropdown').hide(5);
   // var idNumber = $('#IDnumber').val();
    for (let index = 0; index <= 2; index++) {
        if (llaveRegistro == index) {
            console.log("Entro");
            $('#navbarDropdown' + llaveRegistro).show(5);
            $("#IDType").val(llaveRegistro);
        } else {
            $('#navbarDropdown' + index).hide(5);
        }
    }
}

function selectLaptop(llaveRegistro) {
    console.log(llaveRegistro);
    $('#navbarDropdown00').hide(5);
    var idNumber = $('#IDnumber').val();
    console.log(idNumber);
    for (let index = 1; index <= idNumber; index++) {
        if (llaveRegistro == index) {
            $('#navbarDropdown0' + llaveRegistro).show(5);
            $("#IDLaptop").val(llaveRegistro);
        } else {
            $('#navbarDropdown0' + index).hide(5);
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
   /* if(validaesVacio(id)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mid").show(500);
        $("#ID").focus();
        return false;
    }else*/ if(validaesVacio(identification)) {
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
    location.href = "/register_order.html?prodId="+id+"&Tabla"+client_data;
    //location.href = "/login.html";
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
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

