// mo_header
$('.menu_btn').click(function () {
	$(this).toggleClass('active');
	$('html,body').toggleClass('ov_hidden');
	$('.mo_header').toggleClass('active');
});

// 아코디언메뉴
$('.mo_header .nav > li > a').on('click', function () {
	var element = $(this).parent('li');
	if (element.hasClass('active')) {
		element.removeClass('active');
		element.find('li').removeClass('active');
		element.find('ul').slideUp(300);
	} else {
		element.addClass('active');
		element.children('ul').slideDown(300);
		element.siblings('li').removeClass('active');
		element.siblings('li').find('li').removeClass('active');
		element.siblings('li').find('ul').slideUp(300);
	}
});

js 어떻게 연결하지요..?>
