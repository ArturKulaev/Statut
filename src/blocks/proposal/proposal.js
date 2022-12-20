o2.slider =
{
	sliderTrack: document.querySelector('._proposal__slider-track'),
	btnNext: document.querySelector('.proposal__button_right'),
	btnPrev: document.querySelector('.proposal__button_left'),
	dots: document.querySelectorAll('._proposal__dot'),

	position: 0,
	dotIndex: 0,
	itemWidth: null,

	init()
	{
		setTimeout(() => {
			this.itemWidth = document.querySelector('._proposal__slider-item').offsetWidth;
			console.log(this.itemWidth)
		}, 300)
	},
	dotsInit: _this => o2.slider.dots.forEach( (dot, index) =>
	{
		if(_this === dot)
		{
			console.log(index)
			o2.slider.position = o2.slider.itemWidth * index;
			o2.slider.sliderTrack.style.left = -o2.slider.position + 'px';
			o2.slider.dotIndex = index;
			o2.slider.currentSlide(o2.slider.dotIndex)
			return;
		}
	}),
	nextSlide()
	{
		if ( this.position < (this.dots.length - 1) * this.itemWidth)
		{
			this.position += this.itemWidth
			this.dotIndex++
		}
		else
		{
			this.dotIndex = 0
			this.position = 0
		}

		this.sliderTrack.style.left = -this.position + 'px';
		this.currentSlide(this.dotIndex)
	},
	prevSlide()
	{
		if ( this.position > 0 )
		{
			this.position -= this.itemWidth
			this.dotIndex--
		}
		else
		{
			this.dotIndex = this.dots.length - 1
			this.position = (this.dots.length - 1) * this.itemWidth
		}
		this.sliderTrack.style.left = -this.position + 'px'
		this.currentSlide(this.dotIndex)
	},
	currentSlide(index)
	{
		for (let dot of this.dots)
		{
			dot.classList.remove('proposal__dot_active')
		}
		this.dots[index].classList.add('proposal__dot_active')
	}
}