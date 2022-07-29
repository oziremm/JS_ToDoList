let taskDom = document.querySelector("#task");
let btnDom = document.querySelector("#liveToastBtn");
let listDom = document.querySelector("#list");

btnDom.addEventListener("click", taskElement);


//Yeni eleman ekleme
function taskElement() {
    if (taskDom.value) {
        let li = document.createElement("li");
        li.innerHTML = taskDom.value;
        listDom.append(li);
        $(".success").toast("show")
    }
    else {
        $(".error").toast("show");
    }
}

//Close Button ekleme
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//Close Butona tıklandığında eleman çıkarma
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Checked Symbol ekleme
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


