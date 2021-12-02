$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/
    $('#IDType').hide(0);


    $.getJSON("http://129.151.111.220:8080/api/user/all", 
    function (data) {
        var client_data="";
        $.each(data,function(key,value){
        client_data+='<tr>';
        client_data+='<td>'+value.id+'</td>';
        client_data+='<td>'+value.identification+'</td>';
        client_data+='<td>'+value.address+'</td>';
        client_data+='<td>'+value.cellPhone+'</td>';
        client_data+='<td>'+value.name+'</td>';
        client_data+='<td>'+value.email+'</td>';
        client_data+='<td>'+value.password+'</td>';
        client_data+='<td>'+value.zone+'</td>';
        client_data+='<td>'+value.type+'</td>';
       // client_data+='<td>'+value.password+'</td>';
        client_data+=`<td align="center"><button  style="background-color:#224abe"
        class="rectangular-circle border-6" id="Editbuttom${value.id}"><a onclick="actualizar(${value.id})"
                class="nav-link collapsed" href="#" data-toggle="collapse"
                data-target="#collapsePages${value.id}" aria-expanded="true"
                aria-controls="collapsePages${value.id}"><i
                    class="fas fa-fw fa-edit"></i><span
                    style="color:white">Editar</span></a>
            <div id="collapsePages${value.id}" class="collapse"
                aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white  collapse-inner rounded"
                    align="center">
                    <h6 class="collapse-header" style="color:#224abe">Opciones:
                    </h6>
                    <a class="collapse-item"
                        >IDENTIFICACION
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="IDentification${value.id}" placeholder="Identificacion">
                            <a id="Midentification${value.id}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <a class="collapse-item"
                        >NOMBRE
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Name${value.id}" placeholder="Nombre">
                            <a id="Mname${value.id}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <a class="collapse-item"
                        >DIRECCION
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Address${value.id}" placeholder="Direccion">
                            <a id="Maddress${value.id}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <a class="collapse-item"
                        >TELEFONO
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Celphone${value.id}" placeholder="telefono">
                            <a id="Mcelphone${value.id}" style="color: red;">this field cannot be blank!</a>
                    </div>                                        
                    <a class="collapse-item"
                        >CORREO
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Email${value.id}" placeholder="Correo">
                            <a id="Memail${value.id}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <a class="collapse-item"
                        >CONTRASEÑA
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Password${value.id}" placeholder="Contraseña">
                            <a id="Mpassword${value.id}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <a class="collapse-item"
                        >ZONA
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Zone${value.id}" placeholder="Zona">
                            <a id="Mzone${value.id}" style="color: red;">this field cannot be blank!</a>
                    </div>
                    <a class="collapse-item"
                        >TIPO
                    </a>
                    <div class="form-group">
                        <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                            <a class="navbar-brand" href="#">elije tipo</a>
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item dropdown" id="barra${value.id}">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1${value.id}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Tipo
                                        </a>
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown11${value.id}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Coordinador de Zona
                                        </a>
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown22${value.id}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Asesor Comercial
                                        </a>
                                        <div id="client${value.id}"
                                                class="dropdown-menu dropdown-menu-right animated--grow-in"
                                                aria-labelledby="navbarDropdown">
                                                <a onclick="selectType(1,${value.id})" class="dropdown-item" href="#">Coordinador de
                                                Zona</a>
                                            <div class="dropdown-divider"></div>
                                            <a onclick="selectType(2,${value.id})" class="dropdown-item" href="#">Asesor
                                                Comercial</a>
                                        </div>
                                    </li>
                                </ul>
                        </nav>
                        <a id="MType${value.id}" style="color: red;">this field cannot be blank!</a>    
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0"><a onclick="editarRegistro(${value.id})"
                            class="btn btn-primary btn-user btn-block ">Update
                            admin!</a></div>
                    <div class="collapse-divider"></div>
                </div>
            </div>
        </button>
        <button onclick="deleteAdmin(${value.id})" style="background-color:#224abe"
        class="rectangular-circle border-6" id="Deletebuttom${value.id}"><a
        class="nav-link collapsed" href="#" 
        data-target="#collapsePages"><i
            class="fas fa-trash-alt"></i><span
            style="color:white">Borrar</span></a></button>
    </td>`
        client_data+='</tr>';
        });
        $('#client').append(client_data);
        $('#idEdit').hide(500);
        //clearfield();
    })

    /* $.get("https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", 
     function (data) {
         console.log('success====:', data);
         //clearfield();
     })*/
/*
     let url = "https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client";

    fetch(url)
        .then(res => res.json())
        .then(out =>
            console.log('Checkout this JSON! ', out))
        .catch(err => throwerr);
*/
    function clearfield() {
        $("#Firstname").val(" ");
        $("#Lastname").val(" ");
        $("#InputEmail").val(" ");
        $("#Age").val("");
    }
});

function actualizar(llaveRegistro){
    $("#Deletebuttom"+llaveRegistro).toggle();
    $('#Mid'+llaveRegistro).hide();
    $('#Midentification'+llaveRegistro).hide();
    $('#Mname'+llaveRegistro).hide();
    $('#Maddress'+llaveRegistro).hide();
    $('#Mcelphone'+llaveRegistro).hide();
    $('#Memail'+llaveRegistro).hide();
    $('#Mpassword'+llaveRegistro).hide();
    $('#Mzone'+llaveRegistro).hide();
    $('#MType'+llaveRegistro).hide();
    $('#navbarDropdown11'+llaveRegistro).hide();
    $('#navbarDropdown22'+llaveRegistro).hide();
}

function selectType(llaveRegistro, id) {
    console.log(llaveRegistro);
    console.log(id);
    $('#navbarDropdown1' + id).hide(5);
    var idNumber = $('#IDnumber').val();
        if (llaveRegistro == 1) {
            $('#navbarDropdown11' + id).show(5);
            $('#navbarDropdown22' + id).hide(5);
            $("#IDType").val(llaveRegistro);
        } else {
            $('#navbarDropdown22' + id).show(5);
            $('#navbarDropdown11' + id).hide(5);
            $("#IDType").val(llaveRegistro);
        }
}

function deleteAdmin(llaveRegistro){
    //crea un objeto javascript
    let datos={
        id: llaveRegistro
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.111.220:8080/api/user/"+llaveRegistro,

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
 //       data : datosPeticion,

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'DELETE',

        contentType:"application/JSON",

        // el tipo de información que se espera de respuesta
//        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            $("#mensajes").show(1000);
            $("#mensajes").html("Registro eliminado...");
            $("#mensajes").hide(1000);
            location.reload();
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

function editarRegistro(llaveRegistro) {
    console.log(llaveRegistro);
    var id = llaveRegistro;
    var identification = $('#IDentification'+llaveRegistro).val();
    var firstname = $('#Name'+llaveRegistro).val();
    var address = $('#Address'+llaveRegistro).val();
    var celphone = $('#Celphone'+llaveRegistro).val();
    var email = $('#Email'+llaveRegistro).val();
    var password = $('#Password'+llaveRegistro).val();
    var zone = $('#Zone'+llaveRegistro).val();
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

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    if (validarEditar(llaveRegistro)) {
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://129.151.111.220:8080/api/user/update",

            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
            data: datosPeticion,

            // especifica el tipo de petición http: POST, GET, PUT, DELETE
            type: 'PUT',

            contentType: "application/JSON",

            // el tipo de información que se espera de respuesta
            //dataType: 'json',

            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (respuesta) {
                //escribe en la consola del desarrollador para efectos de depuración
                console.log(respuesta);
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro actualizado...");
                $("#mensajes").hide(1000);
                location.reload();
              //  listar();
              //  estadoInicial();
            },

            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion Post..." + status);
                //$("#mensajes").hide(1000);
            }
        });
    }
}

function validarEditar(llaveRegistro){
    $('#Mid'+llaveRegistro).hide();
    $('#Midentification'+llaveRegistro).hide();
    $('#Mname'+llaveRegistro).hide();
    $('#Maddress'+llaveRegistro).hide();
    $('#Mcelphone'+llaveRegistro).hide();
    $('#Memail'+llaveRegistro).hide();
    $('#Mpassword'+llaveRegistro).hide();
    $('#Mzone'+llaveRegistro).hide();
    $('#MType'+llaveRegistro).hide();
    $('#navbarDropdown1'+llaveRegistro).hide();
    $('#navbarDropdown2'+llaveRegistro).hide();
    //obtiene valores
    let id = llaveRegistro;
    let identification = $('#IDentification'+llaveRegistro).val();
    let firstname = $('#Name'+llaveRegistro).val();
    let address = $('#Address'+llaveRegistro).val();
    let celphone = $('#Celphone'+llaveRegistro).val();
    let email = $('#Email'+llaveRegistro).val();
    let password = $('#Password'+llaveRegistro).val();
    let zone = $('#Zone'+llaveRegistro).val();
    let type = $('#IDType').val();
    console.log(id);
    console.log(identification);
    console.log(firstname);
    console.log(address);
    console.log(celphone);
    console.log(email);
    console.log(password);
    console.log(zone);
    console.log(type);
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if(validaesVacio(identification)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Midentification"+llaveRegistro).show(500);
        $("#IDentification").focus();
        return false;
    }else if(validaesVacio(firstname)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mname"+llaveRegistro).show(500);
        $("#Firstname").focus();
        return false;
    }else if(validaesVacio(address)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Maddress"+llaveRegistro).show(500);
        $("#Address").focus();
        return false;
    }else if(validaesVacio(celphone)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mcelphone"+llaveRegistro).show(500);
        $("#Celphone").focus();
        return false;
    }else if(validaesVacio(email)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Memail"+llaveRegistro).show(500);
        $("#InputEmail").focus();
        return false;
    }else if(validaesVacio(password)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mpassword"+llaveRegistro).show(500);
        $("#nameEdit").focus();
        return false;
    }else if(validaesVacio(zone)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mzone"+llaveRegistro).show(500);
        $("#Zone").focus();
        return false;
    }
    else if(validaesVacio(type)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#MType"+llaveRegistro).show(500);
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

/*$('#submitbtn1').click(function (e) {
    e.preventDefault()
    console.log(ID);
    console.log("entro");
    var messagetext = $('#Textarea').val();

    $.put("https://g3abde25bedbc30-db202109241616.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/", {
        id: 1,
        messagetext: messagetext
    }, function (response) {
        console.log('success====:', response)
        //clearfield();
    })

    function clearfield(){
      $("#Textarea").val(" ");
    }
});*/

