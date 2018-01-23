import './import/preloader.js';
import './import/slider.js';
import './import/parallax.js';

// onclick="$('#bottom').slideDown(); $('.up').css({display: 'none'})

$('.up').on('click', function() {
  $('#bottom').slideDown();
  $(this).slideUp();
});
