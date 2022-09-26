$(document).ready(function() {
    $("#shop-button").on("mouseover", function() {
        $(this).attr("src", "./images/faded-shop-button.png");
    }).mouseleave(function() {
        $(this).attr("src", "./images/shop-button.png");
    });
})