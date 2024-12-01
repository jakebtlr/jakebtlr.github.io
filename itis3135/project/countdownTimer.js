document.addEventListener("DOMContentLoaded", () => {
    const eventDate = new Date("2025-01-05T00:00:00"); // Example date
    const timer = document.getElementById("timer");

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = eventDate - now;

        if (timeRemaining <= 0) {
            timer.textContent = "The event has started!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        timer.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }

    // Initial call and interval setup
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
});
