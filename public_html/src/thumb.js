function Enlargeimage(img) {
  var src = img.getAttribute('src');
  console.log(src)
  document.getElementById("imgbox").setAttribute('src', src).style.backgroundColor;
}

