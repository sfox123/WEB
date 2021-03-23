function Enlargeimage(img,name,num) {
  var ele = document.getElementsByClassName(name);
  ele.classList.toggle('hidden');
  var src = img.getAttribute('src');

  console.log(src)
  document.getElementById("imgbox").setAttribute('src', src).style.backgroundColor;
  
}

