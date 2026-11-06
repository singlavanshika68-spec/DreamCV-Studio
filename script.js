/* =====================================
   YESTERDAY'S ESCAPE JS
===================================== */


/* ==============================
   CART
============================== */

let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    showMessage(name + " added to your escape ☕");
}


function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cartTotal");


    cartCount.innerText = cart.length;


    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">
                Your cart is empty ☕
             </p>`;

        cartTotal.innerText = "₹0";

        return;
    }


    let total = 0;

    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        total += item.price;


        const div =
            document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `

            <div>

                <strong>${item.name}</strong>

                <small>₹${item.price}</small>

            </div>

            <button
                onclick="removeFromCart(${index})"
                style="
                border:none;
                background:none;
                color:#b85c38;
                font-size:18px;
                ">

                ×

            </button>

        `;


        cartItems.appendChild(div);

    });


    cartTotal.innerText = "₹" + total;

}


function removeFromCart(index) {

    cart.splice(index,1);

    updateCart();

}


function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("open");

}


function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("open");

}


function checkout() {

    if (cart.length === 0) {

        showMessage("Your cart is empty ☕");

        return;

    }

    showMessage(
        "Order received! Your escape is being prepared ♥"
    );

}



/* ==============================
   NAVIGATION
============================== */

function scrollToSection(id) {

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ==============================
   MENU FILTER
============================== */

function filterMenu(category) {

    const cards =
        document.querySelectorAll(".food-card");

    const buttons =
        document.querySelectorAll(".menu-tab");


    buttons.forEach(button => {

        button.classList.remove("active");

    });


    event.target.classList.add("active");


    cards.forEach(card => {

        if (
            category === "all" ||
            card.classList.contains(category)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}



/* ==============================
   FAVORITES
============================== */

function toggleFavorite(button) {

    button.classList.toggle("favorite");


    if (
        button.classList.contains("favorite")
    ) {

        button.innerText = "♥";

        showMessage("Added to favourites ♥");

    } else {

        button.innerText = "♡";

    }

}



/* ==============================
   DELIVERY
============================== */

function checkDelivery() {

    const location =
        document.getElementById("location").value.trim();


    const result =
        document.getElementById("delivery-result");


    if (location === "") {

        result.innerText =
            "Please enter your location 📍";

        result.style.color =
            "#b85c38";

        return;

    }


    result.innerText =
        "Great! We deliver to your area 🛵";

    result.style.color =
        "#54815c";

}



/* ==============================
   REVIEWS
============================== */

function submitReview() {

    const name =
        document.getElementById("reviewName").value.trim();

    const text =
        document.getElementById("reviewText").value.trim();

    const rating =
        document.getElementById("reviewRating").value;


    if (name === "" || text === "") {

        showMessage(
            "Please complete your review ♥"
        );

        return;

    }


    const reviewGrid =
        document.querySelector(".review-grid");


    const card =
        document.createElement("div");


    card.className = "review-card";


    card.innerHTML = `

        <div class="stars">
            ${"★".repeat(Number(rating))}
        </div>

        <p>
            “${text}”
        </p>

        <div class="reviewer">

            <div class="avatar">
                ${name.charAt(0).toUpperCase()}
            </div>

            <div>

                <strong>
                    ${name}
                </strong>

                <small>
                    New Escapist
                </small>

            </div>

        </div>

    `;


    reviewGrid.prepend(card);


    document.getElementById("reviewName").value = "";

    document.getElementById("reviewText").value = "";


    showMessage(
        "Thank you for sharing your escape ♥"
    );

}



/* ==============================
   RESERVATION
============================== */

function openReservation() {

    const name =
        prompt("What's your name?");


    if (!name) return;


    const people =
        prompt("How many people?");


    if (!people) return;


    const time =
        prompt("Preferred time?");


    if (!time) return;


    showMessage(
        "Table request received for " +
        name +
        " ♥"
    );

}



/* ==============================
   MESSAGE
============================== */

function showMessage(message) {

    const toast =
        document.getElementById("toast");


    toast.innerText = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    },3000);

}



/* ==============================
   MOBILE MENU
============================== */

function toggleMobileMenu() {

    const nav =
        document.querySelector(".navbar nav");


    if (nav.style.display === "flex") {

        nav.style.display = "";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";

        nav.style.top = "82px";

        nav.style.left = "0";

        nav.style.right = "0";

        nav.style.padding = "25px";

        nav.style.background = "#fff8ed";

        nav.style.flexDirection = "column";

    }

}