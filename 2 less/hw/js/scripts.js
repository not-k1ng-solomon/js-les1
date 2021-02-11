window.addEventListener('load', () => {
    let form = document.querySelector('.form');
    let input = form.querySelectorAll('.check');

    const patterns = {
        'email': /\S+@\S+\.\S+/,
        'phone': /[2-9]{1}\d{2}/,
        'name': /[a-zA-Z]+/
    };
    /*    const OPER = {
            'email': () => '\\S+@\\S+\\.\\S+',
            'phone': () => '[2-9]{1}\\d{2}',
            'name': () => '[a-zA-Z]+'
        };*/
    form.addEventListener('submit', (event) => {
        input.forEach(e => {
            if (e.value.length < 1 || !(patterns[e.dataset.valid].test(e.value))) {
            // if (e.value.length < 1 || !validate(mass[e.name], e.value)) {
                e.classList.add("err");
                event.preventDefault();
            }
        });
    });
    form.addEventListener('focusin', (e) => {
        if (e.target.classList.contains('check') && e.target.classList.contains('err')) {
            e.target.classList.remove('err');
        }
    });
/*
    function validate(re, val) {
        re = new RegExp(re);
        return re.test(val);
    }*/
});