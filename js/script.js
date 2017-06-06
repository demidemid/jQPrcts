console.log($);

$(".open-me").click(function() {
  $(".popup").removeClass("hinge");
  $(".hide-layout, .popup").fadeIn(300);  // плавно показываем окно/фон
})
$(".close-me, .hide-layout").click(function() {
  $(".popup").addClass("hinge");
  $(".hide-layout").fadeOut(300); // плавно скрываем окно/фон
})
