$(document).ready(function(){


    $('.btn-theme').on('click', function(){
        $('.btn-theme').toggleClass('dark-mode');
        // $('.body').toggleClass('dark-mode');
    });

});

// Local Storage

let darkMode = localStorage.getItem("dark-mode");
const darkModeToggle = document.querySelector(".btn-theme");

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", null);
}

if (darkMode === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode")
    if (darkMode !== "enabled"){
        enableDarkMode();
    }else {
        disableDarkMode();
    }

});

