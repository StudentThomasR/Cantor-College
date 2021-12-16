$(document).ready(function () {
    var autoplaySlider = $('#lightSlider').lightSlider({
        auto: true,
        loop: true,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
        
        }
    });
$("#Burger").click(function (){
$("nav").slideToggle("fast")
})

});

