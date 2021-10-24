$(document).ready(function(){


    $('.btn-theme').on('click', function(){
        $('.btn-theme').toggleClass('dark-mode');
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

// Parallax Effect

$(window).scroll(function () {
    let wScroll = $(this).scrollTop();

    // Work Section Parallax

    if (wScroll > $("#work").offset().top - 100 ) {
        $("#work .col-work").each(function (i) {
            setTimeout(function () {
                $("#work .col-work").eq(i).addClass("scroll");
            }, 300 * i);
        });
    }

    if (wScroll > $("#about").offset().top - 100 ) {
        $("#about .about-col").each(function (i) {
            setTimeout(function () {
                $("#about .about-col").eq(i).addClass("scroll");
            }, 300 * i);
        });

        $("#about .about-img").addClass("scroll");
    }

});

