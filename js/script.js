$(document).ready(function(){
    new WOW().init();
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }

    })
    $( "#content" ).slideToggle( "slow" );
    $( "#click" ).click(function() {
        $( "#content" ).slideToggle( "slow" );
    });
    (function($) {
        $(function() {

            $('#up').click(function() {
                $('body,html').animate({scrollTop:0},1000);
                return false;
            })

        })
    })(jQuery)
});
