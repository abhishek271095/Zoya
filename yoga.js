$(document).ready(function(){

     var checkScrollBar = function(){
       $('.mynav').css({
         backgroundColor: $(this).scrollTop() > 200 ?
           '#17a2b8' : 'transparent'
       })
     }
     $(window).on('load resize scroll', checkScrollBar)
     });