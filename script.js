
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {

    // Select HTML elements
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Generate a random hexadecimal color
    function getRandomColor() {
        const randomColor = Math.floor(Math.random() * 16777215);

        return "#" + randomColor.toString(16).padStart(6, "0");
    }

    // Change box color when button is clicked
    changeColorBtn.addEventListener("click", () => {

        const newColor = getRandomColor();

        colorBox.style.backgroundColor = newColor;

    });

});
