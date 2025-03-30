document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const message = document.getElementById("message");

    function moveButton() {
        const maxWidth = window.innerWidth - noButton.clientWidth;
        const maxHeight = window.innerHeight - noButton.clientHeight;

        const newX = Math.random() * maxWidth;
        const newY = Math.random() * maxHeight;

        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }

    noButton.addEventListener("mouseover", moveButton);
    noButton.addEventListener("click", moveButton);

    yesButton.addEventListener("click", function() {
        message.innerText = "Estamos namorando! ❤️";
        noButton.style.display = "none";
        yesButton.style.display = "none";
    });
});
