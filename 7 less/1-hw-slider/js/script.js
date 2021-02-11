window.addEventListener('load', function(){

	new Slider('.gallery-1');

});

class Slider{
	constructor(selector){
		this.root = document.querySelector(selector);
		this.btnPrev = this.root.querySelector('.buttons .prev');
		this.btnNext = this.root.querySelector('.buttons .next');
	
		this.images = this.root.querySelectorAll('.photos img');
		this.i = 0;
		this.duration = 500;
		this.animated = false;

		this.btnPrev.addEventListener('click', () => { this.prev() });
		this.btnNext.addEventListener('click', () => { this.next() });

		this.leftAnim = [
			// { transform: 'translateX(-100%)', opacity: 0 },
			// { transform: 'translateX(0)', opacity: 1 }
			// { transform: 'rotate3d(0, 1, 0.2, 180deg)', opacity: 0, width: "50%", height:"50%", margin: "0 auto" },
			// { transform: 'rotate3d(0, 1, 0.2, 0deg)', opacity: 1, width: "100%", height:"100%" }
			{ transform: 'rotate(45deg)', opacity: 0, width: "0%", height:"0%", margin: "50% 50%" },
			{ transform: 'rotate(0deg)', opacity: 1, width: "100%", height:"100%", margin: "0 0"  }
		];

		this.rightAnim = [
			// { transform: 'translateX(100%)', opacity: 0 },
			// { transform: 'translateX(0)', opacity: 1 }
			// { transform: 'rotate3d(0, 1, 0.2, -180deg)', opacity: 0, width: "50%", height:"50%", margin: "0 auto" },
			// { transform: 'rotate3d(0, 1, 0.2, 0deg)', opacity: 1, width: "100%", height:"100%" }
			{ transform: 'rotate(-45deg)', opacity: 0, width: "0%", height:"0%", margin: "50% 50%" },
			{ transform: 'rotate(0deg)', opacity: 1, width: "100%", height:"100%", margin: "0 0" }
		];
	}

	prev(){
		if(!this.animated){
			let imgHide = this.images[this.i];
			this.i = this.i > 0 ? this.i - 1 : this.images.length - 1;
			this.toogleSlides(imgHide, this.images[this.i], false);
		}
	}

	next(){
		if(!this.animated){
			let imgHide = this.images[this.i];
			this.i = this.i < this.images.length - 1 ? this.i + 1 : 0;
			this.toogleSlides(imgHide, this.images[this.i]);
		}
	}

	toogleSlides(imgHide, showImg, isNext = true){
		/*
			hp 0% 100% -> imgHide.animate([{ transform: 'translateX(0%)' }, { transform: 'translateX(100%)' }]
			sp -100% 0%
			hn 0% -100%
			sn 100% 0% 
		*/

		this.animated = true;


		// showAnimate.addEventListener('finish',()=>{
		//
		// });
		let hideAnimate = imgHide.animate(isNext ? this.leftAnim : this.rightAnim, {
			duration: this.duration,
			direction: 'reverse'
		});

		hideAnimate.addEventListener('finish', () => {
			showImg.classList.add('showed');
			let showAnimate = showImg.animate(isNext ? this.rightAnim : this.leftAnim, { duration: this.duration });
			imgHide.classList.remove('showed');
			showAnimate.addEventListener('finish', () => {
				this.animated = false;
			});
		});
	}
}