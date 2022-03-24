window.addEventListener('DOMContentLoaded', function () {

	/* AOS.init({
		useClassNames: true,
		initClassName: false,
		animatedClassName: 'animated',
	}); */

	//fullpage

	new fullpage('#fullpage', {
		licenseKey: '59DB8F6F-B819439E-9C9C8AD2-C475CC00',
		scrollOverflow: true,
		autoScrolling: true,
		fitToSection: true,
		anchors: [
			'firstPage',
			'secondPage',
			'thirdPage',
			'fourthPage',
			'fifthPage',
			'sixthPage',
			'seventhPage',
			'eighthPage',
			'ninthPage'
		],
		menu: '#menu',


		onLeave: function (origin, destination, direction) {
			const loadedSection = this,
				header = document.querySelector(".header"),
				menu = document.querySelector("#menu");

			const isAnimatedDotOne = document.querySelectorAll('.dot_one .is-animated');
			const isAnimatedDotTwo = document.querySelectorAll('.dot_two .is-animated');
			const isAnimatedDotThree = document.querySelectorAll('.dot_three .is-animated');
			const isAnimatedDotFour = document.querySelectorAll('.dot_four .is-animated');
			const isAnimatedDotFive = document.querySelectorAll('.dot_five .is-animated');
			const isAnimatedDotSix = document.querySelectorAll('.dot_six .is-animated');
			const isAnimatedDotSeven = document.querySelectorAll('.dot_seven .is-animated');
			const isAnimatedDotEight = document.querySelectorAll('.dot_eight .is-animated');
			const isAnimatedDotNine = document.querySelectorAll('.dot_nine .is-animated');

			let animationSpeed = 0.3;


			//Меняем цветовую схему шапки

			/* menu.style.display = (destination.index == 0) ? 'none' : ''; */

			if (destination.index == 1 || destination.index == 6) {
				header.classList.remove('grey_theme');
				header.classList.add('blue_theme');
			} else {
				header.classList.remove('blue_theme');
				header.classList.add('grey_theme');
			}


			//Добавляем активный класс для точек-переключателей
			const dot = document.querySelectorAll('.dot');

			function removeClass() {
				dot.forEach(item => {
					item.classList.remove('dot-active');
				});
			}

			dot.forEach(item => {
				item.addEventListener('click', (evt) => {
					removeClass();
					item.classList.add('dot-active');
				});
			});

			const firstPage = document.querySelector('.sec_one');
			firstPageDelay = firstPage.querySelectorAll('.animate__fadeInUp');

			// Добавляем класс для анимации
			/* function addAnimation(selector, animation) {
				selector.forEach(item => {
					item.classList.add('animated', animation);
				});
			} */


			// Добавляем задержку
			/* function addDelay(selector) {
				for (let i = 0; i < selector.length; i++) {
					animationSpeed += 0.2;
					selector[i].style.animationDelay = animationSpeed + 's';
				}
			} */

			// Анимация
			switch (origin.index) {

				case 0:
					addAnimation(isAnimatedDotOne, 'animate__fadeInUp');
					addDelay(isAnimatedDotOne);

					break;
				case 1:
					addAnimation(isAnimatedDotTwo, 'animate__fadeInUp');
					addDelay(isAnimatedDotTwo);
					break;
				case 2:
					addAnimation(isAnimatedDotThree, 'animate__fadeInUp');
					addDelay(isAnimatedDotThree);
					break;
				case 3:
					addAnimation(isAnimatedDotFour, 'animate__fadeInUp');
					addDelay(isAnimatedDotFour);
					break;
				case 4:
					addAnimation(isAnimatedDotFive, 'animate__fadeInUp');
					addDelay(isAnimatedDotFive);
					/* navLeftMenuSlider.slideNext() */
					break;
				case 5:
					addAnimation(isAnimatedDotSix, 'animate__fadeInUp');
					addDelay(isAnimatedDotSix);
					break;
				case 6:
					addAnimation(isAnimatedDotSeven, 'animate__fadeInUp');
					addDelay(isAnimatedDotSeven);
					break;
				case 7:
					addAnimation(isAnimatedDotEight, 'animate__fadeInUp');
					addDelay(isAnimatedDotEight);
					/* navLeftMenuSlider.slideNext() */
					break;
				case 8:
					addAnimation(isAnimatedDotNine, 'fanimate__fadeInUp');
					addDelay(isAnimatedDotNine);
					/* navLeftMenuSlider.slideNext() */
					break;
			}
		},

	});


	// Добавляем активный класс точкам
	const dot = document.querySelectorAll('.dot');

	function removeClass() {
		dot.forEach(item => {
			item.classList.remove('dot-active');
		});
	}

	dot.forEach(item => {
		item.addEventListener('click', (evt) => {
			removeClass();
			item.classList.add('dot-active');
		});
	});



	//slider(presentation)

	let slideIndex = 1,
		slides = document.querySelectorAll('.presentation_slider_item'),
		prev = document.querySelector('.presentation_prev'),
		next = document.querySelector('.presentation_next'),
		dotsWrap = document.querySelector('.presentation_slider_dots'),
		dots = document.querySelectorAll('.presentation_dot'),
		slideName = document.querySelectorAll('.presentation_slider_text');

	showSlides(slideIndex);


	//клик по стрелкам

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = 'none');
		slideName.forEach((item) => item.style.display = 'none');

		dots.forEach((item) => item.classList.remove('presentation_dot-active'));
		slides[slideIndex - 1].style.display = '';
		slideName[slideIndex - 1].style.display = '';
		dots[slideIndex - 1].classList.add('presentation_dot-active');

	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function () {
		plusSlides(-1);
	});

	next.addEventListener('click', function () {
		plusSlides(1);
	});


	//клик по точкам

	dotsWrap.addEventListener('click', function (event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('presentation_dot') && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});



	//slider(feedback)

	let fbSlideIndex = 1,
		fbImg = document.querySelectorAll('.presentation_feedback_img'),
		fbText = document.querySelectorAll('.presentation_feedback_text'),
		fbPrev = document.querySelector('.feedback_prev'),
		fbNext = document.querySelector('.feedback_next');


	showFbSlides(fbSlideIndex);


	//клик по стрелкам

	function showFbSlides(n) {

		if (n > fbImg.length) {
			fbSlideIndex = 1;
		}
		if (n < 1) {
			fbSlideIndex = fbImg.length;
		}

		fbImg.forEach((item) => item.style.display = 'none');
		fbImg[fbSlideIndex - 1].style.display = '';
		fbText.forEach((item) => item.style.display = 'none');
		fbText[fbSlideIndex - 1].style.display = '';

	}

	function plusFbSlides(n) {
		showFbSlides(fbSlideIndex += n);
	}

	function currentFbSlide(n) {
		showFbSlides(fbSlideIndex = n);
	}

	fbPrev.addEventListener('click', function () {
		plusFbSlides(-1);
	});

	fbNext.addEventListener('click', function () {
		plusFbSlides(1);
	});



	//slider(dwg)

	let dwgSlideIndex = 1,
		dwgSlides = document.querySelectorAll('.drawing_slider_item'),
		dwgPrev = document.querySelector('.dwg_prev'),
		dwgNext = document.querySelector('.dwg_next');


	showDwgSlides(dwgSlideIndex);


	//клик по стрелкам

	function showDwgSlides(n) {

		if (n > dwgSlides.length) {
			dwgSlideIndex = 1;
		}
		if (n < 1) {
			dwgSlideIndex = dwgSlides.length;
		}

		dwgSlides.forEach((item) => item.style.display = 'none');
		dwgSlides[dwgSlideIndex - 1].style.display = '';

	}

	function plusDwgSlides(n) {
		showDwgSlides(dwgSlideIndex += n);
	}

	function currentDwgSlide(n) {
		showDwgSlides(dwgSlideIndex = n);
	}

	dwgPrev.addEventListener('click', function () {
		plusDwgSlides(-1);
	});

	dwgNext.addEventListener('click', function () {
		plusDwgSlides(1);
	});



	//форма отправки

	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
		//сообщения о состоянии
	};

	let form = document.querySelector('.sec_nine_form'),
		input = form.getElementsByTagName('input'),
		text = form.getElementsByTagName('textarea'),
		statusMessage = document.querySelector('.sec_nine_form_win_text');


	form.addEventListener('submit', function (event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		let formData = new FormData(form);

		let obj = {};
		formData.forEach(function (value, key) {
			obj[key] = value;
		});
		let json = JSON.stringify(obj);

		request.send(json);

		request.addEventListener('readystatechange', function () {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		});

		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});


	// Валидация инпута Имени

	/* const contactInputName = document.querySelectorAll('.contact-name')
	contactInputName.forEach(input => {
		input.addEventListener('input', function () {
			this.value = this.value.replace(/[^а-я/a-z\s]+/ig, "");
		})
	})
	 */


});