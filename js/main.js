$("#slider").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
});
$("ul.navbar-nav > li > a").on('click', function(event){
	var position = $(this.hash).offset();
	var heightMenu = ($(window).scrollTop() < 200) ? 100 : 50;
	event.preventDefault();

	$('ul.navbar-nav > li').removeClass('active');
	$(this).parent().addClass('active');
	
	$("html, body").animate({scrollTop:position.top-heightMenu}, 1200);
});


$(window).scroll(function(){
	var scrollTopAtual = $(this).scrollTop();

	if (scrollTopAtual > 200) {
		$('#navegacao').addClass('navegacao-fixa');
	}
	else {
		$('#navegacao').removeClass('navegacao-fixa');
	}
})