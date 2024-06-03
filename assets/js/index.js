$(window).resize(function(){
    if($(this).width() > 650){
        $("#navigation").show();
    } else {        
        $(".nav-link").hide();
        
    }
})


$('span').click( function() {
    $(".nav-link").toggle(); 
    $("#nav-ul").css("height", "40px");

});

$('span').on("vclick", function() {
    $(".nav-link").toggle();    
    $("#nav-ul").css("height", "40px");
});
