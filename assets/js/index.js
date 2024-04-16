$(window).resize(function(){
    if($(this).width() > 650){
        $("#navigation").show();
    } else {        
        $("#navigation").hide();
    }
})


$('span').click( function() {
    $("#navigation").toggle();    

});

$('span').on("vclick", function() {
    $("#navigation").toggle();    

});