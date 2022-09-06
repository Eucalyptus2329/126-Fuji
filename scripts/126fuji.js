$(document).ready(function(){
   
        $(".load-photos").delay(1000).slideDown(2000,function(){
            $(".loader-container").delay(1000).fadeOut(1000);
        });
    });
   


    // for(var i = 0; i< 5; i++)
    //   $("#multiply").append("<div class='row'> 126 Fuji </div>");  

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });

  


      
