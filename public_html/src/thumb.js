function Enlargeimage(img,x) {
  var el = document.getElementsByClassName('img');
  for (let i = 0; i < el.length; i++) {
    el[i].classList.add('hidden')
  }
  document.getElementById('img_' + x).classList.remove('hidden');
  var src = img.getAttribute('src');
  document.getElementById("imgbox").setAttribute('src', src).style.backgroundColor;
  
}

