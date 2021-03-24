console.log("Connected");

const btn = document.getElementsByClassName('.item__link');

document.addEventListener('click', (evt) => {
    const el = evt.path[0].innerHTML;
    let quantity = 0;
    el == '+' ? quantity = evt.path[0].nextElementSibling.innerHTML : el == '-'
        ? quantity = evt.path[0].previousElementSibling.innerHTML : null
    if (el == '+') {
        let count = parseInt(quantity);
        count += 1;
        evt.path[0].nextElementSibling.innerHTML = count;   
    } else if(el == '-' && quantity > 1){
        let count = parseInt(quantity);
        count -= 1;
        evt.path[0].previousElementSibling.innerHTML = count;   
    }
})


