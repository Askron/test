$(document).ready(() => {
	$(window).on('resize', () => {
		if (window.innerWidth >= 1200) {
			$('.popup-menu-wrap').css('display', 'none');
		}
	});

	$('body').on('click', function () {
		if ($('.menu__btn-first').attr('data-open') == 'true') {
			$('.menu__btn-first').attr('data-open', 'false');
			$('.menu-popup').css('display', 'none');
		}
	});

	$('.navbar-toggler').on('click', () => {
		$('.popup-menu-wrap').css({
			display: 'flex',
		});
		$('.popup-menu').css({
			left: '-' + $('.popup-menu-wrap').css('width')
		});
		$('.popup-menu').animate({
			left: '0px',
		}, 100);
	});

	$('.popup-menu__btn-close, .popup-menu-wrap').on('click', () => {
		$('.popup-menu').animate({
			left: '-' + $('.popup-menu-wrap').css('width'),
		}, 100, function () {
			$('.popup-menu-wrap').css('display', 'none');
		});
	});

	$('.popup-menu').on('click', (e) => {
		e.stopPropagation();
	});

	$('.menu-popup').on('click', (e) => {
		e.stopPropagation();
	});

	$('.menu__btn-first').on('click', function (e) {
		e.stopPropagation();
		if ($(this).attr('data-open') == 'false') {
			$(this).attr('data-open', 'true');
			$('.menu-popup').css('display', 'block');
			if (window.innerWidth >= 992 && !$('.menu-popup>.menu-popup__cat').is('.menu-popup__cat[data-open=true]')) {
				$('.menu-popup>.menu-popup__cat:first').trigger('click');
			}
		} else {
			$(this).attr('data-open', 'false');
			$('.menu-popup').css('display', 'none');
		}
	});

	$('.menu-popup__cat').on('click', function () {
		if ($(this).attr('data-open') == 'false') {
			$($(this).closest('.menu-popup')).children('.menu-popup__cat').attr('data-open', 'false');
			$($(this).closest('.menu-popup')).children('.menu-popup__cat-list').css('display', 'none');
			$(this).attr('data-open', 'true');
			$(this).next('.menu-popup__cat-list').css('display', 'flex');
		} else {
			$(this).attr('data-open', 'false');
			$(this).next('.menu-popup__cat-list').css('display', 'none');
		}
	});
});