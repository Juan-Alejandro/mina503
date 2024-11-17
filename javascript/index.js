/*CABECERA*/
document.addEventListener("DOMContentLoaded", function () {
                const icoham = document.querySelector(".ico_ham");
                const lisnav = document.querySelector(".lis_nav_cabecera");
                icoham.addEventListener("click", function () {
                    lisnav.classList.toggle("active");
                });
            });