//Check off specific todos by clicking
//.css("color") returns and uses rgb format
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
  /*   if ($(this).css('color') === 'rgb(128, 128, 128)') {
    //turn it black
    $(this).css({
      color: 'black',
      textDecoration: 'none'
    });
  } else {
    //turn it grey
    $(this).css({
      color: 'grey',
      textDecoration: 'line-through'
    });
  } */
});

//Click on X to delete Todo
$('ul').on('click', 'span', function(evt) {
  //stop the event from boubling up or from triggering
  //in parent elements
  evt.stopPropagation();
  //this is span - parent give us the li
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
});

$('input[type="text"').keypress(function(evt) {
  if (evt.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $('ul').append(
      '<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>'
    );
    $(this).val('');
  }
});

$('.fa-plus').click(function() {
  $('input[type="text"').fadeToggle(1000);
});
