function example() {
	$("a").click(function () {
		$(this).css('border', 'solid black 1px');
	});
}

jQuery(document).ready(example);
