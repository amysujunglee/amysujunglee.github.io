// Filterable portfolio - jQuery
$(document).ready(function () {
    $(".filter-button").click(function () {
        var value = $(this).attr("data-filter");
        if (value == "all") {
            $(".filter").show("1000");
        } else {
            $(".filter").not("." + value).hide("1000");
            $(".filter").filter("." + value).show("1000");
        }
    });
    //Add active class
    $("ul .filter-button").click(function () {
        $(this).addClass('filter-active').siblings().removeClass('filter-active');
    })
})