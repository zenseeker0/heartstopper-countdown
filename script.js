const targetDate = new Date("2023-08-03T13:00:00"); // Replace with your target date and time (e.g., 2023-12-31T23:59:59)

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        document.getElementById("timer").innerHTML = "Countdown Expired!";
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s
        `;
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);