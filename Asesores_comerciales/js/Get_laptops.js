$(document).ready(function (e) {
    /*var firstname = $('#FirstName').val();
    var secondname = $('#LastName').val();
    var email = $('#InputEmail').val();
    var age = $('#Age').val();*/
    //$('#IDType').hide(0);


    $.getJSON("http://localhost:8080/api/laptop/all", 
    function (data) {
        var client_data="";
        $.each(data,function(key,value){
        client_data+='<tr>';
        client_data+='<td>'+value.id+'</td>';
        client_data+='<td>'+value.brand+'</td>';
        client_data+='<td>'+value.model+'</td>';
        client_data+='<td>'+value.procesor+'</td>';
        client_data+='<td>'+value.os+'</td>';
        client_data+='<td>'+value.description+'</td>';
        client_data+='<td>'+value.memory+'</td>';
        client_data+='<td>'+value.hardDrive+'</td>';
        client_data+='<td>'+value.availability+'</td>';
        client_data+='<td>'+value.price+'</td>';
        client_data+='<td>'+value.quantity+'</td>';
        client_data+='<td>'+value.photography+'</td>';
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
                        >MARCA
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Brand${value.id}" placeholder="Marca">
                            <a id="Mmarca${value.id}" style="color: red;">Este campo no puede estar vacio!</a>
                    </div>
                    <a class="collapse-item"
                        >MODELO
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Model${value.id}" placeholder="Modelo">
                            <a id="Mmodelo${value.id}" style="color: red;">Este campo no puede estar vacio!!</a>
                    </div>
                    <a class="collapse-item"
                        >PROCESADOR
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Procesor${value.id}" placeholder="Procesador">
                            <a id="Mprocesador${value.id}" style="color: red;">Este campo no puede estar vacio!!</a>
                    </div>
                    <a class="collapse-item"
                        >OS
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="OS${value.id}" placeholder="OS">
                            <a id="Mos${value.id}" style="color: red;">Este campo no puede estar vacio!!</a>
                    </div>                                        
                    <a class="collapse-item"
                        >DESCRIPCION
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Description${value.id}" placeholder="Descripcion">
                            <a id="Mdescripcion${value.id}" style="color: red;">Este campo no puede estar vacio!!</a>
                    </div>
                    <a class="collapse-item"
                        >MEMORIA
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Memory${value.id}" placeholder="Memoria">
                            <a id="Mmemoria${value.id}" style="color: red;">Este campo no puede estar vacio!!</a>
                    </div>
                    <a class="collapse-item"
                        >DISCO DURO
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="HardDrive${value.id}" placeholder="Disco duro">
                            <a id="Mdiscoduro${value.id}" style="color: red;">Este campo no puede estar vacio!!</a>
                    </div>
                    <a class="collapse-item"
                        >DISPONIBILIDAD
                    </a>
                    <div class="form-group">
                        <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                            <a class="navbar-brand" >elije </a>
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item dropdown" id="barra${value.id}">
                                        <a class="nav-link dropdown-toggle"  id="navbarDropdown1${value.id}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            disponibilidad
                                        </a>
                                        <a class="nav-link dropdown-toggle"  id="navbarDropdown11${value.id}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Disponible
                                        </a>
                                        <a class="nav-link dropdown-toggle"  id="navbarDropdown22${value.id}"
                                            role="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            No disponible
                                        </a>
                                        <div id="client${value.id}"
                                                class="dropdown-menu dropdown-menu-right animated--grow-in"
                                                aria-labelledby="navbarDropdown">
                                                <a onclick="selectType(1,${value.id})" class="dropdown-item" >Disponible</a>
                                            <div class="dropdown-divider"></div>
                                            <a onclick="selectType(2,${value.id})" class="dropdown-item" >No disponible</a>
                                        </div>
                                    </li>
                                </ul>
                        </nav>
                        <a id="Mdisponibilidad${value.id}" style="color: red;">Este campo no puede estar vacio!!</a>    
                    </div>
                    <a class="collapse-item"
                        >PRECIO
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Price${value.id}" placeholder="Precio">
                            <a id="Mprecio${value.id}" style="color: red;">Este campo no puede estar vacio!!</a>
                    </div>
                    <a class="collapse-item"
                        >CANTIDAD
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Quantity${value.id}" placeholder="Cantidad">
                            <a id="Mcantidad${value.id}" style="color: red;">Este campo no puede estar vacio!!</a>
                    </div>
                    <a class="collapse-item"
                        >FOTOGRAFIA
                    </a>
                    <div class="form-group"><label
                            for="example"></label><input type="text" class="form-control form-control-user" id="Photography${value.id}" placeholder="Fotografia">
                            <a id="Mfotografia${value.id}" style="color: red;">Este campo no puede estar vacio!!</a>
                    </div>                    
                    <div class="col-sm-6 mb-3 mb-sm-0"><a onclick="editarRegistro(${value.id})"
                            class="btn btn-primary btn-user btn-block ">Actualizar laptop!</a></div>
                    <div class="collapse-divider"></div>
                </div>
            </div>
        </button>
        <button onclick="deleteLaptop(${value.id})" style="background-color:#224abe"
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
        $("#model").val(" ");
        $("#Lastname").val(" ");
        $("#InputEmail").val(" ");
        $("#Age").val("");
    }
});

function actualizar(llaveRegistro){
    $("#Deletebuttom"+llaveRegistro).toggle();
    $('#Mid'+llaveRegistro).hide();
    $('#Mmarca'+llaveRegistro).hide();
    $('#Mmodelo'+llaveRegistro).hide();
    $('#Mprocesador'+llaveRegistro).hide();
    $('#Mos'+llaveRegistro).hide();
    $('#Mdescripcion'+llaveRegistro).hide();
    $('#Mmemoria'+llaveRegistro).hide();
    $('#Mdiscoduro'+llaveRegistro).hide();
    $('#Mdisponibilidad'+llaveRegistro).hide();
    $('#Mprecio'+llaveRegistro).hide();
    $('#Mcantidad'+llaveRegistro).hide();
    $('#Mfotografia'+llaveRegistro).hide();
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
            availability=1;
            //$("#IDType").val(llaveRegistro);
        } else {
            $('#navbarDropdown22' + id).show(5);
            $('#navbarDropdown11' + id).hide(5);
            availability=2;
            //$("#IDType").val(llaveRegistro);
        }
}

function deleteLaptop(llaveRegistro){
    //crea un objeto javascript
    let datos={
        id: llaveRegistro
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://129.151.111.220:8080/api/laptop/"+llaveRegistro,
        //url: "http://localhost:8080/api/laptop/"+llaveRegistro,

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
    var brand = $('#Brand'+llaveRegistro).val();
    var model = $('#Model'+llaveRegistro).val();
    var procesor = $('#Procesor'+llaveRegistro).val();
    var os = $('#OS'+llaveRegistro).val();
    var description = $('#Description'+llaveRegistro).val();
    var memory = $('#Memory'+llaveRegistro).val();
    var hardDrive = $('#HardDrive'+llaveRegistro).val();
    //var availability = $('#Availability'+llaveRegistro).val();
    var price = $('#Price'+llaveRegistro).val();
    var quantity = $('#Quantity'+llaveRegistro).val();
    var photography = $('#Photography'+llaveRegistro).val();
    if(availability==1){
        availability="true";
    }else{
        availability="false";
    }
    console.log(id);
    console.log(brand);
    console.log(model);
    console.log(procesor);
    console.log(os);
    console.log(description);
    console.log(memory);
    console.log(hardDrive);
    console.log(availability);

    let datos={
        id:id,
        brand:brand,
        model: model,
        procesor:procesor,
        os:os,
        description: description,
        memory: memory,
        hardDrive: hardDrive,
        availability:availability,
        price:price,
        quantity:quantity,
        photography:photography
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);
    console.log(datosPeticion);

    if (validarEditar(llaveRegistro)) {
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://localhost:8080/api/laptop/update",

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
    $("#Deletebuttom"+llaveRegistro).toggle();
    $('#Mid'+llaveRegistro).hide();
    $('#Mmarca'+llaveRegistro).hide();
    $('#Mmodelo'+llaveRegistro).hide();
    $('#Mprocesador'+llaveRegistro).hide();
    $('#Mos'+llaveRegistro).hide();
    $('#Mdescripcion'+llaveRegistro).hide();
    $('#Mmemoria'+llaveRegistro).hide();
    $('#Mdiscoduro'+llaveRegistro).hide();
    $('#Mdisponibilidad'+llaveRegistro).hide();
    $('#Mprecio'+llaveRegistro).hide();
    $('#Mcantidad'+llaveRegistro).hide();
    $('#Mfotografia'+llaveRegistro).hide();
    $('#navbarDropdown11'+llaveRegistro).hide();
    $('#navbarDropdown22'+llaveRegistro).hide();
    //obtiene valores
    let id = llaveRegistro;
    let brand = $('#Brand'+llaveRegistro).val();
    let model = $('#Model'+llaveRegistro).val();
    let procesor = $('#Procesor'+llaveRegistro).val();
    let os = $('#OS'+llaveRegistro).val();
    let description = $('#Description'+llaveRegistro).val();
    let memory = $('#Memory'+llaveRegistro).val();
    let hardDrive = $('#HardDrive'+llaveRegistro).val();
   // let availability = $('#Availability').val();
    let price = $('#Price'+llaveRegistro).val();
    let quantity = $('#Quantity'+llaveRegistro).val();
    let photography = $('#Photography'+llaveRegistro).val();
    console.log(id);
    console.log(brand);
    console.log(model);
    console.log(procesor);
    console.log(os);
    console.log(description);
    console.log(memory);
    console.log(hardDrive);
    console.log(availability);
    console.log(price);
    console.log(quantity);
    console.log(photography);
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if(validaesVacio(brand)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mbrand"+llaveRegistro).show(500);
        $("#Brand").focus();
        return false;
    }else if(validaesVacio(model)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mname"+llaveRegistro).show(500);
        $("#Model").focus();
        return false;
    }else if(validaesVacio(procesor)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#MProcesor"+llaveRegistro).show(500);
        $("#procesor").focus();
        return false;
    }else if(validaesVacio(os)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mos"+llaveRegistro).show(500);
        $("#OS").focus();
        return false;
    }else if(validaesVacio(description)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mdescription"+llaveRegistro).show(500);
        $("#Description").focus();
        return false;
    }else if(validaesVacio(memory)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mmemory"+llaveRegistro).show(500);
        $("#nameEdit").focus();
        return false;
    }else if(validaesVacio(hardDrive)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#MHardDrive"+llaveRegistro).show(500);
        $("#hardDrive").focus();
        return false;
    }
    else if(validaesVacio(availability)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mavailability"+llaveRegistro).show(500);
        $("#hardDrive").focus();
        return false;
    }else if(validaesVacio(price)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mprice"+llaveRegistro).show(500);
        $("#Price").focus();
        return false;
    }else if(validaesVacio(quantity)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#Mquantity"+llaveRegistro).show(500);
        $("#Quantity").focus();
        return false;
    }else if(validaesVacio(photography)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#photography"+llaveRegistro).show(500);
        $("#Photography").focus();
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

