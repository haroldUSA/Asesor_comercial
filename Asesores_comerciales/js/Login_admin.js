$(document).ready(function (e) {
    $('#Memail').hide();
    $('#Mpassword').hide();
    $('#statusMessage').hide();
});   
$("#btnLogin").click(function(){
    if($.trim($("#iniciarCorreo").val()) == "")
    {
        $("#Memail").show(500);
        $("#Memail").focus();        
        //alert("Por favor rellene los campos");
    }
    if($.trim($("#iniciarContraseña").val()) == ""){
        $("#Mpassword").show(500);
        $("#Mpassword").focus();
    }
    else{
        var email = $('#iniciarCorreo').val();
        var contraseña = $('#iniciarContraseña').val();
        var url="http://localhost:8080/api/user/"+email+"/"+contraseña;
        let datos = {
            email: email,
            contraseña: contraseña
        }
        console.log(email);
        console.log(contraseña);
        console.log(url) 
        $.ajax({
            url: "http://localhost:8080/api/user/"+datos.email+"/"+datos.contraseña,
           // url: "http://129.151.111.220:8080/api/user/"+datos.email+"/"+datos.contraseña,
            method: "GET",
            dataType: "json",
            success: function(datos){
                if(datos.id != null){
                    $("#statusMessage").show(500);
                    $("#statusMessage").text('¡Bienvenido! ' + datos.name);
                 //   $("#statusMessage").removeClass("bg-danger");
                 //   $("#statusMessage").addClass("badge bg-success");
                }
                else {
                    $("#statusMessage").show(500);
                    $("#statusMessage").focus();
                 /*   $("#statusMessage").text('¡No existe el usuario!');
                    $("#statusMessage").removeClass("bg-success");
                    $("#statusMessage").addClass("badge bg-danger");*/
                }
                console.log(datos);
            }
        })
       /* $("#iniciarCorreo").removeClass("is-invalid");
        $("#iniciarCorreo").addClass("is-valid");
        $("#iniciarContraseña").removeClass("is-invalid");
        $("#iniciarContraseña").addClass("is-valid");   */    
    }
}); 