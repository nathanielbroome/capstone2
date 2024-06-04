$(window).resize(function(){
    if($(this).width() > 650){
        $(".nav-link").show();
    } else {        
        $(".nav-link").hide();
        
    }
})


$('span').click( function() {    
    $(".nav-link").toggle();

});

$('span').on("vclick", function() {
    $(".nav-link").toggle();    
});
