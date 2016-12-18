(function($) {
    "use strict";
    
	$('html').css({height:'auto'});
	$('#intro').css({height:$(window).height()});
			  
    if ( $(window).height() > 768 ) { $('#intro').css({height:$(window).height()}); }
			  
	$(window).on('resize',function() {
    
    if ( $(window).height() > 768 ) { $('#intro').css({height:$(window).height()}); }
    
    		else { $('#intro').css({height:'auto'});  }
	  
	  });
      
     $('.menu li a[href*="#"]').on('click',function() {
			
	    $("html, body").animate({
            scrollTop: $(jQuery(this.hash)).offset().top  + "px"
        }, {
            duration: 1000,
            easing: "easeInOutExpo"
        });

        return false;
    });
    
    $('.work-item').on('click',function() {
		$('.project-close').fadeOut(500);										   
		$('html, body').animate({scrollTop:$('#work').position().top}, 500);

    var workImg = $(this).data('img');
    var workTitle = $(this).data('title');
    var workCateg = $(this).data('category');
    var workClient = $(this).data('client');
    var workDesc = $(this).data('desc');
	
		$('.project-content').slideUp(500, function(){

            $(this).slideDown(800);
            
            $('.project-img').attr('src', workImg);
            $('.project-title').text(workTitle);
            $('.project-categ').text(workCateg);
            $('.project-client').text(workClient);
            $('.project-desc').text(workDesc);
            
            $('.project-close').delay(500).fadeIn(500);
        
        });
	
		return false;
	});
    
    $(".project-close").on('click', function() {
		$('.project-content').slideUp(500);
		$(this).fadeOut(500);
		$('html, body').animate({scrollTop:$('#work').position().top},1000);
	});
 
 })(jQuery);