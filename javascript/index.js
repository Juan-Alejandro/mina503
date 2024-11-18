/*CABECERA*/
            document.addEventListener("DOMContentLoaded", function () {
                const icoham = document.querySelector(".ico_ham");
                const lisnav = document.querySelector(".lis_nav_cabecera");
                icoham.addEventListener("click", function () {
                    lisnav.classList.toggle("active");
                });
            });


/*CUERPO*/
            function pregunta_redireccionador(){
                const confirmacion = confirm("¿Estás seguro de que deseas abandonar el sitio?");
                if(!confirmacion) {
                    event.preventDefault();
                }
            }

            function abrirstandby() {
                window.open("html/standby.html","_self");
            }
            function abriris() {
                window.open("html/inicio_secion.html","_self")
            }