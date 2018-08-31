$(document).ready(function () {
	$('.slider').slick({
		autoplay: true,
		pauseOnHover: false,
		prevArrow: '<div class="arrow left"><img src="img/left.svg", alt=""></div>',
		nextArrow: '<div class="arrow right"><img src="img/right.svg", alt=""></div>',
		responsive: [{
			breakpoint: 992,
			settings: {
				arrows: false
			}
		}]
	});

	$(".jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				title: "Big Buck Bunny",
				m4a: "music/Two Kooms - Mersedes (DJ Sender Remix).mp3",

				volume: 100,
			});
		},
		swfPath: "/js",
		supplied: "m4a, ogv, mp3",
		cssSelectorAncestor: ".player_container_1",
		cssSelector: {
			title: ".title",
			play: ".fa-play",
			pause: ".fa-pause",
			stop: ".fa-stop",
			mute: "#mute",
			unmute: "#unmute",
			currentTime: ".currentTime",
			duration: ".duration"
		},
		size: {
			width: "0px",
			height: "0px"
		}
	});
	$(".jplayer_2").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				title: "Big Buck Bunny",
				m4a: "music/TwoKooms -Мерседес.mp3",

				volume: 100,
			});
		},
		swfPath: "/js",
		supplied: "m4a, ogv, mp3",
		cssSelectorAncestor: ".player_container_2",
		cssSelector: {
			title: ".title",
			play: ".fa-play",
			pause: ".fa-pause",
			stop: ".fa-stop",
			mute: "#mute",
			unmute: "#unmute",
			currentTime: ".currentTime",
			duration: ".duration"
		},
		size: {
			width: "0px",
			height: "0px"
		}
	});
	$(".jplayer_3").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				title: "Big Buck Bunny",
				m4a: "music/TwoKooms-Інтро.mp3",

				volume: 100,
			});
		},
		swfPath: "/js",
		supplied: "m4a, ogv, mp3",
		cssSelectorAncestor: ".player_container_3",
		cssSelector: {
			title: ".title",
			play: ".fa-play",
			pause: ".fa-pause",
			stop: ".fa-stop",
			mute: "#mute",
			unmute: "#unmute",
			currentTime: ".currentTime",
			duration: ".duration"
		},
		size: {
			width: "0px",
			height: "0px"
		}
	});
	//Запуск Youtube по клику в определенном месте
	$('.imgVideo').click(function () {

		$(this).css('opacity', '0');
		$(this).css('z-index', '-1');
		var videoSearch = $(this).next().find('iframe');
		var videoshow = $(this).next();
		videoshow.css('display', 'block');
		var srcSearch = videoSearch.attr('src');
		videoSearch.attr('src', srcSearch + '&autoplay=1');

	});

	//SamllMenu
	$('#mbutton').click(function () {
		$('.hamburger--slider').toggleClass('is-active', 0 ,62000);
		$(this).toggleClass('full');
		$('body').toggleClass('leftSlide');
	});
	//SCROLL
	$('a[data-target="menu"]').click(function () {
		var target = $(this).attr('href');
		$('a').removeClass('active');
		$(this).addClass('active');
		$('html, body').animate({ scrollTop: $(target).offset().top }, 700);
	});
	//Click Form
	$('#labelForm input').click(function () {
		$(this).next('label').addClass('labelClick');
	});

	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $("#labelForm"); // тут указываем ID элемента
		var test = $("label"); // тут указываем ID элемента
		var name = $("#labelForm input"); // тут указываем ID элемента

		if (!div.is(e.target) // если клик был не по нашему блоку
			// && div.has(e.target).length === 0 // и не по его дочерним элементам
			&& name.val() == '') //и если блок пустой
		{
			test.removeClass('labelClick') // скрываем его
		}
	});
});

//MAIL
$(document).ready(function () {
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Ваша заявка отправленна");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			location.reload();
		});
		return false;
	});

});


//Show OnTop Section
$(document).scroll(function () {
	var y = $(this).scrollTop();
	if (y > 300) {
		$('.onTop').show();
	} else {
		$('.onTop').hide();

	}

});


