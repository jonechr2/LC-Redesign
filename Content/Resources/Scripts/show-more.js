		$(document).ready(function(){
		$(".menu:last").on("loaded", function(){
				$('ul.nocontent.menu.mc-component').append('<div class="show more">More</div><div class="show less">Less</div>');
				
				var threshold = 5;
			 $('ul.nocontent.menu.mc-component').each(function(){
						var $this = $(this);
							if ($this.children().not('.show').length > threshold) {
						
							$this.children('.show.more').css('display', 'block');
					}
					});
					


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