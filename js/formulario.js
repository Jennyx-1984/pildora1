const patternName=/^[A-Za-zÁÉÍÓÚáéíóúÑñÜüçÇ'\s\-]+$/; // --> nombres sin numeros, PERMITE:acentos,',guiones
const patternEmail=/^[^\s@.#]+\@gmail\.(com|es)$/ // --> correos solo de gmail
//contraseña de +8 caracteres, minimo 1 mayuscula, min 1 digito, 1 caracter especial. No permite espacios
const patternPass=/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]).[\S]{8,}$/;
const emptyField="El campo está vacío";
//declarar la variable de form



//funcion de form con evento submit con preventdefault, variables de campo y error, validaciones, alert, remover las clases, y reset










//función de validación de nombre, poner debajo el evento blur















//función de validación de email, poner debajo el evento blur











//función de validación de password, poner debajo el evento blur