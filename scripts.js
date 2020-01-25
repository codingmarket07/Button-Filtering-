$(document).ready(function(){
	$(".btn").click(function(){
		var attr = $(this).attr("data-li");

		$(".btn").removeClass("active");
		$(this).addClass("active");

		$(".item").hide();

		if(attr == "folders"){
			$("." + attr).show();
		}
		else if(attr == "files"){
			$("." + attr).show();
		}
		else if(attr == "images"){
			$("." + attr).show();
		}
		else if(attr == "sheets"){
			$("." + attr).show();
		}
		else if(attr == "pdfs"){
			$("." + attr).show();
		}
		else if(attr == "documents"){
			$("." + attr).show();
		}
		else{
			$(".item").show();
		}
	});
});