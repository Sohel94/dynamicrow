var rowCount = 1;
  
  $('#add').click(function() {
    rowCount++;
    $('#orders').append(
        '<tr id="row'+rowCount+'"><td><input class="form-control man_q54" type="number" data-type="man_q54" id="man_q54_'+rowCount+'" name="man_q54[]" for="'+rowCount+'"/></td>'+
        // '<input class="form-control" type="hidden" data-type="product_id" id="product_id_'+rowCount+'" name="product_id[]" for="'+rowCount+'"/>'+
        '<td><input class="form-control woman_q54" type="number" class="woman_q54" id="woman_q54_'+rowCount+'" name="woman_q54[]" for="'+rowCount+'"/> </td>'+
        '<td><input class="form-control third_gender_q54" type="number" class="third_gender_q54" id="third_gender_q54_'+rowCount+'" name="third_gender_q54[]" for="'+rowCount+'"/> </td>'+
        '<td><input class="form-control total_q54" type="text" id="total_q54_'+rowCount+'" name="total_q54[]"  for="'+rowCount+'" readonly/> </td>'+
        '<td><button type="button" name="remove" id="'+rowCount+'" class="btn btn-danger btn_remove cicle">-</button></td></tr>');
});

// Add a generic event listener for any change on quantity or price classed inputs
$("#orders").on('input', 'input.man_q54,input.woman_q54,input.third_gender_q54', function() {
  getTotalCost($(this).attr("for"));
});

$(document).on('click', '.btn_remove', function() {
  var button_id = $(this).attr('id');
  $('#row'+button_id+'').remove();
});

// Using a new index rather than your global variable i
function getTotalCost(ind) {
  var man = $('#man_q54_'+ind).val()||0;
  var woman = $('#woman_q54_'+ind).val()||0;
  var third_gender = $('#third_gender_q54_'+ind).val()||0;


  var totNumber = parseInt(man) + parseInt(woman)+parseInt(third_gender);
  var tot = totNumber;
  $('#total_q54_'+ind).val(tot)||0;
  calculateSubTotal();
}

function calculateSubTotal() {
  var subtotal = 0;
  $('.total_q54').each(function() {
     subtotal += parseFloat($(this).val());
  });
  $('#subtotal').val(subtotal)||0;
}