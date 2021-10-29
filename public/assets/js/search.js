
$("#the_search").click(function(event){
    event.preventDefault();
    var form = $('#search_form'); // refer the form you want
    var url = form.attr('action'); // take the action of the url
    var data = form.serialize(); // serialize the data in  the form
    // alert(data);

    jQuery.support.cors = true;
    $.ajax({
        url: url,
        method:"POST",
        data:data,
        dataType: 'json',
        beforeSend:function(){
            $('.ti-search').addClass('fa fa-cog fa-spin');
        },
        success:function(response){
            if (response.status == 'error'){
                toastr.error(response.message,'Error');
                return false
            }
            console.log(99);
            $('#search_res').html(response.search);
        },
        error: function (data) {
            toastr.error('Ooops something went wrong!','Error');
        },
        complete : function (response){
            $('.ti-search').removeClass('fa fa-cog fa-spin');
        }
    });
});
