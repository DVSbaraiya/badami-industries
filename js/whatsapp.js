document.addEventListener("DOMContentLoaded", function () {
        const whatsappBtn = document.getElementById("whatsappBtn");
        const userName = document.getElementById("userName");
        const userPhone = document.getElementById("userPhone");
        const userEmail = document.getElementById("userEmail");
        const userMessage = document.getElementById("userMessage");

        const nameError = document.getElementById("nameError");
        const phoneError = document.getElementById("phoneError");

        whatsappBtn.addEventListener("click", function (e) {
            e.preventDefault();

            // Reset error messages
            nameError.style.display = "none";
            phoneError.style.display = "none";

            // Get values from inputs
            const name = userName.value.trim();
            const phone = userPhone.value.trim();
            const email = userEmail.value.trim();
            const message = userMessage.value.trim();

            // Validation for required fields
            let hasError = false;
            if (!name) {
                nameError.style.display = "block";
                hasError = true;
            }
            if (!phone) {
                phoneError.style.display = "block";
                hasError = true;
            }

            // Stop if validation fails
            if (hasError) return;

            // Construct WhatsApp message
            let whatsappMessage = `Hello, my name is ${name}.`;
            whatsappMessage += `\nPhone: ${phone}`;
            if (email) {
                whatsappMessage += `\nEmail: ${email}`;
            }
            if (message) {
                whatsappMessage += `\nMessage: ${message}`;
            }
            whatsappMessage += `\nPage Link: ${window.location.href}`;

            const whatsappNumber = "919824203992";
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

            // Open WhatsApp link
            window.open(whatsappURL, "_blank");
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const whatsappBtn = document.getElementById("floatingWhatsappBtn");

        whatsappBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const message = `I want to purchase this.\nPage Link: ${window.location.href}`;
            const whatsappNumber = "919824203992"

            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, "_blank");
        });
    });