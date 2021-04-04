"use strict"

function create() {
    var name = document.getElementById("name");
    var nameinput = document.getElementById("nameinput");
    if (nameinput.value == "") {
        alert("İsim alanı boş bırakılamaz")
    } else {
    name.innerHTML = nameinput.value;
    document.getElementById("badge").style.display = "block";
    html2canvas(document.getElementById("badge"), { letterRendering: 1, scale: 0.5, onrendered : function (canvas) { } }).then(function(canvas){
        var canvas = document.body.appendChild(canvas);
        var img = document.getElementById('badgefinal');
        img.src = canvas.toDataURL("image/jpeg");
        document.getElementById("badge").style.display = "none";
        document.getElementById("badge").style.position = "unset";
        document.getElementById('maindiv').style.display = "none";
        document.getElementById('ready').style.display = "flex";
        //document.body.removeChild(canvas)
        canvas.style.display = "none"
    })}
}

function onNameChange() {
    var name = document.getElementById("name");
    var nameinput = document.getElementById("nameinput");
    name.innerHTML = nameinput.value;
}

function goback() {
    location.reload()
}


