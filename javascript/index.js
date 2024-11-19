/*CABECERA*/
            /*MENU DESPLEGABLE MOVIL*/
            document.addEventListener("DOMContentLoaded", function () {
                const icoham = document.querySelector(".ico_ham");
                const lisnav = document.querySelector(".lis_nav_cabecera");
                icoham.addEventListener("click", function () {
                    lisnav.classList.toggle("active");
                });
            });


/*CUERPO*/
            /*PREGUNTA DE REDIRECCIONADOR*/
            function pregunta_redireccionador(){
                const confirmacion = confirm("¿Estás seguro de que deseas abandonar el sitio?");
                if(!confirmacion) {
                    event.preventDefault();
                }
            }
            /*ABRIR COSAS*/
            function abrirstandby() {
                window.open("html/standby.html","_self");
            }
            function abriris() {
                window.open("html/inicio_secion.html","_self")
            }

/*MENU DE PUNTO DE VENTA*/
            /*MENU DESPLEGABLE MOVIL*/
            document.addEventListener("DOMContentLoaded", function () {
                const icoham = document.querySelector(".ico_ham_pventa");
                const lisnav = document.querySelector(".div_perfil_pventa");
                icoham.addEventListener("click", function () {
                    lisnav.classList.toggle("active");
                });
            });
            /*CARGADOR DE IMAGEN*/
                const upicon = document.getElementById('icon_photo_pventa');
                const archivo = document.getElementById('input_cargarimagen_pventa');
                upicon.addEventListener('click', () =>{
                    archivo.click();
                })
                const imgg = document.getElementById('img_perfil_pventa');
                archivo.addEventListener('change', function () {
                    const obar = this.files[0]; 
                    if (obar) {
                        const lector = new FileReader();
                        lector.onload = function (event) {
                            const dimg = event.target.result;
                            imgg.src = dimg;
                            localStorage.setItem('ImagenAlm', dimg);
                        };
                        lector.readAsDataURL(obar); 
                    }
                });
                window.addEventListener('load', function () {
                    const Imgalm = localStorage.getItem('ImagenAlm');
                    if (Imgalm) {
                        imgg.src = Imgalm;
                    }
                });