function goToServices() {
    window.location.href = "services.html";
}

function goToContact() {
    window.location.href = "contact.html";
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
