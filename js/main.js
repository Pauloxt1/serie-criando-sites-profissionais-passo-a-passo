var linksNavBar = $("ul.navbar-nav > li > a");


linksNavBar.click(function(event){
	var position = $(this.hash).offset();
	var heightMenu = ($(window).scrollTop() < 200) ? 100 : 50;
	event.preventDefault();

	$("html, body").animate({scrollTop:position.top-heightMenu}, 1200);
});

$(window).scroll(function(){
	var scrollTopAtual = $(this).scrollTop();
	var navegacao = $('#navegacao');

	linksNavBar.each(function(){
		if($(this.hash).offset().top-250 <= $(window).scrollTop()){
			$('ul.navbar-nav > li').removeClass('active');
			$(this).parent().addClass('active');
		}
	});

	if (scrollTopAtual > 200) {
		navegacao.addClass('navegacao-fixa');
	}
	else {
		navegacao.removeClass('navegacao-fixa');
	}
});

$("#slider").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
});
