const 	sliderTrack = document.querySelector('._proposal__slider-track'),
		btnNext = document.querySelector('.proposal__button_right'),
		btnPrev = document.querySelector('.proposal__button_left'),
		dots = document.querySelectorAll('._proposal__dot');
		images = document.querySelectorAll('._proposal__slider-track img')

let 	position = 0,
		dotIndex = 0,
		itemWidth = document.querySelector('._proposal__slider-item').offsetWidth,
		sliderTrackWidth = document.querySelector('._proposal__slider-track').offsetWidth;

// FUNCTIONS

function init()
{
	console.log('resize');
	console.log(sliderTrackWidth);
}

const nextSlide = () =>
{
	if ( position < (dots.length - 1) * itemWidth)
	{
		position += itemWidth
		dotIndex++
	}
	else
	{
		dotIndex = 0
		position = 0
	}
	sliderTrack.style.left = -position + 'px'
	thisSlide(dotIndex)
};

const prevSlide = () =>
{
	if ( position > 0 )
	{
		position -= itemWidth
		dotIndex--
	}
	else
	{
		dotIndex = dots.length
		position = (dots.length - 1) * itemWidth
	}
	sliderTrack.style.left = -position + 'px'
	thisSlide(dotIndex)
};

const thisSlide = (index) =>
{
	for (let dot of dots)
	{
		dot.classList.remove('proposal__dot_active')
	}
	dots[index].classList.add('proposal__dot_active')
}

// EVENTLISTENERS

btnNext.addEventListener( 'click', nextSlide );
btnPrev.addEventListener( 'click', prevSlide );
init();

dots.forEach( ( dot, index) =>
	{
	dot.addEventListener('click', () =>
	{
		position = itemWidth * index
		sliderTrack.style.left = -position + 'px';
		dotIndex = index
		thisSlide(dotIndex)
	})
})