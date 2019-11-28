/*
 * ******************************************************** *
 * Created Date: Wednesday, 27th November 2019 8:27:04 pm   *
 * Author: Marcello Alfaro                                  *
 * Email: marcello.alfaro1@gmail.com                        *
 *                --------------------------                *
 * Last Modified: Thursday, 28th November 2019 12:02:24 pm  * 
 * Modified By: Marcello Alfaro                             * 
 *                --------------------------                *
 * Copyright (c) 2019 - Marshall Inc.                       *
 * ******************************************************** *
 */

$('#showComment').click(function() {
  currentDisplay = $('#comments-section').css('display');
  if (currentDisplay == 'none') {
    $('#comments-section').slideDown(500, function() {
      $('#comments-section').css('display', 'block');
    });
  } else if (currentDisplay == 'block') {
    $('#comments-section').slideUp(500, function() {
      $('#comments-section').css('display', 'none');
    });
  }
});
var likes = 0;
$('#like').click(function() {
  $('span.likes').text(likes);
  likes++;
});
