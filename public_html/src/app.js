console.log("Connected");

const btn = document.querySelector('.item__link');

btn.addEventListener('click', () => {
    console.log(this);
})