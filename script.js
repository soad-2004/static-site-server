document.getElementById("colorButton").addEventListener("click", function() {
    const colors = ["red", "green", "blue", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
 
