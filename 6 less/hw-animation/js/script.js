window.addEventListener('load', function(){

	new Slider('.gallery-1');
	let slider2 = new Slider('.gallery-2');

	setInterval(function(){
		slider2.next();
	}, 3000);
});

class Slider{
	constructor(selector){
		this.root = document.querySelector(selector);
		this.btnPrev = this.root.querySelector('.buttons .prev');
		this.btnNext = this.root.querySelector('.buttons .next');

		this.images = this.root.querySelectorAll('.photos img');
		this.i = 0;
		this.animated = false;
		this.duration = 500;
		this.btnPrev.addEventListener('click', () => { this.prev() });
		this.btnNext.addEventListener('click', () => { this.next() });
	}

	prev(){
		if(!this.animated){
			let imgHide = this.images[this.i];
			this.i = this.i > 0 ? this.i - 1 : this.images.length - 1;
			this.toogleSlides(imgHide, this.images[this.i],true);
		}
	}

	next(){
		if(!this.animated){
			let imgHide = this.images[this.i];
			this.i = this.i < this.images.length - 1 ? this.i + 1 : 0;
			this.toogleSlides(imgHide, this.images[this.i],false);
		}
	}

	toogleSlides(imgHide, showImg, course = true){
		let courseValue = course ? -100 : 100;
		// console.log(courseValue);
		this.animated = true;
		let animateHide = imgHide.animate([{ transform: 'translateX('+courseValue*-1+'%)' }], this.duration);
		showImg.classList.add('showed');
		let animateShow = showImg.animate([
			{ transform: 'translateX('+courseValue+'%)' },
			{ transform: 'translateX(0)' }
		], this.duration);

		animateHide.addEventListener('finish', () => {
			imgHide.classList.remove('showed');
			this.animated = false;
		});
	}
}