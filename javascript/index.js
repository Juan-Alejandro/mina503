/*CABECERA*/
            /*MENU DESPLEGABLE MOVIL*/
            


/*CUERPO*/
            /*PREGUNTA DE REDIRECCIONADOR*/
            function pregunta_redireccionador(){
                const confirmacion = confirm("¿Estás seguro de que deseas abandonar el sitio?");
                if(!confirmacion) {
                    event.preventDefault();
                }
            }
            function pregunta_redireccionadoris(){
                const confirmacion = confirm("¿Estás seguro de que deseas abandonar el sitio?");
                if(!confirmacion) {
                    event.preventDefault();
                }else {
                    window.open("html/inicio_secion.html","_self");
                }
            }
            
            /*ABRIR COSAS*/
            function abrirstandby() {
                window.open("html/standby.html","_self");
            }
/*MENU DE PUNTO DE VENTA*/
            /*MENU DESPLEGABLE MOVIL*/
            
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
            /*RETORNO A INDEX*/
        function cerrarsecion() {
            const confirmacion = confirm("¿Estás seguro de que deseas abandonar el sitio?");
                if(!confirmacion) {
                    event.preventDefault();
                    
                }else{
                    window.open("../inicio_secion.html","_self");
                }
            
        }
/*ENVIOS A SECCIONES DE MENU PUNTO DE VENTA*/
        function openSection(valor) {
            var num = parseInt(valor);
            //alert(num);
            switch(num){
                case 1:
                    window.open("secciones/ventas.html","_self");
                    break;
                case 2:
                    window.open("../standby.html","_self");
                    break;
                case 3:
                    
                    break;
                case 4:
                    
                    break;
                case 5:
                    
                    break;
            }
        }
/*ENVIOS A SECCIONES BARRA LATERAL DE LOS APARTADOS*/
        function openSectionAside(valor) {
            var num = parseInt(valor);
            //alert(num);
            switch(num){
                case 1:
                    window.open("ventas.html","_self");
                    break;
                case 2:
                    window.open("../../standby.html","_self");
                    break;
                case 3:
                    
                    break;
                case 4:
                    
                    break;
                case 5:
                    
                    break;
                case 6:
                    window.open("../Menu_pventa.html","_self");
                    break;
            }
        }

/*APARTADO DE VENTA*/
            //DONACIONES
            function prenapaginputs(enable) {
                const inputs = document.querySelectorAll("#id_inputsdesacdona_ventas");
                const inp = document.getElementById('input_disable_ventas');
                   if(enable){
                       inp.disabled=false;
                       inp.classList.remove('input_disableddona_ventas');
                   } else {
                       inp.disabled=true;
                       inp.classList.add('input_disableddona_ventas');
                   }
            }


 