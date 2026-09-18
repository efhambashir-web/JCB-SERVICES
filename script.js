function sendEnquiry() {
    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;

    const message = document.getElementById("message");

    if (name === "" || phone === "" || service === "") {
        message.textContent = "Please fill all details.";
        return;
    }

    const whatsappNumber = "+919906662587";

    const text =
        "Hello Khan JCB Services,%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Service: " + encodeURIComponent(service);

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + text,
        "_blank"
    );

    message.textContent = "Opening WhatsApp...";
}
