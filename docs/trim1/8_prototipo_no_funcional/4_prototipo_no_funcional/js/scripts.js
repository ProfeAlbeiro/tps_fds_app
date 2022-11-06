function validarLogin() {
    event.preventDefault();
    let correo = document.getElementById('correo').value;
    let pass = document.getElementById('pass').value;
    console.log("Su correo modificado es: " + correo + " y su password es: " + pass);
    // alert("Su correo es: " + correo + " y su password es: " + pass);
}