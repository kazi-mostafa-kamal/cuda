$(document).ready(function () {
    
    $('#example').pieChart({
        barColor: '#30bae7',
        trackColor: '#dfe8ed',
        lineWidth:18, 
    });
    $('#sk').pieChart({
        barColor: '#d74680',
        trackColor: '#dfe8ed',
        lineWidth:18,
    });
    $('#mk').pieChart({
        barColor: '#15c7a8',
        trackColor: '#dfe8ed',
        lineWidth:18,
    });
    $('#kk').pieChart({
        barColor: '#eb7d4b',
        trackColor: '#dfe8ed',
        lineWidth:18,
    });
    var mixer = mixitup('.skm');

    // staky
    
    $('.js-stecky').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }
    })  
  
})
function openNav() {
    document.getElementById('mynav').style.width='100%'
}
function closeNav() {
    document.getElementById('mynav').style.width='0%'
}
