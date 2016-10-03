$(document).ready(function() {
	$(".nav li").click(function() {
		var scrollID = $(this).attr("id");
		console.log(scrollID);

		if (scrollID === "link1") {
			$("html, body").animate({scrollTop: $("#apiemus").offset().top}, 500);
		}
		if (scrollID === "link2") {
			$("html, body").animate({scrollTop: $("#paslaugos").offset().top}, 500);
		}
		if (scrollID === "link3") {
			$("html, body").animate({scrollTop: $("#kontaktai").offset().top}, 500);
		}
	});

	$("span").click(function() {
		$(this).parent().next().toggle(500);

		var link = $(this).text();
		console.log(link);
		if (link === "skaityti plačiau") {
			$(this).text("uždaryti");
		}

		if (link === "uždaryti") {
			$(this).text("skaityti plačiau");
		}
	});
});