$(document).ready(function (){
   $('.message.name').hide();
   $('.message.email').hide();
   $('.message.content').hide();
    var submit = true;
      var ho = $('#Ho');
   $('#submitFormContact').click(function (){

     if ($('#content').val() ==null|| $('#content').val() == ''){
         $('.message.content').show();
         $('#content').focus();
         submit =false;
      }
     else{
         $('.message.content').hide();
     }

     if ($('#email').val() ==null|| $('#email').val() == ''){
           $('.message.email').show();
           $('#email').focus();
           submit =false;
       }else{
           $('.message.email').hide();
       }

       if (ho.val()==''|| ho.val()==null){
           $('.message.name').show();
           $('#Ho').focus();
           submit = false;
       }

       else if ($('#Ten').val() ==null|| $('#Ten').val() =='') {
           $('.message.name').show();
           $('#Ten').focus();
           submit =false;
       }
       else{
           $('.message.name').hide();
       }


     if (submit ===false){
         return false;
     }
     else{
         alert('dang nhap thanh cong');
     }

   })
});