function example() {
	$("#train").css("background", "yellow");
	$("a").css("display", "block");
	var color = $("a").css("color");
	alert(color);
}

jQuery(document).ready(example);
