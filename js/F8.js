//Hiện tài khoản
var account = document.getElementById("account");
var user = document.getElementById("user");
var close1 = document.getElementById("close1");
user.addEventListener("click",function () {
  account.style.display = "block";
})
window.onclick = function (event) {
  if (event.target == account) {
    account.style.display ="none";
  }
}
close1.onclick = function () {
  account.style.display = "none";
}

//scroll down menu top
window.onscroll = function() {myFunction()};

var header = document.getElementById("menu-top");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.remove("grid");
  } else {
    header.classList.remove("sticky");
  }
}


var openw = document.getElementsByClassName("p-img");
for (var i = 0; i < openw.length; i++) {
    var newwindow = openw[i];
    newwindow.addEventListener("click", function () {
        window.location.replace("detail.html");
    }
    )
}



//Thanh tìm kiếm 
var search = document.getElementById("top-search");
search.addEventListener("click", function () {
  var x = document.getElementById("top-search-history");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
})




