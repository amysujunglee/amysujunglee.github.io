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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}