$(".open-me").click(function() {
  $(".popup").removeClass("hinge");
  $(".hide-layout, .popup").fadeIn(300);  // плавно показываем окно/фон
})
$(".close-me, .hide-layout").click(function() {
  $(".popup").addClass("hinge");
  $(".hide-layout").fadeOut(300); // плавно скрываем окно/фон
});


(function($){
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;

            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }

            showPage(0);

            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);

$(document).ready(function(){
    $(".tabs").lightTabs();
});
