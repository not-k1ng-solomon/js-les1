window.addEventListener('load', function () {
    let inp1 = document.querySelector('.inp1');
    let inp2 = document.querySelector('.inp2');
    let oper = document.querySelector('.oper');
    let btn = document.querySelector('.go');
    let res = document.querySelector('.res');
    let form = document.querySelector('.form-calc');
    const OPERATTION = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };
    btn.addEventListener('click', function () {
        if (inp1.value != null && inp2.value != null && inp1.value != "" && inp2.value != "") {
            if ((inp1.value == "0" || inp2.value == "0") && oper.value == "/") {
                res.innerHTML = "Нельзя делить на ноль";
            } else {
                let a = parseInt(inp1.value);
                let b = parseInt(inp2.value);
                let sum = OPERATTION[oper.value](a, b);
                res.innerHTML = sum;
            }
			btn.setAttribute("disabled", "true");
		}
    });
    form.addEventListener('input', () => {
        btn.removeAttribute("disabled");
    });

    // inp1.addEventListener('input', regularInput);
    // inp2.addEventListener('input', regularInput);
    [inp1,inp2].forEach(el => el.addEventListener('input', regularInput));

    function regularInput() {
        this.value = this.value.replace(/[^0-9]/g,'');
    }
});

