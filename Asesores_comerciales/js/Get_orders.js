$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/
    $('#IDType').hide(0);

    $.getJSON("http://129.151.111.220:8080/api/order/all", 
    function (data) {
        var client_data="";
        $.each(data,function(key,value){
        client_data+='<tr>';
        client_data+='<td>'+value.id+'</td>';
        client_data+='<td>'+value.registerDay+'</td>';
        client_data+='<td>'+value.status+'</td>';
        client_data+='<td>'+value.salesMan.name+'</td>';
        $.each(value.products,function(key,value2){
            client_data+='<li>'+value2.brand+" model: "+value2.model+'</li>';
            });
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
                        >FECHA REGISTRO
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="datepicker${value.id}"
                            placeholder="Fecha de registro" onkeypress="return false;" />
                            <a id="Mdate${value.id}" style="color: red;">Este campo no puede estar vacio!</a>
                    </div>
                    <a class="collapse-item"
                        >ESTADO
                    </a>
                    <div class="form-group">
                        <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                            <a class="navbar-brand" >Estado</a>
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item dropdown" id="barra${value.id}">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1${value.id}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Pendiente
                                        </a>
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown11${value.id}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Aprobada
                                        </a>
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown22${value.id}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Rechazada
                                        </a>
                                        <div id="client${value.id}"
                                                class="dropdown-menu dropdown-menu-right animated--grow-in"
                                                aria-labelledby="navbarDropdown">
                                                <a onclick="selectType(0,${value.id})" class="dropdown-item" >Pendiente</a>
                                            <div class="dropdown-divider"></div>
                                            <a onclick="selectType(1,${value.id})" class="dropdown-item" >Aprobado</a>
                                                <div class="dropdown-divider"></div>
                                            <a onclick="selectType(2,${value.id})" class="dropdown-item" >Rechazada
                                                </a>
                                        </div>
                                    </li>
                                </ul>
                        </nav>
                        <a id="MType${value.id}" style="color: red;">this field cannot be blank!</a>    
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0"><a onclick="editarRegistro(${value.id})"
                            class="btn btn-primary btn-user btn-block ">Actualizar orden!</a></div>
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
    $('#Mdate'+llaveRegistro).hide();
    $('#MType'+llaveRegistro).hide();
    $('#navbarDropdown11'+llaveRegistro).hide();
    $('#navbarDropdown22'+llaveRegistro).hide();
    $("#datepicker"+llaveRegistro).datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
    })
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
        url: "http://129.151.111.220:8080/api/order/"+llaveRegistro,
        //url: "http://localhost:8080/api/user/"+llaveRegistro,

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
    var registerDay = $('#datepicker'+llaveRegistro).val();
    var estado = $('#IDType').val();
    if(estado==1){
        estado="Aprobado";
    }else if(estado==1){
        estado="Rechazado";
    }else{
        estado="Pendiente";
    }
    console.log(id);
    console.log(registerDay);
    console.log(estado);

    let datos={
       id:id,
       registerDay:registerDay,
       status:estado
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    if (validarEditar(llaveRegistro)) {
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://129.151.111.220:8080/api/order/update",

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
    $('#datepicker'+llaveRegistro).hide();
    $('#IDType').hide();
    $('#navbarDropdown1'+llaveRegistro).hide();
    $('#navbarDropdown2'+llaveRegistro).hide();
    //obtiene valores
    let id = llaveRegistro;
    let registerDay = $('#datepicker'+llaveRegistro).val();
    let estado = $('#IDType').val();
    console.log(id);
    console.log(registerDay);
    console.log(estado);
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if(validaesVacio(registerDay)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mdate"+llaveRegistro).show(500);
        $("#Firstname").focus();
        return false;
    }else if(validaesVacio(estado)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mtype"+llaveRegistro).show(500);
        $("#Address").focus();
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

