var dlBoxTwo = document.querySelector(".dlBoxTwo");
var dlBoxOne = document.querySelector(".dlBoxOne");

now.onclick = function() {
    dlBoxOne.style.visibility = "visible"
    dlBoxTwo.style.visibility = "hidden";
}
end.onclick = function() {
    dlBoxOne.style.visibility = "hidden";
    dlBoxTwo.style.visibility = "visible";
}