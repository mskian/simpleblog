/* ##### Js File ###################
Simpleblog theme v0.0.2
####################################
*/

 // Floating Share Bar
   $(window).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 250) {
            $('#shares').css("opacity", 1);
        } else {
            $('#shares').css("opacity", 0);
        }
    });


  // Scroll to top
  jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.swifty-top').fadeIn(duration);
        } else {
            jQuery('.swifty-top').fadeOut(duration);
        }
    });

    jQuery('.swifty-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});
