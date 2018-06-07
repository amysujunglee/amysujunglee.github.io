$(document).ready(function(){
	$(".btn-works").click(function(){
		var value = $(this).attr("data-filter");
		if (value == "all")
		{
			$(".filter").show("1000");
		}
		else
		{
			$(".filter").not("."+value).hide("1000");
			$(".filter").filter("."+value).show("1000");
		}
	});
		//Add active class
		$("ul .btn-works").click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})
	})