console.log($);

$('.open-me').click(function() {
  $('.hide-layout, .popup').fadeIn(300);  // плавно показываем окно/фон
})
$('.close-me, .hide-layout').click(function() {
  $('.hide-layout, .popup').fadeOut(300); // плавно скрываем окно/фон
})
