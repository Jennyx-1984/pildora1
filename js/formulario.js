const patternName=/^[A-Za-zÁÉÍÓÚáéíóúÑñÜüçÇ'\s\-]+$/; // --> nombres sin numeros, PERMITE:acentos,',guiones
const patternEmail=/^[^\s@.#]+@gmail\.(com|es)$/ // --> correos solo de gmail
//contraseña de +8 caracteres, minimo 1 mayuscula, min 1 digito, 1 caracter especial. No permite espacios
const patternPass=/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]).[\S]{8,}$/;
const emptyField="El campo está vacío";