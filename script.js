// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var slideIndex = 1;
function plusDivs(n) {
    showDivs(slideIndex += n);
  }

function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }

  function cart() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
  }
  let obj =[];
  let cart_itmes = []
  function cart_items(){
   let itmes_name = document.getElementById("item_name").innerHTML;
   let items_price = document.getElementById("item_price").innerHTML;
   let items_per = document.getElementById("item_per").value;
   let itmes_image = document.getElementById("item_image").src;
    if (items_per != 0 ) {
      cart_itmes.push(itmes_name, items_price, items_per, itmes_image);
      obj.push({cart_itmes})
      var div = document.createElement('popup_conteneer');
      div.innerHTML = `
          <div class="cart_popup_items">
          <img class="cart_popup_image" src="${cart_itmes[3]}" />
          <a>${cart_itmes[0]}</a>
          <a class="price_popup_contener">${cart_itmes[1]}x${cart_itmes[2]}</a>
          <a class="trash_icon"><i class="fa fa-trash-o"></i></a>
        </div>
      `;
      document.getElementById('popup_contener').appendChild(div);
      document.getElementById("cart_items_num").innerHTML = " ";
      let cartIcon = document.getElementById("cart_items_num");
      var text = document.createTextNode(obj.length);
      cartIcon.appendChild(text);
      cartIcon.style.display = "block";
    } else {
      alert('How Many Pieces?')
    }
  }
