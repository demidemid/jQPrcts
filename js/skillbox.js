$(document).ready(function(){
  $(".spoiler-link").click(function(){

    $("div.spoiler-content").not($(this).parent().children("div.spoiler-content")).slideUp("normal");
    $(this).parent().children("div.spoiler-content").slideDown("normal");
    return false;

  });
});

 $(".tel").mask("+7 (999) 999-9999");
