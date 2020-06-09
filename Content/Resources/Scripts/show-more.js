		$(document).ready(function(){
			$(".menu:last").on("loaded", function(){
				$('ul.nocontent.menu.mc-component').append('<div class="show more">More</div><div class="show less">Less</div>');
				
			var threshold = 4;
			if ($('ul.nocontent.menu.mc-component').children().not('.show').length > threshold) {
			$('.show.more').css('display', 'block');
			}


			$('.show.more').on('click', function() {
			$(this).parent().children('li').not('.show').css('display', 'block');
			$(this).parent().find('.show.less').css('display', 'block');
			$(this).hide();
			});

			$('.show.less').on('click', function() {
			$(this).parent().children(':nth-child(n+' + (threshold + 1) + ')').not('.show').hide();
			$(this).parent().find('.show.more').css('display', 'block');
			$(this).hide();
			});
			});
			});