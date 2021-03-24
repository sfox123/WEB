

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
                name: evt.path[2].getElementsByClassName('item__heading')[0].innerHTML,
                count: evt.path[2].children[3].getElementsByClassName('item__count')[0].innerHTML,
                price : evt.path[2].children[2].innerHTML.substring(3)
            }
            cart.items.push(tmp);
            cart.count += 1;
            cart_count.innerHTML = cart.count;
            evt.path[2].children[3].getElementsByClassName('item__count')[0].innerHTML = 1;
            cartLogic();
        }
    });
}

function cartLogic() {
    
    const container = document.querySelector('#pop__container');
    for (let item of cart.items) {
        const box = document.createElement('div');
        box.classList.add('pop__items');
        
        const h1 = document.createElement('h1');
        h1.textContent = item.name;
        h1.classList.add('pop__item__name');

        const sum = document.createElement('p')
        sum.textContent = 'Quantity : ' + item.count +" ||  Price : "+ item.price;
        sum.classList.add('pop__item__quantity');
        
        const btn = document.createElement('button')
        btn.textContent = 'Remove'
        btn.classList.add('pop__item__remove');

        container.appendChild(box);
        box.appendChild(h1);
        box.appendChild(sum);
        box.appendChild(btn);
    }
    cart.items = [];
}
