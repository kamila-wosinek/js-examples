function example() {
	$('input[type="submit"]').click(function () {
    var val = $('#mail').val();
    if (val == "") {
      $('#mail').addClass("invalid");
      return false;
    }
	});
}

jQuery(document).ready(example);
