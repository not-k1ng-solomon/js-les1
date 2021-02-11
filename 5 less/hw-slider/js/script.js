window.addEventListener('load', function(){

	let carousel1 = new Carousel('.gallery-1');
	let carousel2 = new Carousel('.gallery-2');

	carousel1.start();
	carousel2.start();
	setInterval(function(){
		carousel2.next();
	}, 3000);

});

class Carousel {
	constructor(selector) {
		this.box = document.querySelector(selector);
		this.btnprev = this.box.querySelector('.buttons .prev');
		this.btnnext  = this.box.querySelector('.buttons .next');
		this.images = this.box.querySelectorAll('.photos img');
		this.i = 0;
	}
	start(){
		this.btnnext.addEventListener('click', () => {
			this.next()
		});
		this.btnprev.addEventListener('click', () => {
			this.prev()
		});
	}

	next(){
		this.images[this.i].classList.remove('showed');
		this.i++;

		if(this.i >= this.images.length){
			this.i = 0;
		}

		this.images[this.i].classList.add('showed');
	}

	prev(){
		this.images[this.i].classList.remove('showed');
		this.i--;
		if(this.i < 0){
			this.i = this.images.length - 1;
		}

		this.images[this.i].classList.add('showed');
	}
}