$(document).ready(function () {

  $('button').each(function () {
    var text = $(this).html();;

    $(this).click(function () {
      console.log(text);
    });
  });
});
