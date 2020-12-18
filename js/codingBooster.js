$(document).ready(function(){
    $("#preview").click(function(){
        var isEmpty = $("#code_text").val();
        if(isEmpty != ""){
            $.ajax({
                url: '/',
                data: {'csrfmiddlewaretoken': '{{ csrf_token }}'},
                success: function (data) {
                    $('#getText').val(data);  
                }
          });
        }
    });
});