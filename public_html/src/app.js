

btnInt();

const cart_count = document.querySelector('.cart__count');
const cart = {count: 0 ,items: []};  

function btnInt() {
    
    document.addEventListener('click', (evt) => {
        
        const el = evt.path[0].innerHTML;
        let quantity = 0;

        el == '+' ? quantity = evt.path[0].nextElementSibling.innerHTML : el == '-'
            ? quantity = evt.path[0].previousElementSibling.innerHTML : null;
        if (el == '+') {
            let count = parseInt(quantity);
            count += 1;
            evt.path[0].nextElementSibling.innerHTML = count;
        } else if (el == '-' && quantity > 1) {
            let count = parseInt(quantity);
            count -= 1;
            evt.path[0].previousElementSibling.innerHTML = count;
        }
        else if (evt.path[0].classList[1] == 'item__btn') {
            let tmp = {
                name: 'Hey',
                count: evt.path[2].children[2].getElementsByClassName('item__count')[0].innerHTML
            }
            cart.items.push(tmp);
            cart.count += 1;
            cart_count.innerHTML = cart.count;
            evt.path[2].children[2].getElementsByClassName('item__count')[0].innerHTML = 1;
            console.log(cart)
        }
    });
}

