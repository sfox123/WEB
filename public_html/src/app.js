

btnInt();

const cart_count = document.querySelector('.cart__count');
const cart = { count: 0, items: [] };
let total = 0;  

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
        else if (evt.path[1].getAttribute('id') == 'cart') {
            console.log(cart.count)
            cart.count == 0 ? evt.path[1].setAttribute('href', '#empty') : evt.path[1].setAttribute('href', '#popup')
        }
    });
}

function cartLogic() {
    
    const container = document.querySelector('#pop__container');
    const totalDOM = document.querySelector('.pop__total');

    for (let item of cart.items) {
        const box = document.createElement('div');
        box.classList.add('pop__items');
        
        const h1 = document.createElement('h1');
        h1.textContent = item.name;
        h1.classList.add('pop__item__name');

        const sum = document.createElement('p')
        sum.textContent = 'Quantity : ' + item.count +" ||  Price : "+ item.price;
        sum.classList.add('pop__item__quantity');
        total += item.count * item.price;

        container.appendChild(box);
        box.appendChild(h1);
        box.appendChild(sum);

    }
    totalDOM.innerHTML = 'Total : ' + total;
    cart.items = [];
}

FormSubmit();

function FormSubmit() {
    document.addEventListener('submit', (evt) => {
        let fields = [];
        evt.preventDefault();
        const UserName = evt.path[0].querySelectorAll('input')[0].value;
        const address = evt.path[0].querySelectorAll('input')[1].value;
        fields.push(UserName, address);

        for (el of fields) {
            el.length == 0 ? evt.path[0].querySelectorAll('input')[fields.indexOf(el)].placeholder = `Field ${fields.indexOf(el) == 0 ? ' User name ' : ' Address '} is Important` : null;
        }
        UserName.length && address.length != 0 ? reset() : null;
    });
}

function reset() {
    window.location.href = '/WEB/public_html/product.html#success'
    setTimeout(() => {
        window.location.href = '/WEB/public_html/product.html'
    }, 1000);
}