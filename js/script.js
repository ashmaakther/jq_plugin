// jq
$(document).ready(function(){
    // counterup start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // mixitup
    var mixer = mixitup('#hello', {
        animation: {
            duration: 300
        }
    });

    // lightbox
    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true
      })

    //   wow js
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       10,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

    
})