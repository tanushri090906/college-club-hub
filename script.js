function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (email && pass) {
        document.getElementById("loginPage").classList.remove("active");
        document.getElementById("dashboardPage").classList.add("active");
    } else {
        alert("Please enter email and password");
    }
}

function openRegister() {
    document.getElementById("registerPopup").style.display = "flex";
}

function closeRegister() {
    document.getElementById("registerPopup").style.display = "none";
}
