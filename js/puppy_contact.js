$(document).ready(function (){
   $('.message.name').hide();
   $('.message.email').hide();
   $('.message.content').hide();


   $('#submitFormContact').click(function (){
      if ($('#Ho').val()==''|| $('#Ho').val()==null){
         $('.message.name').show();
         $('#Ho').focus();
         return false;
      }
      else if ($('#Ten').val() ==null|| $('#Ten').val() ==''){
         $('.message.name').show();
         $('#Ten').focus();
         return false;
      }

      else if ($('#email').val() ==null|| $('#email').val() == ''){
         $('.message.email').show();
         $('#email').focus();
         return false;
      }
      else if ($('#content').val() ==null|| $('#content').val() == ''){
         $('.message.content').show();
         $('#content').focus();
         return false;
      }
      else{
         alert('thành công');
      }
   })
});