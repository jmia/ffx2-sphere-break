/* Input */
$(function () {
  // Initialize input
  $('#main_grid .coin, #main_grid #core_number, .echo.box .value').each(function (e) {
    $(this).data('previous-value', $(this).val());
  })
});

$('#main_grid .coin, #main_grid #core_number, .echo.box .value').on("click", function () {
   $(this).select();
});

$('#main_grid .coin, #main_grid #core_number, .echo.box .value').on("keyup", function (e) {
  if((e.keyCode || e.which) === 9)  { 
    // Just landed here with a `tab`
    $(this).select();
    return;
  }

  var old_val = $(this).data('previous-value');
  var value = parseInt($(this).val()); 
  var max = $(this).attr('max') || 9;
  if(value >= 1 && value <= max) {
    $(this).val(value);
    $(this).change();
    $(this).data('previous-value', value);
    if($(this).is('.coin')) {
      var $elem = $("#main_grid :input:eq(" + ($(":input").index(this) + 1) + ")");
      $elem.focus();
      $elem.select();
      return;
    }
  }
  else
    $(this).val(old_val);

  if(!$(this).is('#multiplier_echo'))
    $(this).select();
});


$("#main-section input").on('change', function(){
  if(!INCREMENTING)
    find();
});

/* Tooltips */
$(function () {
  // Initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();
})

$("#main-section button").click(function() {
  // Bug with tooltip: Click on first button, then hover the second one.
  $(this).blur();
});

