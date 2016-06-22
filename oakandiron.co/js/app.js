(function($) {

  var defaults = {};

  $.fn.fixedscroll = function(opts) {

    var options = $.extend(defaults, opts);

    var el = $(this);

    var lockPosition = options.lockElement.offset().top;
    var offsetTop = options.offset.top || 0;
    var klass = options.klass;

    $(window).bind('load scroll', function(e) {

      if ($(window).scrollTop() + offsetTop >= lockPosition) {
        
        $('body').addClass(klass);
        
      } else {
        
      	$('body').removeClass(klass);
      
      }
    });
  };

})(jQuery);

$(document).ready(function() {

  $('#menu').fixedscroll({
      'offset': {'top': 50},
	    'lockElement': $('#here'),
	    'klass': 'fixed'
	});
  
});