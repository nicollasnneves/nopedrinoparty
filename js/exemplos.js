$("#alternar1").hide();
$("#alternar3").hide();
$("#alternar4").hide();
 
$("#esconder").click(function(){
   // $("#teste1").fadeOut();
    $("#teste1").hide();
});
 
$("#mostrar").click(function(){
    // $("#teste1").fadeIn();
    $("#teste1").show();
});
 
$("#alterarCSS").click(function(){
    $("#teste2").css({
        "background-color":"rgba(0, 98, 227, 1)",
        "font-size":"200%",
    });
});
 
$("#alterarClass1").click(function(){
    $("#teste3").removeClass("alert-danger").removeClass("alert-warning").addClass("alert-success");
    $("#alterarClass1").removeClass("btn-danger").removeClass("btn-warning").addClass("btn-succcess");
});
 
$("#alterarClass2").click(function(){
    $("#teste3").removeClass("alert-success").removeClass("alert-danger").addClass("alert-warning");
    $("#alterarClass2").removeClass("btn-success").removeClass("btn-danger").addClass("btn-warning");
});
 
$("#alterarClass3").click(function(){
    $("#teste3").removeClass("alert-success").removeClass("alert-warning").addClass("alert-danger");
    $("#alterarClass3").removeClass("btn-danger").addClass("btn-danger");
});
 
 
$("#alternar1").click(function () {
    $("#link").attr({
        "href": "https://www.nike.com/",
        "title": "Nike"
    });
    $("#link").text("Nike");
    $("#alternar2").show();
    $("#alternar1").hide();
    $("#alternar3").hide();
    $("#alternar4").hide();
});
 
$("#alternar2").click(function () {
    $("#link").attr({
        "href": "https://www.fcbarcelona.com/en/",
        "title": "Barcelona"
    });
    $("#link").text("Barcelona");
    $("#alternar3").show();
    $("#alternar1").hide();
    $("#alternar2").hide();
    $("#alternar4").hide();
});
 
$("#alternar3").click(function () {
    $("#link").attr({
        "href": "https://fatecid.com.br/cursos/",
        "title": "Fatec"
    });
    $("#link").text("Fatec");
    $("#alternar4").show();
    $("#alternar1").hide();
    $("#alternar2").hide();
    $("#alternar3").hide();
});
 
$("#alternar1").click(function () {
    $("#link").attr({
        "href": "https://www.cps.sp.gov.br/",
        "title": "CPS"
    });
    $("#link").text("CPS");
    $("#alternar2").show();
    $("#alternar1").hide();
    $("#alternar3").hide();
    $("#alternar4").hide();
});