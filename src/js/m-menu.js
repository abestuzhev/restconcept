(function($){

	$.fn.dropdowns = function (options) {

		var defaults = {
			toggleWidth: 460
		}

		var options = $.extend(defaults, options);

		var ww = document.body.clientWidth;

		var addParents = function() {
			$(".menu-list li a").each(function() {
				if ($(this).next().length > 0) {
					$(this).addClass("parent");
				}
			});
		}

    $(".toggleMenu").click(function(e) {
      e.preventDefault();
      $(this).toggleClass("active-one");
      // $(".menu-list").toggle();
    });

		var adjustMenu = function() {
			if (ww < options.toggleWidth) {
        $(".toggleMenu").click(function(e) {
        	e.preventDefault();
        	$(".menu-list").toggle();
        });

				$(".toggleMenu").css("display", "inline-block");
				if (!$(".toggleMenu").hasClass("active-one")) {
					$(".menu-list").hide();
				} else {
					$(".menu-list").show();
				}
				$(".menu-list li").unbind('mouseenter mouseleave');
				$(".menu-list li a.parent").unbind('click').bind('click', function(e) {
					// must be attached to anchor element to prevent bubbling
					e.preventDefault();
					$(this).parent("li").toggleClass("hover");
				});
			}
			else if (ww >= options.toggleWidth) {
				$(".toggleMenu").css("display", "none");
				$(".menu-list").show();
				$(".menu-list li").removeClass("hover");
				$(".menu-list li a").unbind('click');
				$(".menu-list li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
					// must be attached to li so that mouseleave is not triggered when hover over submenu
					$(this).toggleClass('hover');
				});
			}
		}

		return this.each(function() {
			$(".toggleMenu").click(function(e) {
				e.preventDefault();
				$(this).toggleClass("active-one");
				$(this).next(".menu-list").toggle();
				adjustMenu();
			});
			adjustMenu();
			addParents();
			$(window).bind('resize orientationchange', function() {
				ww = document.body.clientWidth;
				adjustMenu();
			});
		});

	}

})(jQuery)
