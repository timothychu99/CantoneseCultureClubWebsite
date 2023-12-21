// Add your JavaScript code here
function moveToSection(id) {
    var element = document.getElementById(id);
    var headerOffset = 130;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });   
}
