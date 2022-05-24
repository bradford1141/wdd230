let add1 = parseInt(document.querySelector('#add1'));
let add2 = parseInt(document.querySelector('#add2'));

const button = document.querySelector('#add');
button.addEventListener('click', () => {
    const add1 = parseInt(document.querySelector('#add1').value);
    const add2 = parseInt(document.querySelector('#add2').value);
    console.logadd1 + add2;
    console.log(result);

    document.querySelector('#result').textContent = add1 + add2;
});