// function toggleDropdown() {
//     let dropdown = document.getElementById("dropdown");
//     dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
// }

// // Close the dropdown when clicking outside
// document.addEventListener("click", function(event) {
//     let dropdown = document.getElementById("dropdown");
//     let trigger = document.querySelector(".dropdown");

//     if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
//         dropdown.style.display = "none";
//     }
// });


let box = document.getElementById("box");
let position = 0;
let speed = 2; // Adjust movement speed

function moveBox() {
    position += speed;
    if (position > window.innerWidth) {
        position = -100; // Reset to start from left again
    }
    box.style.left = position + "px";
}

setInterval(moveBox, 4);

