(function($){
  "use strict";




// includes
function include(url){document.write('<script src="'+url+'"></script>')}


include('/js/superfish.js')
include('/js/jquery.mobilemenu.js')
include('/js/jquery.easing.1.3.js')
include('/js/jquery.cookie.js')
include('/js/jquery.tipsy.js')         
 

  


// login form show

$(document).ready(function() {

  $('#openLogin').on('click', function() {
    $('#login_pop').toggle("normal");
  });

  $('#closeLogin').on('click', function() {
    $('#login_pop').toggle("normal");
  });

  $('.popView').on('click', function() {
    $('#popup_wrap').toggle();
  });

  $('#closeView').on('click', function() {
    $('#popup_wrap').toggle();
  });

});






          // portfolio-filter

                            // jQuery(document).ready(function($){
                                
                            //     var $faqItems = $('#faqs .faq');
                                
                            //     if( window.location.hash != '' ) {
                                
                            //         var getFaqFilterHash = window.location.hash;
                                    
                            //         var hashFaqFilter = getFaqFilterHash.split('#');
                                    
                            //         if( $faqItems.hasClass( hashFaqFilter[1] ) ) {
                                    
                            //             $('#portfolio-filter li').removeClass('activeFilter');
                                        
                            //             $( '[data-filter=".'+ hashFaqFilter[1] +'"]' ).parent('li').addClass('activeFilter');
                                        
                            //             var hashFaqSelector = '.' + hashFaqFilter[1];
                                        
                            //             $faqItems.css('display', 'none');
                                        
                            //             if( hashFaqSelector != 'all' ) {
                                            
                            //                 $( hashFaqSelector ).fadeIn(500);
                                        
                            //             } else {
                                            
                            //                 $faqItems.fadeIn(500);
                                            
                            //             }
                                    
                            //         }
                                    
                            //     }
                                                    
                            //     $('#portfolio-filter a').click(function(){
        
                            //         $('#portfolio-filter li').removeClass('activeFilter');
                                    
                            //         $(this).parent('li').addClass('activeFilter');
                                    
                            //         var faqSelector = $(this).attr('data-filter');
                                    
                            //         $faqItems.css('display', 'none');
                                    
                            //         if( faqSelector != 'all' ) {
                                        
                            //             $( faqSelector ).fadeIn(500);
                                    
                            //         } else {
                                        
                            //             $faqItems.fadeIn(500);
                                        
                            //         }
                                    
                            //         return false;
        
                            //    });
                            
                            // });

 $(document).ready(function(){
  
   if($.fn.fitVids)
        // Basic FitVids Test
        jQuery(".main-sldier").fitVids();
        // Custom selector and No-Double-Wrapping Prevention Test
   if($.fn.fitVids)     
        jQuery(".main-sldier,.videoslider, .box-video ").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"}); 
      
 })

$(window).load(function(){


        // Toggles
        
        $(".togglec").hide();
      
      $(".togglet").click(function(){     
         $(this).toggleClass("toggleta").next(".togglec").slideToggle("normal").parent().toggleClass('active');
         return true;        
      }); 
  

        // Scroll to Top
        
    $(window).scroll(function() {
      if($(this).scrollTop() > 450) {
                $('#gotoTop').fadeIn();
      } else {
        $('#gotoTop').fadeOut();
      }
    });
    
    $('#gotoTop').click(function() {
      $('body,html').animate({scrollTop:0},400);
            return false;
    });
        
    

  
  
 if($.fn.tipsy) 
  {
    $('.social a').tipsy({ gravity: 'e'});
    $('.list-social li a').tipsy({ gravity: 'se'});
    $('.v_tool_up').tipsy({ gravity: 's'});
    $('.v_tool_left').tipsy({ gravity: 'e'});
    $('.v_tool_right').tipsy({ gravity: 'w'});
    $('.v_tool_down').tipsy({ gravity: 'n'});
  }


 
 $('.box-work figure a').append('<span />');
 $('.box-work figure a').append('<b />');
 $('.foto-carousel figure ').append('<span />');
 $('.foto-carousel figure ').append('<b />');
   
  $('.accordeon_css3_video ul li .block-accordeon figure a ').append('<b />');
   $('.accordeon_css3_video ul li .block-accordeon figure a ').append('<em />');    


   $('.box-photo a').append('<span />'); 
    $('.box-photo a').append('<strong />'); 
   $('.process-nav div:last-child,.process_steps_v2 li:last-child').addClass('last'); 
  
  $('.btn-large.btn-shadow').wrapInner('<span></span>'); 


  $(".block-team li").hover(
     function(){$(this).addClass("z-hover");},
     function(){$(this).removeClass("z-hover");   
    });



  
/* $(".carousel").hover(
     function(){$(this).addClass("z-hover");},
     function(){$(this).removeClass("z-hover");   
    });  
  */
/*     $(".carousel ").hover(
     function(){$(this).parent().parent().parent().parent().addClass("li-z");},
     function(){$(this).parent().parent().parent().parent().removeClass("li-z");   
    });*/
  
  
 $('.accordeon_css3_video ul li ').hover(
  function(){$(this).find('b').stop().animate({opacity:'1',top:'50%'}, 300,'easeOutQuad')},
  function(){$(this).find('b').stop().animate({opacity:'0',top:'20%'}, 300,'easeOutQuad')}
  );
  
/*  $('.accordeon_css3_video ul li.last_accord ').hover(
  function(){$(this).find('b').stop().animate({opacity:'1',top:'50%'})},
  function(){$(this).find('b').stop().animate({opacity:'1',top:'50%'})}
  );*/
  
 /*  $('.accordeon_css3_video li:hover + .last_accord ').hover(
  function(){$(this).find('b').stop().animate({opacity:'0',top:'20%'})},
  function(){$(this).find('b').stop().animate({opacity:'1',top:'50%'})}
  );
  
  $('.accordeon_css3_video li:hover + li + .last_accord ').hover(
  function(){$(this).find('b').stop().animate({opacity:'0',top:'20%'})},
  function(){$(this).find('b').stop().animate({opacity:'1',top:'50%'})}
  );*/
  
/*   $('.table_plan .footer_table td a ').hover(
  function(){$(this).stop().animate({padding: '15px 0'}, 300,'easeOutQuad')},
  function(){$(this).stop().animate({padding: '11px 0'}, 300,'easeOutQuad')}
  );*/
  
  
// -----------------------twitter  


    //jQuery('#twitter').tweet({
    //     modpath: 'twitter/',
    //     count: 3,
    //    loading_text: 'loading twitter feed...'
    //})  

//--------------------- carousel

 if($.fn.bxSlider)
$('#carousel-1').bxSlider({ 
   minSlides: 1,
   maxSlides: 3,
   move: 1,
   slideWidth: 270,
   slideMargin: 30,
  infiniteLoop: true,
  hideControlOnEnd: false,    
   pager: false,
   nextSelector: '.next',
   prevSelector: '.prev'   

}); 

if($.fn.bxSlider)
$('#v_carousel-1').bxSlider({ 
   minSlides: 1,
   maxSlides: 3,
   move: 1,
   slideWidth: 270,
   slideMargin: 30,
  infiniteLoop: true,
  hideControlOnEnd: false,    
   pager: false,
   nextSelector: '.vnext',
   prevSelector: '.vprev'   

}); 


 if($.fn.bxSlider){

$('#carousel-2').bxSlider({ 
   minSlides: 1,
   maxSlides: 1,
   moveSlides: 1,
   infiniteLoop: true,
   hideControlOnEnd: false, 
   slideWidth: 0,
   slideMargin: 30,   
   pager: false,
   nextSelector: '.next-1',
   prevSelector: '.prev-1'   

});
$('#v_carousel-2').bxSlider({ 
   minSlides: 1,
   maxSlides: 1,
   moveSlides: 1,
   infiniteLoop: true,
   hideControlOnEnd: false, 
   slideWidth: 0,
   slideMargin: 30,   
   pager: false,
   nextSelector: '.v_next-2',
   prevSelector: '.v_prev-2'   

});
$('#v_carousel-3').bxSlider({ 
   minSlides: 1,
   maxSlides: 1,
   moveSlides: 1,
   infiniteLoop: true,
   hideControlOnEnd: false, 
   slideWidth: 0,
   slideMargin: 30,   
   pager: false,
   nextSelector: '.v_next-3',
   prevSelector: '.v_prev-3'   

});
}
  

 if($.fn.bxSlider)
$('#carousel-3').bxSlider({ 
   minSlides: 1,
   maxSlides: 3,
   moveSlides: 1,
   infiniteLoop: true,
   hideControlOnEnd: false, 
   slideWidth: 370,
   slideMargin: 30,   
   pager: false,
   nextSelector: '.next-2',
   prevSelector: '.prev-2' 

});

 if($.fn.bxSlider)
$('#carousel-3_3').bxSlider({ 
   minSlides: 1,
   maxSlides: 4,
   moveSlides: 1,
   infiniteLoop: true,
   hideControlOnEnd: false, 
   slideWidth: 270,
   slideMargin: 30,   
   pager: false,
   nextSelector: '.next-2',
   prevSelector: '.prev-2' 

});

if($.fn.bxSlider)
$('#carousel-3_2').bxSlider({ 
   minSlides: 1,
   maxSlides: 1,
   moveSlides: 1,
   infiniteLoop: true,
   hideControlOnEnd: false, 
   slideWidth: 1170,
   slideMargin: 30,   
   pager: false,
   nextSelector: '.v_next-2',
   prevSelector: '.v_prev-2' 

}); 


 if($.fn.bxSlider)
$('#carousel-4').bxSlider({ 
    minSlides: 2,
    maxSlides: 6,
    moveSlides: 1,
    infiniteLoop: true,
    hideControlOnEnd: false,  
    slideWidth: 180,
    slideMargin: 16,    
    pager: false,
    nextSelector: '.next-4',
    prevSelector: '.prev-4'  

});


 if($.fn.bxSlider)
$('#carousel-5').bxSlider({ 
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    infiniteLoop: true,
    hideControlOnEnd: false,  
    slideWidth: 370,
    slideMargin: 30,    
    pager: false,
    nextSelector: '.next-5',
    prevSelector: '.prev-5'  

});

 if($.fn.bxSlider)
$('#carousel-6').bxSlider({ 
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    infiniteLoop: true,
    hideControlOnEnd: false,  
    slideWidth: 0,
    slideMargin: 0,   
    pager: false,
    nextSelector: '.next-6',
    prevSelector: '.prev-6'  

});


 if($.fn.bxSlider)
$('#carousel-7').bxSlider({ 
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    infiniteLoop: true,
    hideControlOnEnd: false,  
    slideWidth: 0,
    slideMargin: 0,   
    pager: false,
    nextSelector: '.next-7',
    prevSelector: '.prev-7'  

});


 if($.fn.bxSlider)
$('#carousel-8').bxSlider({ 
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    infiniteLoop: true,
    hideControlOnEnd: false,  
    slideWidth: 0,
    slideMargin: 30,    
    pager: false,
    nextSelector: '.next-8',
    prevSelector: '.prev-8'  

});

 if($.fn.bxSlider)
$('#carousel-9').bxSlider({ 
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    infiniteLoop: true,
    hideControlOnEnd: false,  
    slideWidth: 270,
    slideMargin: 30,    
    pager: false,
    nextSelector: '.next-9',
    prevSelector: '.prev-9'  

});

 if($.fn.bxSlider)
$('#carousel-10').bxSlider({  
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    infiniteLoop: true,
    hideControlOnEnd: false,  
    slideWidth: 270,
    slideMargin: 30,    
    pager: false,
    nextSelector: '.next-10',
    prevSelector: '.prev-10'  

});

 if($.fn.bxSlider)
$('#carousel-11').bxSlider({  
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    infiniteLoop: true,
    hideControlOnEnd: false,  
    slideWidth: 270,
    slideMargin: 30,    
    pager: false,
    nextSelector: '.next-11',
    prevSelector: '.prev-11'  

});


 if($.fn.bxSlider)
$('#carousel-12').bxSlider({  
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    infiniteLoop: true,
    hideControlOnEnd: false,
  controls: false,  
    slideWidth: 0,
    slideMargin: 0,   
    pager: false,
    nextSelector: '',
    prevSelector: '' ,
  auto: true,
    pause: 4000,
    autoStart: true,  
    autoHover: true

})

 if($.fn.flexslider)
jQuery('.flexslider').flexslider({
  animation: "fade",     
  slideshow: false,      
  slideshowSpeed: 7000,
  animationDuration: 600,
  prevText: "",
  nextText: "",
  controlNav: true ,
  video: true   
  })    


 if($.fn.flexslider)
jQuery('.flexslider1').flexslider({
  animation: "fade",     
  slideshow: false,      
  slideshowSpeed: 7000,
  animationDuration: 600,
  prevText: "",
  nextText: "",
  controlNav: true ,
   video: true    
  }) 
  
  if($.fn.flexslider)
jQuery('.flexslider2').flexslider({
  animation: "fade",     
  slideshow: false,      
  slideshowSpeed: 7000,
  animationDuration: 600,
  prevText: "",
  nextText: "",
  controlNav: false ,
   video: true    
  }) 
  
 if($.fn.flexslider)
jQuery('.flexslider3').flexslider({
  animation: "fade",     
  slideshow: false,      
  slideshowSpeed: 7000,
  animationDuration: 600,
  prevText: "",
  nextText: "",
  controlNav: false ,
   video: true    
  })  
  
 if($.fn.flexslider)
jQuery('.flexslider4').flexslider({
  animation: "fade",     
  slideshow: false,      
  slideshowSpeed: 7000,
  animationDuration: 600,
  prevText: "",
  nextText: "",
  controlNav: false ,
   video: true    
  }) 
   
      
   
   
   
/*   $("#shop-cart #cart-dropdown ").fadeOut();   
      
     $('#shop-cart .btn-cart').toggle(
    function(){
    $(this).parent().find("#cart-dropdown ").fadeIn();
    $(this).addClass("active");
    },        
     
    function(){
    $(this).parent().find("#cart-dropdown ").fadeOut();
    $(this).removeClass("active");
    })*/  
 
    
   $("#shop-cart #cart-dropdown ").slideUp();   
      
     $('#shop-cart .btn-cart').toggle(
    function(){
    $(this).parent().find("#cart-dropdown ").slideDown();
    $(this).addClass("active");
    },        
     
    function(){
    $(this).parent().find("#cart-dropdown ").slideUp();
    $(this).removeClass("active");
    })  
 
 
});   

//===================fixed header================
 $(window).scroll(function () {
    if (jQuery(this).scrollTop() > 130) {
        jQuery('.header_top').addClass('scrolled');
       } else {
        jQuery('.header_top').removeClass('scrolled');
       }
    });

//===================maxheight================
/*console.log(gvcsingle);*/
 if(typeof gvcsingle != 'undefined' && qvcsingle.length){
  var qvcs = qvcsingle.owlCarousel({
    itemsCustom : [[1199,3],[992,3],[768,3],[480,3],[300,3]],
    autoPlay : false,
    slideSpeed : 1000,
    autoHeight : true
  });

  $('.qv_btn_single_prev').on('click',function(){
    qvcs.trigger('owl.prev');
  });

  $('.qv_btn_single_next').on('click',function(){
    qvcs.trigger('owl.next');
  });
}

/*parsed HTML*/
$(function(){
  $(".maxheight").each(function(){
    $(this).contents().wrapAll("<div class='box_inner'></div>");
  })
});
/*add event*/
// $(window).bind("resize", height_handler).bind("load", height_handler)
// function height_handler(){

 
//     if($(window).width()>768){
//     $(".maxheight").equalHeights()
//     }else{
//     $(".maxheight").css({'height':'auto'});
//     }
 
// }
/*glob function*/
(function($){
  $.fn.equalHeights=function(minHeight,maxHeight){
    tallest=(minHeight)?minHeight:0;
    this.each(function(){
      if($(">.box_inner", this).outerHeight()>tallest){
        tallest=$(">.box_inner", this).outerHeight()
      }
    });
    if((maxHeight)&&tallest>maxHeight) tallest=maxHeight;
    return this.each(function(){$(this).height(tallest)})
  }
})(jQuery)

/*jQuery(document).ready(function(){
  jQuery(function(){
      jQuery('.sf-menu').mobileMenu();
    });
});*/

$(function(){
// IPad/IPhone
  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
    ua = navigator.userAgent,
 
    gestureStart = function () {
        viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    },
 
    scaleFix = function () {
      if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
        viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
        document.addEventListener("gesturestart", gestureStart, false);
      }
    };
scaleFix();

// Menu Android
if(window.orientation!=undefined){
 var regM = /ipod|ipad|iphone/gi,
  result = ua.match(regM)
 if(!result) {
  $('.sf-menu li').each(function(){

   if($(">ul", this)[0]){
    $(">a", this).toggle(
     function(){
      return false;
     },
     function(){
      window.location.href = $(this).attr("href");
     }
    );
   } 
  })
 }
}
});
/* ------ fi fixed position on Android -----*/
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')
/*--------------*/

jQuery(document).ready(function(){
  
jQuery('#accordion2 .accordion-body').prev().removeClass("active")
jQuery('#accordion2 .accordion-body.in').prev().addClass("active")
jQuery('#accordion2 .accordion-heading').click(function(){if(jQuery(this).hasClass('active')){jQuery(this).removeClass("active")}else{jQuery('#accordion2 .accordion-heading').removeClass("active")
jQuery(this).addClass("active")}})

jQuery('#accordion3 .accordion-body').prev().removeClass("active")
jQuery('#accordion3 .accordion-body.in').prev().addClass("active")
jQuery('#accordion3 .accordion-heading').click(function(){if(jQuery(this).hasClass('active')){jQuery(this).removeClass("active")}else{jQuery('#accordion3 .accordion-heading').removeClass("active")
jQuery(this).addClass("active")}})

jQuery('#accordion4 .accordion-body').prev().removeClass("active")
jQuery('#accordion4 .accordion-body.in').prev().addClass("active")
jQuery('#accordion4 .accordion-heading').click(function(){if(jQuery(this).hasClass('active')){jQuery(this).removeClass("active")}else{jQuery('#accordion4 .accordion-heading').removeClass("active")
jQuery(this).addClass("active")}})

jQuery('#accordion5 .accordion-body').prev().removeClass("active")
jQuery('#accordion5 .accordion-body.in').prev().addClass("active")
jQuery('#accordion5 .accordion-heading').click(function(){if(jQuery(this).hasClass('active')){jQuery(this).removeClass("active")}else{jQuery('#accordion5 .accordion-heading').removeClass("active")
jQuery(this).addClass("active")}})


jQuery('#accordion6 .accordion-body').prev().removeClass("active")
jQuery('#accordion6 .accordion-body.in').prev().addClass("active")
jQuery('#accordion6 .accordion-heading').click(function(){if(jQuery(this).hasClass('active')){jQuery(this).removeClass("active")}else{jQuery('#accordion6 .accordion-heading').removeClass("active")
jQuery(this).addClass("active")}})

jQuery('#accordion7 .accordion-body').prev().removeClass("active")
jQuery('#accordion7 .accordion-body.in').prev().addClass("active")
jQuery('#accordion7 .accordion-heading').click(function(){if(jQuery(this).hasClass('active')){jQuery(this).removeClass("active")}else{jQuery('#accordion7 .accordion-heading').removeClass("active")
jQuery(this).addClass("active")}})


});

// custom select

  jQuery(document).ready(function(){

    $('.custom_select').each(function(){
      var list = $(this).children('ul'),
        select = $(this).find('select'),
        title = $(this).find('.select_title');
      title.css('',title.outerWidth());

      // select items to list items

      for(var i = 0,len = select.children('option').length;i < len;i++){
        list.append('<li class="tr_delay_hover">'+select.children('option').eq(i).text()+'</li>')
      }
      select.hide();

      // open list
      
      title.on('click',function(){
        list.slideToggle(400);
        $(this).toggleClass('active');
      });

      // selected option

      list.on('click','li',function(){
        var val = $(this).text();
        title.text(val);
        list.slideUp(400);
        select.val(val);
        title.toggleClass('active');
      });

    });

    // main menu

    window.responsiveMenu = function(){

      var nav = $('.nav-collapse .nav'),
        header = $('body>header');

       $('<b class="sf-sub-indicator"></b>').appendTo(nav.find('.sub-menu').children('a'));

       $('.nav-collapse_ .nav > li > a').append('<span />');

      var rMenu = new Object();

      rMenu.init = function(){
        rMenu.checkWindowSize();
        window.onresize = rMenu.checkWindowSize;
      }

      rMenu.checkWindowSize = function(){

        if($(window).width() < 769){
          rMenu.Activate();
        }
        else{
          rMenu.Deactivate();
        }

      }
      // add click events
      rMenu.Activate = function(){
        header.off('click').on('click.responsivemenu','#menu_button',rMenu.openClose);
        header.on('click.responsivemenu','.sf-menu li a',rMenu.openCloseSubMenu);
      }
      // remove click events
      rMenu.Deactivate = function(){
        header.off('.responsivemenu');
        nav.removeAttr('style').find('li').removeClass('current_click')
          .end().find('ul').removeAttr('style');
        $('#menu_button').removeClass('active');
      }

      rMenu.openClose = function(){
        $(this).toggleClass('active');
        nav.stop().slideToggle();
      }

      jQuery(function($) {
        var open = false;

        function resizeMenu() {
          if ($(window).width() < 769) {
            if (!open) {
                $(".list-panel").hide();
            }
            $("#menu-button").show();               
          }
          else if ($(window).width() >= 768) {
            if (!open) {
                $(".list-panel").show();
            }
            $("#menu-button").hide();
          }
        }

        function setupMenuButton() {
          $("#menu-button").click(function(e) {
            e.preventDefault();

            if (open) {
              $(".list-panel").fadeOut();
              $("#menu-button").toggleClass("selected");
            }
            else {
              $(".list-panel").fadeIn();
              $("#menu-button").toggleClass("selected");
            }
            open = !open;
          });
        }


        $(window).resize(resizeMenu);

        resizeMenu();
        setupMenuButton();

        $(".block-form #form-search ").fadeOut();   
      
         $('.block-form .btn-search').toggle(
        function(){
        $(this).parent().find("#form-search ").fadeIn();
        $(this).addClass("active");
        },        
         
        function(){
        $(this).parent().find("#form-search ").fadeOut();
        $(this).removeClass("active");
        })
    });

    //============================== Drop Down Lists ============================
    $(function(){
      $('.slct').click(function(){
        var dropBlock = $(this).parent().find('.drop');
        if( dropBlock.is(':hidden') ) {
          dropBlock.slideDown();
          $(this).addClass('active');
          $('.drop').find('li').click(function(){
            var selectResult = $(this).html();
            $(this).parent().parent().find('input').val(selectResult);
            $('.slct').removeClass('active').html(selectResult);
            dropBlock.slideUp();
          });
        } else {
          $(this).removeClass('active');
          dropBlock.slideUp();
        }
        return false;
      });
      $('.slct2').click(function(){
        var dropBlock = $(this).parent().find('.drop2');
        if( dropBlock.is(':hidden') ) {
          dropBlock.slideDown();
          $(this).addClass('active');
          $('.drop2').find('li').click(function(){
            var selectResult = $(this).html();
            $(this).parent().parent().find('input').val(selectResult);
            $('.slct2').removeClass('active').html(selectResult);
            dropBlock.slideUp();
          });
        } else {
          $(this).removeClass('active');
          dropBlock.slideUp();
        }
        return false;
      });

    })

      rMenu.openCloseSubMenu = function(e){

        var self = $(this);

        if(self.next('ul').length || self.next('.mega_menu_container').length){
          self.parent()
            .addClass('current_click')
            .siblings()
            .removeClass('current_click')
            .children(':not(a)')
            .slideUp();
          self.next().stop().slideToggle();
          self.parent().siblings().children('a').removeClass('prevented');
          
          if(!(self.hasClass('prevented'))){
            e.preventDefault();
            self.addClass('prevented');
          }else{
            self.removeClass('prevented');
          }
        }
      }
      rMenu.init();
    }
    responsiveMenu();

    function getCount(element){
      var len = element.length - 1,
          parentWidth = element.parent().outerWidth(),
          margin = parentWidth / len - element.outerWidth() - (len+1);
      element.not(":last-child").css('margin-right',margin);

    }
    (function(){
      var container,pag,track;
      if($('.process-wrap').length){
        $('.process-wrap').owlCarousel({
          singleItem : true,
          pagination:true,
          autoHeight:true,
          transitionStyle : "backSlide",
          afterInit : function(){
            container = $('.process-wrap').find('.owl-pagination').addClass('clearfix');
            pag = container.children('div');
            container.parent().append('<div class="track"><div class="fill last"></div></div>');
            getCount(pag);
            track = $('.process-wrap').find('.track').children('.fill');
          },
          afterMove : function(){
            var currentSlide = container.children('.active').index();
            pag.eq(currentSlide).prevAll().addClass('active');
            pag = container.children('div');
  
             var offset = pag.eq(currentSlide).position().left;

                track.stop().animate({
                  'width':offset
                },150);
              
          },
          afterUpdate : function(){
            pag = container.children('div');
            getCount(pag);
            var currentSlide = container.children('.active').index();
            pag.eq(currentSlide).prevAll().addClass('active');
            var offset = pag.eq(currentSlide).position().left;
            track.css('width',offset);
          }
        });
      }
    })();
    

  });

//quick preview popup
    
    (function(){
      var pr = $('.popup_wrap .qv_preview > img');
      $('.popup_wrap .qv_carousel .owl-item:first-child li').addClass('active');
      $('.popup_wrap .qv_carousel').on('click','li:not(.active)',function(){
        $(this).addClass('active').parent().siblings().children('li').removeClass('active');
        var src = $(this).data('src');
        if(!($('html').hasClass('ie9'))){
          pr.addClass('hide');
          setTimeout(function(){
            pr.attr('src',src).removeClass('hide');
          },400);
        }else{
          pr.attr('src',src);
        }
        $('.popup_wrap [class*="qv_carousel"]').each(function(){
          var pr = $(this).closest('.qv_carousel_wrap').prev('.qv_preview').children('img');
          $(this).on('click','li',function(){
            var src = $(this).data('src');
            if(!($('html').hasClass('ie9'))){
              pr.addClass('hide');
              setTimeout(function(){
                pr.attr('src',src).removeClass('hide');
              },400);
            }else{
            pr.attr('src',src);
            }
          });
          });
        });
    
      })();

    //elevate zoom

    (function(){

      if($('[data-zoom-image]').length){

        var button = $('.qv_preview [class*="button_type_"]');

        $("#zoom_image").elevateZoom({
          gallery:'qv_carousel_single',
            zoomWindowFadeIn: 500,
          zoomWindowFadeOut: 500
        }); 

        button.on("click", function(e){
          var ez = $('#zoom_image').data('elevateZoom');
          $.fancybox(ez.getGalleryList());
            e.preventDefault();
        });
      }

    })();

    // quick view carousel

    (function(){
      var qvc = $('.qv_carousel'),
        qvcsingle = $('.qv_carousel_single');
      if(qvc.length){
        var qv = qvc.owlCarousel({
          items: 3,
          autoPlay : false,
          slideSpeed : 1000,
          autoHeight : true
        });

        $('.qv_btn_prev').on('click',function(){
          qv.trigger('owl.prev');
        });

        $('.qv_btn_next').on('click',function(){
          qv.trigger('owl.next');
        });
      }
      if(qvcsingle.length){
        var qvcs = qvcsingle.owlCarousel({
          itemsCustom : [[1199,3],[992,3],[768,3],[480,3],[300,3]],
          autoPlay : false,
          slideSpeed : 1000,
          autoHeight : true
        });

        $('.qv_btn_single_prev').on('click',function(){
          qvcs.trigger('owl.prev');
        });

        $('.qv_btn_single_next').on('click',function(){
          qvcs.trigger('owl.next');
        });
      }

    })();

    // quantity

    $(document).ready(function() {

      $('#q_up').click(function(){

        var q_val_up=parseInt($("input#quantity_wanted").val());
        if(isNaN(q_val_up)){
          q_val_up=0;
        }
        $("input#quantity_wanted").val(q_val_up+1).keyup();
      });

      $('#q_down').click(function(){

        var q_val_up=parseInt($("input#quantity_wanted").val());
        if(isNaN(q_val_up)){
          q_val_up=0;
        }
        if(q_val_up>1){
          $("input#quantity_wanted").val(q_val_up-1).keyup();
        };

      });


      $('#q_up2').click(function(){

        var q_val_up=parseInt($("input#quantity_wanted2").val());
        if(isNaN(q_val_up)){
          q_val_up=0;
        }
        $("input#quantity_wanted2").val(q_val_up+1).keyup();
      });

      $('#q_down2').click(function(){

        var q_val_up=parseInt($("input#quantity_wanted2").val());
        if(isNaN(q_val_up)){
          q_val_up=0;
        }
        if(q_val_up>1){
          $("input#quantity_wanted2").val(q_val_up-1).keyup();
        };

      });

      $('#q_up3').click(function(){

        var q_val_up=parseInt($("input#quantity_wanted3").val());
        if(isNaN(q_val_up)){
          q_val_up=0;
        }
        $("input#quantity_wanted3").val(q_val_up+1).keyup();
      });

      $('#q_down3').click(function(){

        var q_val_up=parseInt($("input#quantity_wanted3").val());
        if(isNaN(q_val_up)){
          q_val_up=0;
        }
        if(q_val_up>1){
          $("input#quantity_wanted3").val(q_val_up-1).keyup();
        };

      });

      $('#q_up4').click(function(){

        var q_val_up=parseInt($("input#quantity_wanted4").val());
        if(isNaN(q_val_up)){
          q_val_up=0;
        }
        $("input#quantity_wanted4").val(q_val_up+1).keyup();
      });

      $('#q_down4').click(function(){

        var q_val_up=parseInt($("input#quantity_wanted4").val());
        if(isNaN(q_val_up)){
          q_val_up=0;
        }
        if(q_val_up>1){
          $("input#quantity_wanted4").val(q_val_up-1).keyup();
        };

      });



    });


    // contact form

    (function(){

      var cf = $('#contactform');
      cf.append('<div class="message_container d_none m_top_20"></div>');

      cf.on("submit",function(event){

        var self = $(this),text;

        var request = $.ajax({
          url:"bat/mail.php",
          type : "post",
          data : self.serialize()
        });

        request.then(function(data){
          if(data == "1"){

            text = "Your message has been sent successfully!";

            cf.find('input:not([type="submit"]),textarea').val('');

            $('.message_container').html('<div class="alert_box r_corners color_green success"><i class="fa fa-smile-o"></i><p>'+text+'</p></div>')
              .delay(150)
              .slideDown(300)
              .delay(4000)
              .slideUp(300,function(){
                $(this).html("");
              });

          }
          else{
            if(cf.find('textarea').val().length < 20){
              text = "Message must contain at least 20 characters!"
            }
            if(cf.find('input').val() == ""){
              text = "All required fields must be filled!";
            }
            $('.message_container').html('<div class="alert_box r_corners error"><i class="fa fa-exclamation-triangle"></i><p>'+text+'</p></div>')
              .delay(150)
              .slideDown(300)
              .delay(4000)
              .slideUp(300,function(){
                $(this).html("");
              });
          }
        },function(){
          $('.message_container').html('<div class="alert_box r_corners error"><i class="fa fa-exclamation-triangle"></i><p>Connection to server failed!</p></div>')
              .delay(150)
              .slideDown(300)
              .delay(4000)
              .slideUp(300,function(){
                $(this).html("");
              });
        });


        event.preventDefault();
      });

    })();
    
   var isSmall;

    $(document).ready(function() {
     checkResponcive();
     myAccordeon($('.accordeon_3'));
     myAccordeon($('.accordeon_4'));
    });

    $(window).resize(checkResponcive);

    function checkResponcive() {
     isSmall = $(window).width() <= 768;
     if(isSmall) {
      $('.last_accord').removeClass('last_accord');
     }
    }

    function myAccordeon($cont) {
     
     var $list = $cont.find('li');

     $list.on('mouseover', function(){
      if (isSmall) return;
      $list.removeClass('last_accord');
      $(this).addClass('last_accord');
     });

     $cont.on('mouseout', function(){
      if (isSmall) return;
      $list.removeClass('last_accord');
      $list.first().addClass('last_accord');
     });
    }



    // ie9 placeholder

    $(' .ie9 [placeholder]').each(function(){

     var self = $(this),
      ph = self.attr('placeholder');

     self.val(ph);

     self.on('focus',function(){
      if($(this).val() == ph){
       $(this).val("");
      }
     }).on('blur',function(){
      if($(this).val() == ""){
       $(this).val(ph);
      }
     });

    });

    // Shop Accordion

    jQuery(window).load(function() {
      jQuery('#accordion li.level0  ul').each(function(index) {jQuery(this).prev().addClass('idCatSubcat')});
      jQuery('#accordion li.level0 ul').css('display','none');
      jQuery('#accordion li.active').each(function() {
        jQuery('#accordion li.active > span').addClass('expanded');
      });
      jQuery('#accordion li.level0.active > ul').css('display','block');
      jQuery('#accordion li.level0.active > ul  li.active > ul').css('display','block');
      jQuery('#accordion li.level0.active > ul  li.active > ul li.active > ul').css('display','block');
      jQuery('#accordion li.level0 ul').each(function(index) {
        jQuery(this).prev().addClass('close').click(function() {
        if (jQuery(this).next().css('display') == 'none') {
         jQuery(this).next().slideDown(200, function () {
          jQuery(this).prev().removeClass('collapsed').addClass('expanded');
          });
        }else {
          jQuery(this).next().slideUp(200, function () {
          jQuery(this).prev().removeClass('expanded').addClass('collapsed');
          jQuery(this).find('ul').each(function() {
            jQuery(this).hide().prev().removeClass('expanded').addClass('collapsed');
          });
          });
        }
        return false;
        });
      });
    });

    // Nav_List

    jQuery(document).ready(function($) {
      $('.navigation_grid .hasTooltip , #product_list.v_grid .hasTooltip').tooltip('hide'); 
      // $('.Results select').styler();
      var cc = $('list_grid');
      if (cc == 'g') {
        $('#product_list').addClass('v_list');
        $('#product_list').removeClass('v_grid');
        $('.Clist').addClass('active');
        $('.Cgrid').removeClass('active');
      } else {
        $('#product_list').removeClass('v_list');
        $('#product_list').addClass('v_grid');
        $('.Cgrid').addClass('active');
        $('.Clist').removeClass('active');    
      }

      $('.Cgrid').click(function() {
        console.log(1);
        $(this).addClass('active');
        $('.Clist').removeClass('active');
        $('#product_list').fadeOut(300, function() {
          $(this).addClass('v_grid').removeClass('v_list').fadeIn(300);
        });
        // $.cookie('list_grid', '1' , { expires: 7, path: vmSiteurl });
        return false;
      });
      
      $('.Clist').click(function() {
        console.log(2);
        $(this).addClass('active');
        $('.Cgrid').removeClass('active');              
        $('#product_list').fadeOut(300, function() {
          $(this).removeClass('v_grid').addClass('v_list').fadeIn(300);
        });
        // $.cookie('list_grid','g', { expires: 7, path: vmSiteurl });
        return false;
      }); 

    });

    // popup  

      (function(){

        $('.popup').on('popup/position',function(){
          var _this = $(this),
          pos = setTimeout(function(){
            var mt = _this.outerHeight() / -2,
              ml = _this.outerWidth() / -2;
            _this.css({
              'margin-left':ml,
              'margin-top':mt
            });
            clearTimeout(pos);
          },100);
        });

        var close = $('.popup > .close');
        if($('[data-popup]').length){
          $("body").on('click','[data-popup]',function(e){
            var popup = $(this).data('popup'),
              pc = $(popup).find('.popup');

            pc.trigger('popup/position');

            $(popup).fadeIn(function(){
              var scroll = $('.custom_scrollbar');
              if(scroll.length){
                var isVisible = setInterval(function(){
                  if(scroll.is(':visible')){
                    scroll.customScrollbar({
                      preventDefaultScroll: true
                    });
                    clearInterval(isVisible);
                  }
                },100);
              }


              $(popup).on('click',function(e){
                if($(e.target).hasClass('popup_wrap')){
                  $(this).fadeOut();
                }
              });
            });
            e.preventDefault();
          });
        }
        close.on('click',function(){
          $(this).closest('.popup_wrap').fadeOut();
        });
      })();

    // Quick View

    /*jQuery.ias({
                   container :  ".loadmore #slider",
                   item: ".item",
                   pagination: ".pagination.vm",
                   next: ".pagination.vm .next a",
                   triggerPageThreshold: "99999",
         trigger: false,
         history : false,
                   loader: "<img src=\"/reviver/media/ajax_scroll/assets/ajax-loader.gif\"/>",
                   noneleft: false,
         onRenderComplete: function () {
           jQuery("#product_list.grid .hasTooltip").tooltip("hide");
           jQuery("#product_list .vmproduct li").each(function(indx, element){
              var my_product_id = jQuery(this).find(".quick_ids").val();
              jQuery(this).append("<div class=\"quick_btn\" onClick =\"quick_btn("+my_product_id+")\"><i class=\"icon-eye-open\"></i>"+show_quicktext+"</div>");
              jQuery(this).find(".quick_id").remove();
              Virtuemart.product(jQuery("form.product"));
              jQuery("form.js-recalculate").each(function(){
              if (jQuery(this).find(".product-fields").length) {
                var id= jQuery(this).find("input[name=\"virtuemart_product_id[]\"]").val();
                Virtuemart.setproducttype(jQuery(this),id);
              }
              });
          });
          
        }
    });*/

    // Count Block

    jQuery(document).ready(function() {

      $('#product_list div.limitted_offer').each(function() {        
        var tip = $(this).find('div.count_holder_small');
        $(this).hover(
            function() { tip.appendTo('body'); },
            function() { tip.appendTo(this); }
        ).mousemove(function(e) {
            var x = e.pageX + 60,
                y = e.pageY - 50,
                w = tip.width(),
                h = tip.height(),
                dx = $(window).width() - (x + w),
                dy = $(window).height() - (y + h);

            if ( dx < 50 ) x = e.pageX - w - 60;
            if ( dy < 50 ) y = e.pageY - h + 130;

            tip.css({ left: x, top: y });
          });         
      });

    });

    // Page Reload

    $(document).ready(function(){
      $(".menu_link").click(function(){
        setTimeout(function() {
         location.reload();
        }, 100);
      });
    });

    // appear animation
    function animate(){
     $("[data-appear-animation]").each(function() {

         var self = $(this);

         self.addClass("appear-animation");

         if($(window).width() > 800) {
          self.appear(function() {

           var delay = (self.attr("data-appear-animation-delay") ? self.attr("data-appear-animation-delay") : 1);

           if(delay > 1) self.css("animation-delay", delay + "ms");
           self.addClass(self.attr("data-appear-animation"));

           setTimeout(function() {
            self.addClass("appear-animation-visible");
           }, delay);

          }, {accX: 0, accY: -150});
         } else {
          self.addClass("appear-animation-visible");
         }
        });
    }

    animate();

    $(window).on('resize',animate);

     

    


})(jQuery);




    