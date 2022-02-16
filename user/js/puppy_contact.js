$(document).ready(function (){
   $('.message.name').hide();
   $('.message.email').hide();
   $('.message.content').hide();
    var submit = true;
      var ho = $('#Ho');
   $('#submitFormContact').click(function (){

     if ($('#content').val() ==null|| $('#content').val() == ''){
         $('#content').addClass('error');
         $('.message.content').show();
         $('#content').focus();
         submit =false;
      }
     else{
         $('#content').removeClass('error');
         $('.message.content').hide();
     }

     if ($('#email').val() ==null|| $('#email').val() == ''){
         $('#email').addClass('error');
           $('.message.email').show();
           $('#email').focus();
           submit =false;
       }else{
         $('#email').removeClass('error');
           $('.message.email').hide();
       }

       if (ho.val()==''|| ho.val()==null){
           ho.addClass('error');
           $('.message.name').show();
           $('#Ho').focus();
           submit = false;
       }
       else{
           ho.removeClass('error');
           $('.message.name').show();
       }

        if ($('#Ten').val() ==null|| $('#Ten').val() =='') {
           $('#Ten').addClass('error');
           $('.message.name').show();
           $('#Ten').focus();
           submit =false;
       }
       else{
            $('#Ten').removeClass('error');
           $('.message.name').hide();
       }


     if (submit ===false){
         return false;
     }
     else{
         alert('Gui thanh cong');
     }

   });

});