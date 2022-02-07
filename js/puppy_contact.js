$(document).ready(function (){
   $('#submitFormContact').click(function (){
      if ($('#Ho').val()==''|| $('#Ho').val()==null){
         $('.message.name').text('vui lòng nhập đầy đủ họ và tên');
         $('#Ho').focus();
         return false;
      }
      else if ($('#Ten').val() ==null|| $('#Ten').val() ==''){
         $('.message.name').text('vui lòng nhập đầy đủ họ và tên');
         $('#Ten').focus();
         return false;
      }

      else if ($('#email').val() ==null|| $('#email').val() == ''){
         $('.message.email').text('vui lòng nhập email');
         $('#email').focus();
         return false;
      }
      else if ($('#content').val() ==null|| $('#content').val() == ''){
         $('.message.content').text('nội dung đang trống !');
         $('#content').focus();
         return false;
      }
      else{
         alert('thành công');
      }
   })
});