const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}



// Cooker Card Modal Logic




function openModal(imgSrc, title, price, description) {
    // Set the correct image path for the popup
    document.getElementById("modalImg").src = "./image/item-img/6.jpg" + imgSrc;
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDesc").textContent = description;
    document.getElementById("modalPrice").textContent = price;
    document.getElementById("productModal").style.display = "block";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}











// Close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById("productModal");
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Product details for each card (order must match .pro cards)
    const productDetails = [
        {
            title: "Pressure Cooker",
            img: "./image/item-img/1.jpg",
            details: `
                <h4>Available Sizes:</h4>
                <ul>
                    <li>3 Litres</li>
                    <li>5 Litres</li>
                    <li>7.5 Litres</li>
                </ul>
                <h4>Quality:</h4>
                <ul>
                    <li>High-grade Aluminium</li>
                    <li>ISI Certified Safety Valve</li>
                </ul>
                <h4>Warranty:</h4>
                <ul>
                    <li>5 Years</li>
                </ul>
                <h4>Durability:</h4>
                <ul>
                    <li>Anti-bulge Base</li>
                    <li>Ergonomic Bakelite Handles</li>
                </ul>
            `
        },
        
    ];

    // Modal logic
    const proCards = document.querySelectorAll('.pro-container .pro');
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    const modalDetails = document.getElementById('modal-details');
    const closeModal = document.getElementById('close-product-modal');

    proCards.forEach((card, idx) => {
        card.style.cursor = "pointer";
        card.onclick = function(e) {
            // Prevent cart icon click from opening modal
            if (e.target.closest('a')) return;
            const details = productDetails[idx] || {
                title: "Product Details",
                img: card.querySelector('img').src,
                details: "<p>No details available.</p>"
            };
            modalTitle.textContent = details.title;
            modalImg.src = details.img;
            modalDetails.innerHTML = details.details;
            modal.style.display = "flex";
        };
    });

    if (closeModal) {
        closeModal.onclick = function() {
            modal.style.display = "none";
        };
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});




