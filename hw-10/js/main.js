$(function(){
    $('#menu').slicknav();
});
$('.homepage__slider').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 12000,
});
$(function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
});
