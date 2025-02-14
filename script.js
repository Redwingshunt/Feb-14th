window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollFraction = scrollTop / docHeight; // Get scroll percentage (0 to 1)

    let opacityValue = Math.min(scrollFraction * 2, 1); // Gradual opacity increase
    let blurValue = Math.max(10 - scrollFraction * 10, 0); // Decrease blur
    blurValue-=3;

    document.querySelector(".missed-me-img").style.opacity = opacityValue;
    document.querySelector(".missed-me-img").style.filter = `blur(${blurValue}px)`;
});
let things = [];
function trip(){

    things.push("take you on trips,");
}
function sing(){

    things.push("sing for you,");
}
function coffeeDate(){

    things.push("take you on a coffee-date,");
}
function dinnerNight(){

    things.push("go on a dinnernight,");
}
function surprise(){

    things.push("surprise with the stuff you love,");
}
function gifts(){

    things.push("bear lots of gifts,");
}
function shopping(){

    things.push("shop along with you,");
}
function danceOff(){

    things.push("Do nachi nachi with you,");
}
function movie(){

    things.push("watch Race 3 with you,");
}
function redirecting(){

sessionStorage.setItem("things", JSON.stringify(things));
setTimeout(() =>{window.location.href="./Customize.html"}, 1000);
}





  function playAudio() {
        let audio = new Audio("./music/Glass Animals - Heat Waves (FarFlow Bootleg).wav"); // Replace with your audio file
        audio.play();
    }

    function startFalling() {
        for (let i = 0; i < 20; i++) { // Create 20 leaves
            let leaf = document.createElement("div");
            leaf.innerHTML = "🍁"; // Using the leaf emoji
            leaf.classList.add("leaf");

            let randomLeft = Math.random() * window.innerWidth; // Random X position
            let randomDuration = Math.random() * 3 + 2; // Random fall speed (2s to 5s)

            leaf.style.left = `${randomLeft}px`;
            leaf.style.animationDuration = `${randomDuration}s`;

            document.body.appendChild(leaf);

            // Remove leaf after animation
            setTimeout(() => { leaf.remove(); }, randomDuration * 1000);
        }
    }
