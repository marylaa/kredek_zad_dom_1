function onLoad() {
    document.getElementById("answer1").innerHTML = document.cookie.split(";")[0].split("=")[1];
    document.getElementById("answer2").innerHTML = document.cookie.split(";")[1].split("=")[1];
}