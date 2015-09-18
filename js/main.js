$("#slider").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
});
$("ul.navbar-nav > li > a").on('click', function(event){
	event.preventDefault();

	$('ul.navbar-nav li').removeClass('active');
	$(this).parent().addClass('active');
	
	$("html, body").animate({scrollTop:$(this.hash).offset().top-50}, 1200);
});


$(window).scroll(function(){
	var scrollTopAtual = $(this).scrollTop();

	if (scrollTopAtual > 200) {
		$('#navegacao').addClass('fixed');
	}
	else {
		$('#navegacao').removeClass('fixed');
	}
})