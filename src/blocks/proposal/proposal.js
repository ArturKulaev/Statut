const 	sliderTrack = document.querySelector('._proposal__slider-track'),
		btnNext = document.querySelector('.proposal__button_right'),
		btnPrev = document.querySelector('.proposal__button_left'),
		dots = document.querySelectorAll('.proposal__dot');

let 	position = 0,
		itemWidth = document.querySelector('._proposal__slider-item').offsetWidth,
		sliderTrackWidth = document.querySelectorAll('._proposal__slider-item').length * itemWidth - itemWidth;
		dotIndex = 

btnNext.addEventListener('click', function () {
	position = position - itemWidth;
	if ( -position > sliderTrackWidth) {
		position = 0;
	};
	sliderTrack.style.left = position + "px";
});

btnPrev.addEventListener('click', function () {
	position = position + itemWidth;
	if (position > 0) {
		position = -sliderTrackWidth
	};
	sliderTrack.style.left = position + "px";
});



