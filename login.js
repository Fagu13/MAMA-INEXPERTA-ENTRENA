$(document).ready(function(){

    var loginClicked = false;

    $('form').find('.btn').on('click',function(){

        if (!loginClicked) {


       $(this).parent().css({
         'height' : '350px',
         'transform' : 'translateY(50px)'
       });
         $(this).siblings('.form-group').css({
           'top':'20%'
         });
         $(this).siblings('.links').css({
           'top':'65%'
         });
        } else {
            // Redirigir a la página "dashboard.html" en el segundo clic
            window.location.href = 'index.html';
          }

          // Cambiar el texto del botón en el segundo clic
          $(this).val(loginClicked ? 'login' : 'entrar');
          
          // Cambiar el estado del clic
          loginClicked = !loginClicked;
        });

     
   
   
   /*-------- focus in ---------*/
   $('.pwd').on('focusin',function(){
     $(this).siblings('.user').css({
       'z-index'   :'1',
       'background':'rgba(0,0,0,.1)',
     });
      $(this).css({
       'z-index' : '2',
       'background' : '#fff',
       });
   });
   
   
    $('.user').on('focusin',function(){
     $(this).siblings('.pwd').css({
       'z-index'   :'1',
       'background':'rgba(0,0,0,.1)'
     });
     $(this).css({
       'z-index' : '2',
       'background' : '#fff'
      });
   });
   
   /*----------- focus out ---------*/
   $('.pwd').on('focusout',function(){
     $(this).siblings('.user').css({
       'z-index'   :'1',
       'background':'rgba(0,0,0,.1)'
     });
     $(this).css({
       'z-index' : '2',
       'background' : '#fff'
     });
   });
   
   
    $('.user').on('focusout',function(){
     $(this).siblings('.pwd').css({
       'z-index'   :'1',
       'background':'rgba(0,0,0,.1)'
     });
     $(this).css({
       'z-index' : '2',
       'background' : '#fff'
      });
   });
 })

 
