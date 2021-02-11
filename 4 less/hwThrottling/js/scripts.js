window.addEventListener('load', function(){
	
	let menu = document.querySelector('.menu');
	let links = menu.querySelectorAll('a');
	let btnUp = document.querySelector('.btnUp');
	let scrollTimeout;
	let momentTime = new Date().getTime();
	console.log(momentTime);
	window.addEventListener('scroll', function(){
		if(momentTime+200 <= new Date().getTime()){
			momentTime = new Date().getTime();
			onScroll();
		}
/*		clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(onScroll, 200);*/
	});

	btnUp.addEventListener('click', function(){
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	menu.addEventListener('click', function(e){
		let link = e.target;

		if(link.classList.contains('menu__link')){
			e.preventDefault();
			scrollToTarget(link.hash);
		}
	});

	if(location.hash !== ''){
		scrollToTarget(location.hash);
	}

	function scrollToTarget(id){
		let target = document.querySelector(id);

		if(target !== null){
			let pos = target.offsetTop - 70;

			window.scrollTo({
				top: pos,
				behavior: 'smooth'
			});
		}
	}

	function onScroll(){
		let pos = window.pageYOffset;
		
		if(pos > window.innerHeight){
			btnUp.classList.add('btnUp-visible');
		}
		else{
			btnUp.classList.remove('btnUp-visible');
		}
		
		for(let i = links.length - 1; i >= 0; i--){
			let link = links[i];
			let target = document.querySelector(link.hash);
			
			if((pos + window.innerHeight / 2) > target.offsetTop){
				menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
				link.classList.add('menu__link-active');
				break;
			}
		}
	}

});