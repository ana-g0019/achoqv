document.addEventListener("DOMContentLoaded", function() {
    let playMusicButton = document.getElementById("playMusic2");
    let noButton = document.getElementById("no-button");

    if (playMusicButton) {
        playMusicButton.addEventListener("click", function() {
            window.location.href = "https://open.spotify.com/track/6oDfRqEbg2gOf64XSwgfCF";
        });
    }

    function redirecionar() {
        window.location.href = "yes.html";
    }

    function moveNoButton() {
        if (noButton) {
            noButton.style.position = "absolute";
            noButton.style.top = Math.random() * (window.innerHeight - noButton.clientHeight) + "px";
            noButton.style.left = Math.random() * (window.innerWidth - noButton.clientWidth) + "px";
        }
    }

    if (noButton) {
        noButton.addEventListener("mouseover", moveNoButton);
        noButton.addEventListener("touchstart", moveNoButton);
    }

    let yesButton = document.querySelector("button[onclick='redirecionar()']");
    if (yesButton) {
        yesButton.addEventListener("click", redirecionar);
    }
});