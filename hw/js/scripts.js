window.addEventListener('load', function () {

    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let oper = document.querySelector('.oper');
    let btn = document.querySelector('.go');
    let res = document.querySelector('.res');
	let form = document.querySelector('.form-calc');
    btn.addEventListener('click', function () {
    	if(inp1.value != null && inp2.value != null && inp1.value != "" && inp2.value != ""){
    		if((inp1.value == "0" && oper.value == "/") || (inp2.value == "0" && oper.value == "/")){
				res.innerHTML = "Нельзя делить на ноль";
			}
    		else{
				btn.setAttribute("disabled", "true");
				let sum = eval(inp1.value + oper.value + inp2.value);
				res.innerHTML = sum;
			}
		}
    });
    form.addEventListener('input',()=>{
		btn.removeAttribute("disabled");
	});

	inp1.addEventListener('input',regularInput);
	inp2.addEventListener('input',regularInput);

    function regularInput() {
		this.value = this.value.match(/\d*/);
	}
});

