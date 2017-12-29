$(function () {
    $(".datepicker").datepicker({
        autoclose: true,
        todayHighlight: true
    });
});

//Validate form
var form = $('#date_filter'),
    btn = form.find('.btn_submit');

btn.click(function(){

    var dm = new Date($('#end_date').val()) - new Date($('#start_date').val());

    if ( dm < 0 ){
        alert('The interval is not correctly selected!');
        return false
    } else {
        form.submit();
    }
});



