/* -------------------------------------------------------------------------------- */
/* DOM: CAPTURADOR DE CLICK Y ID (CLASES) ----------------------------------------- */
/* -------------------------------------------------------------------------------- */
const capturaId = document.querySelectorAll(".captura-id");
// Captura el Id
capturaId.forEach(captura => {
    captura.addEventListener("click", mainIndex);
});
// Método Principal
function mainIndex() {
    id = event.target.getAttribute("id");
    if (id == "submint_login") {
        validarLogin();
    } else if (id == "submit-contac") {
        validarContac();
    }
}

/* -------------------------------------------------------------------------------- */
/* FUNCIONES ---------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
// Validar Contacto
function validarContac() {
    // Captura el valor que tienen los controles del formulario
    nombres = document.getElementById('nombres').value;
    apellidos = document.getElementById('apellidos').value;
    correo = document.getElementById('correo-cont').value;
    asunto = document.getElementById('asunto').value;
    mensaje = document.getElementById('mensaje').value;
    // Expresiones Regulares para validar controles del formulario
    let textoPatron = /^[ a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ]+$/;
    let correoPatron = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    // Frena el evento: Click
    event.preventDefault();
    // Nombres: Cuando está vacío
    if (nombres === "") {
        alert("Los Nombres NO pueden estar vacíos");
        document.getElementById('nombres').focus();
    }
    // Nombres: No puede contener números o caracteres especiales
    else if (!textoPatron.test(nombres)) {
        alert("Los Nombres NO pueden contener números o caracteres especiales");
        document.getElementById('nombres').focus();
    }
    // Nombres: No puede contener números o caracteres especiales
    else if (nombres.length < 2 || nombres.length > 50) {
        alert("Los Nombres deben tener entre 2 y 50 caracteres");
        document.getElementById('nombres').focus();
    }
    // Se envía el mensaje
    else {
        alert("El mensaje se ha enviado correctamente. En menos de 24 horas el Administrador se comunicará con Usted por medio de su Correo Electrónico");
        window.location = 'index.html#contactenos';        
    }
}

// Validar Login
function validarLogin() {
    // Captura el valor que tienen los controles del formulario
    let correo = document.getElementById('correo').value;
    let pass = document.getElementById('pass').value; 
    // Expresiones Regulares para validar controles del formulario
    let TextoPatron = /^[ a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ]+$/;
    let correoPatron = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    // Frena el evento: Click
    event.preventDefault();
    // Correo: Cuando está vacío
    if (correo === "") {
        alert("El Correo NO puede estar vacío");
        document.getElementById('correo').focus();
    }
    // Correo: Es un correo (@, .com, .es, etc)
    else if (!correoPatron.test(correo)) {
        alert("No es un correo válido");
        document.getElementById('correo').focus();
    }
    // Password: Cuando esté vacío
    else if (pass === "") {
        alert("La contraseña NO puede estar vacía");
        document.getElementById('pass').focus();
    }
    // Password: Debe contener entre 5 y 8 caracteres
    else if (pass.length < 5 || pass.length > 8) {
        alert("La contraseña debe tener entre 5 y 8 caracteres");
        document.getElementById('pass').focus();
    }
    else {
        // Validar el acceso al Dashboard: Administrador
        if (correo === "admin@correo.com" && pass == "12345") {
            window.location = '../admin.html';
        }
        // Validar el acceso al Dashboard: Cliente
        else if (correo === "cliente@correo.com" && pass == "12345") {
            window.location = '../customer.html';
        }
        // Validar el acceso al Dashboard: Vendedor
        else if (correo === "vendedor@correo.com" && pass == "12345") {
            window.location = '../seller.html';
        }
        // Datos Incorrectos
        else {
            alert('Los datos son incorrectos');
        }  
    }
      
}
