'use strict';

(function() {
  
  let linkNav = $('.nav-item a');

  linkNav.on('click', function(){
  	linkNav.removeClass('active');
    $(this).toggleClass('active');
  })
  
})();