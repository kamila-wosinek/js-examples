$(document).ready(function () {

  var $button = $('button');

  $('button').each(function () {
    var text = $(this).html();;

    $(this).click(function() {
      console.log(text);
    });
  });
});
