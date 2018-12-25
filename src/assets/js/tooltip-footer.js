/*===================================
Author       : ICTE PANAMA
Template Name: HTU
Version      : 1.0.0
===================================*/

(function($) {
	'use strict';
	
/*===================================*
		TOOLTIP FOOTER JS
/*===================================*/
	

jQuery(document).ready(function(){

 $(".copyright span").click(function(event) {
    event.stopPropagation();
    $(".contain-popup-footer").toggleClass("active-qrcode");   

   
  });
  
  

  
  
 //Hide After Click Outside
	$('body').click(function(){
		var $target = $('.contain-popup-footer');
		if($target.hasClass('active-qrcode')){
			$target.removeClass('active-qrcode');
		}
	});	
	
	
	
	$(".contain-popup-footer").click(function(e){
     e.stopPropagation();
	});
  
  
  
  
 }); // jQuery load


	
			
})(jQuery);