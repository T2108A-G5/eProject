$(document).ready(function (){

    $('#add-dog').click(function (){
        var tinhCach = CKEDITOR.instances.tinhCach.getData();
        var LuuY = CKEDITOR.instances.LuuY.getData();
        var LichSuRaDoi = CKEDITOR.instances.lichSuRaDoi.getData();
       var check = true;
        $('#hello').text(tinhCach);
        if (LichSuRaDoi =='' || LichSuRaDoi ==null){
            $('#cke_3_contents').addClass('error');
            $('#cke_3_contents').focus();
            check = false;
        }
        else{
            $('#cke_3_contents').removeClass('error');
        }
        if (LuuY== '' || LuuY==null){
            $('#cke_2_contents').addClass('error');
            $('#cke_2_contents').focus();
            check = false;
        }
        else{
            $('#cke_2_contents').removeClass('error');
        }
        if (tinhCach == '' || tinhCach==null){
            $('#cke_1_contents').addClass('error');
            $('#cke_1_contents').focus();
            check = false;
        }
        else{
            $('#cke_1_contents').removeClass('error');
        }

        if ($('#triTue').val() == '' || $('#triTue').val()==null){
            $('#triTue').addClass('error');
            $('#triTue').focus();
            check = false;
        }
        else{
            $('#triTue').removeClass('error');
        }
        if ($('#tuoiTho').val() == '' || $('#tuoiTho').val()==null || isNaN($('#tuoiTho').val())){
            $('#tuoiTho').addClass('error');
            $('#tuoiTho').focus();
            check = false;
        }
        else{
            $('#tuoiTho').removeClass('error');
        }
        if ($('#trongLuong').val() == '' || $('#trongLuong').val()==null || isNaN($('#trongLuong').val()) ){
            alert('vui long nhap so ');
            $('#trongLuong').addClass('error');
            $('#trongLuong').focus();
            check = false;
        }
        else{
            $('#trongLuong').removeClass('error');
        }
        if ($('#chieuCao').val() == '' || $('#chieuCao').val()==null || isNaN($('#chieuCao').val()) ){
            alert('vui long nhap so ');
            $('#chieuCao').addClass('error');
            $('#chieuCao').focus();
            check = false;
        }
        else{
            $('#chieuCao').removeClass('error');
        }
        if ($('#khuVucSong').val() == '' || $('#khuVucSong').val()==null){
            $('#khuVucSong').addClass('error');
            $('#khuVucSong').focus();
            check = false;
        }
        else{
            $('#khuVucSong').removeClass('error');
        }
        if ($('#tenCho').val() == '' || $('#tenCho').val()==null){
            $('#tenCho').addClass('error');
            $('#tenCho').focus();
            check = false;
        }
        else{
            $('#tenCho').removeClass('error');
        }
        if ($('#img-dog').val() == '' || $('#img-dog').val()==null){
            $('#img-dog').addClass('error');
            $('#img-dog').focus();
            check = false;
        }
        else{
            $('#img-dog').removeClass('error');
        }
        if ($('#batNguon').val() == '' || $('#batNguon').val()==null){
            $('#batNguon').addClass('error');
            $('#batNguon').focus();
            check = false;
        }
        else{
            $('#batNguon').removeClass('error');
        }


       if ($('#nhomGiong').val() == '' || $('#nhomGiong').val()==null){
           $('#nhomGiong').addClass('error');
           $('#nhomGiong').focus();
           check = false;
       }
       else{
           $('#nhomGiong').removeClass('error');
       }

       if (check == true){
           alert('thanhcong');
       }else{
           return false;
       }
    });
});
