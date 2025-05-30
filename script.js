const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
       nav.classList.add("active");
   }) 
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const heroSection = document.querySelector('.hero');
    const bgImages = [
        'image/design/mithra-bg4.png',
        'image/design/mithra-bg2.jpg',
        'image/design/mithra-bg3.jpg',
    
    ];
    let current = 0;
    let intervalId;

    function changeHeroBg(index = current) {
        heroSection.style.backgroundImage = `url('${bgImages[index]}')`;
        current = index;
    }
    function nextHeroBg() {
        changeHeroBg((current + 1) % bgImages.length);
    }
    function prevHeroBg() {
        changeHeroBg((current - 1 + bgImages.length) % bgImages.length);
    }
    function startSlider() {
        intervalId = setInterval(nextHeroBg, 3000);
    }
    function stopSlider() {
        clearInterval(intervalId);
    }

    changeHeroBg(); // Set initial image
    startSlider();
});

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
        {
            title: "Nonstick Pan",
            img: "./image/Product-img/f2.jpg",
            details: `
                <h4>Available Sizes:</h4>
                <ul><li>24cm, 28cm</li></ul>
                <h4>Quality:</h4>
                <ul><li>Triple Layer Nonstick</li></ul>
                <h4>Warranty:</h4>
                <ul><li>2 Years</li></ul>
                <h4>Durability:</h4>
                <ul><li>Scratch Resistant</li></ul>
            `
        },
        {
            title: "Tawa",
            img: "./image/Product-img/f3.jpg",
            details: `
                <h4>Available Sizes:</h4>
                <ul><li>26cm, 30cm</li></ul>
                <h4>Quality:</h4>
                <ul><li>Food Grade Aluminium</li></ul>
                <h4>Warranty:</h4>
                <ul><li>2 Years</li></ul>
                <h4>Durability:</h4>
                <ul><li>Non-stick, Easy Clean</li></ul>
            `
        },
        {
            title: "Kadai",
            img: "./image/Product-img/f4.jpg",
            details: `
                <h4>Available Sizes:</h4>
                <ul><li>2L, 3L</li></ul>
                <h4>Quality:</h4>
                <ul><li>Heavy Gauge</li></ul>
                <h4>Warranty:</h4>
                <ul><li>3 Years</li></ul>
                <h4>Durability:</h4>
                <ul><li>Riveted Handles</li></ul>
            `
        },
        {
            title: "Milk Pan",
            img: "./image/Product-img/f5.jpg",
            details: `
                <h4>Available Sizes:</h4>
                <ul><li>1L, 1.5L</li></ul>
                <h4>Quality:</h4>
                <ul><li>Stainless Steel</li></ul>
                <h4>Warranty:</h4>
                <ul><li>1 Year</li></ul>
                <h4>Durability:</h4>
                <ul><li>Rust Proof</li></ul>
            `
        },
        {
            title: "Fry Pan",
            img: "./image/Product-img/f6.jpg",
            details: `
                <h4>Available Sizes:</h4>
                <ul><li>22cm, 26cm</li></ul>
                <h4>Quality:</h4>
                <ul><li>Nonstick Coating</li></ul>
                <h4>Warranty:</h4>
                <ul><li>2 Years</li></ul>
                <h4>Durability:</h4>
                <ul><li>Heat Resistant Handle</li></ul>
            `
        },
        {
            title: "Sauce Pan",
            img: "./image/Product-img/f7.jpg",
            details: `
                <h4>Available Sizes:</h4>
                <ul><li>1.5L, 2L</li></ul>
                <h4>Quality:</h4>
                <ul><li>Stainless Steel</li></ul>
                <h4>Warranty:</h4>
                <ul><li>1 Year</li></ul>
                <h4>Durability:</h4>
                <ul><li>Induction Base</li></ul>
            `
        },
        {
            title: "Handi",
            img: "./image/Product-img/f8.jpg",
            details: `
                <h4>Available Sizes:</h4>
                <ul><li>2L, 3L</li></ul>
                <h4>Quality:</h4>
                <ul><li>Mirror Finish</li></ul>
                <h4>Warranty:</h4>
                <ul><li>2 Years</li></ul>
                <h4>Durability:</h4>
                <ul><li>Heavy Bottom</li></ul>
            `
        },
        {
            title: "Steamer",
            img: "./image/shop-image/n1.jpg",
            details: `
                <h4>Available Sizes:</h4>
                <ul><li>3 Tier</li></ul>
                <h4>Quality:</h4>
                <ul><li>Stainless Steel</li></ul>
                <h4>Warranty:</h4>
                <ul><li>1 Year</li></ul>
                <h4>Durability:</h4>
                <ul><li>Dishwasher Safe</li></ul>
            `
        },
        {
            title: "Idli Pot",
            img: "./image/shop-image/n2.jpg",
            details: `
                <h4>Available Sizes:</h4>
                <ul><li>4 Plates</li></ul>
                <h4>Quality:</h4>
                <ul><li>Food Grade</li></ul>
                <h4>Warranty:</h4>
                <ul><li>1 Year</li></ul>
                <h4>Durability:</h4>
                <ul><li>Easy Clean</li></ul>
            `
        },
        {
            title: "Dosa Tawa",
            img: "./image/shop-image/n3.jpg",
            details: `
                <h4>Available Sizes:</h4>
                <ul><li>30cm</li></ul>
                <h4>Quality:</h4>
                <ul><li>Nonstick</li></ul>
                <h4>Warranty:</h4>
                <ul><li>2 Years</li></ul>
                <h4>Durability:</h4>
                <ul><li>Scratch Resistant</li></ul>
            `
        },
        {
            title: "Grill Pan",
            img: "./image/shop-image/n4.jpg",
            details: `
                <h4>Available Sizes:</h4>
                <ul><li>28cm</li></ul>
                <h4>Quality:</h4>
                <ul><li>Cast Iron</li></ul>
                <h4>Warranty:</h4>
                <ul><li>5 Years</li></ul>
                <h4>Durability:</h4>
                <ul><li>Heavy Duty</li></ul>
            `
        }
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
