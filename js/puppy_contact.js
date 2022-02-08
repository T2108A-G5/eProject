$(document).ready(function (){
   $('.message.name').hide();
   $('.message.email').hide();
   $('.message.content').hide();

      var ho = $('#Ho');
   $('#submitFormContact').click(function (){
      if (ho.val()===''|| ho.val()==null){
         $('.message.name').show();
         $('#Ho').focus();
         return false;
      }
<<<<<<< Updated upstream
       else if ($('#Ten').val() ==null|| $('#Ten').val() ==''){
=======
      else{
         $('.message.name').hide();
      }
      if ($('#Ten').val() ==null|| $('#Ten').val() ==''){
>>>>>>> Stashed changes
         $('.message.name').show();
         $('#Ten').focus();
         return false;
      }
<<<<<<< Updated upstream
       else{
=======
      else{
>>>>>>> Stashed changes
         $('.message.name').hide();
      }

      if ($('#email').val() ==null|| $('#email').val() == ''){
         $('.message.email').show();
         $('#email').focus();
         return false;
      }else{
         $('.message.email').hide();
      }
<<<<<<< Updated upstream
       if ($('#content').val() ==null|| $('#content').val() == ''){
=======
      else{
         $('.message.email').hide();
      }
     if ($('#content').val() ==null|| $('#content').val() == ''){
>>>>>>> Stashed changes
         $('.message.content').show();
         $('#content').focus();
         return false;
      }
<<<<<<< Updated upstream
      else{
          $('.message.content').hide();
         alert('thành công');
=======
     else{
         $('.message.content').hide();
         alert('thanh cong');
>>>>>>> Stashed changes
      }

   })
});