var linksNavBar = $("ul.navbar-nav > li > a");

linksNavBar.click(function(event){
	var position = $(this.hash).offset() ? $(this.hash).offset() : '' ;
	var heightMenu = ($(window).scrollTop() < 200) ? 100 : 50;
	event.preventDefault();

	if(!$(this.hash).offset()){
	   $('ul.navbar-nav > li').removeClass('active');
	   $(this).parent().addClass('active');
	} else {
		var linkHref = $(this).attr('href');
		$("html, body").animate({scrollTop:position.top-heightMenu}, 1200, function(){
			document.location.hash = linkHref;
		});
	}
});

$('#modalContato').on('hidden.bs.modal', function (e) {
   $('ul.navbar-nav > li').removeClass('active');
   CheckActive();
});

$(window).scroll(function(){
	var scrollTopAtual = $(this).scrollTop();
	var navegacao = $('#navegacao');

	CheckActive();

	if (scrollTopAtual >= 200) {
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

function CheckActive()
{
	linksNavBar.each(function(){
		var positionTop = $(this.hash).offset() ? $(this.hash).offset().top : 999999;

		if(positionTop-250 <= $(window).scrollTop()){
			$('ul.navbar-nav > li').removeClass('active');
			$(this).parent().addClass('active');
		}
	});
}
