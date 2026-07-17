window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1500);
});


const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("successMessage").style.display = "block";

        this.reset();

        setTimeout(function() {
            document.getElementById("successMessage").style.display = "none";
        }, 4000);
    });
}

// Loader
window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1500);
});

// Quick View Popup
function openModal(image, title, price, description) {
    document.getElementById("modalImage").src = image;
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modalDescription").innerText = description;

    document.getElementById("quickViewModal").style.display = "block";
}

// Close button
document.querySelector(".close-btn").onclick = function () {
    document.getElementById("quickViewModal").style.display = "none";
}

// Close when clicking outside
window.onclick = function (e) {
    if (e.target == document.getElementById("quickViewModal")) {
        document.getElementById("quickViewModal").style.display = "none";
    }
}

// Toast message
function showToast(message) {
    const toast = document.getElementById("toast");

    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}

// Add to Cart
function addToCart() {
    showToast("🛒 Product Added to Cart!");
}

// Add to Wishlist
function addToWishlist() {
    showToast("❤️ Added to Wishlist!");
}