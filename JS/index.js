var text = '';
var ind = 1;
;(function($, undefined) {
function addList (){
    text = $("input").val();
    $(".list-item").append("<li hidden >Задание #"+ ind + ": " + text + "</li>");
    ind++;
    $(".input").val('');
    $(".trueblock").fadeIn(200).delay(2000).fadeOut(200);
};
function showList (){
    $("li").show();
};
$(".add").on('click', addList);
$(".show").on('click', showList);
})(jQuery);