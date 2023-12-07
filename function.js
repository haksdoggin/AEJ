function redirectToAnotherPage(person) {
    window.location.href = person.toLowerCase() + '.html';
}

/*window.addEventListener("resize", function() {
  document.getElementById("windowWidth").innerHTML = window.innerWidth;
  document.getElementById("windowHeight").innerHTML = window.innerHeight;
});
*/
document.getElementById("EdrianButton").addEventListener("click", function(){
  window.location.href="Edrian.html"
});

document.getElementById("AdrianButton").addEventListener("click", function(){
  window.location.href="Adrian.html"
});