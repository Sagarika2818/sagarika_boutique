window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1500);
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    document.getElementById("successMessage").style.display = "block";

    // Clear the form
    this.reset();

    // Hide the message after 4 seconds
    setTimeout(function() {
        document.getElementById("successMessage").style.display = "none";
    }, 4000);
});