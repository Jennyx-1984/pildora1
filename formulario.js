const form=document.querySelector("form");
const patternName=/^[A-Za-zÁÉÍÓÚáéíóúÑñÜüçÇ'\s\-]+$/; // --> nombres sin numeros,acentos,',guiones
const patternEmail=/^[^\s@.#]+@gmail\.(com|es)$/ // --> correos solo de gmail
//contraseña de +8 caracteres, minimo 1 mayuscula, min 1 digito, 1 caracter especial. No permite espacios
const patternPass=/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).[\S]{8,}$/


form.addEventListener("submit",(e)=>{
e.preventDefault();

const nameOK=nameValidation();
const emailOK=emailValidation();
const passOK=passwordValidation();


if (!nameOK || !emailOK || !passOK) return;
const fieldName=document.getElementById("name").value.trim();
const fieldEmail=document.getElementById("email").value.trim();
const fieldPass=document.getElementById("password").value.trim();

alert(`¡Datos del formulario!\n\n` +
        `Nombre: ${fieldName}\n` +
        `Email: ${fieldEmail}\n` +
        `Contraseña: ${fieldPass}`);
form.reset();

})
function nameValidation(){
const fieldName=document.getElementById("name").value.trim();    
const errorName=document.getElementById("nameError");

if(fieldName===""){
    errorName.classList.remove("valido", "visible");
    errorName.textContent="El campo está vacío";
    errorName.classList.add("visible");
    return false;
}

if(!patternName.test(fieldName)){
    errorName.classList.remove("valido", "visible");
    errorName.textContent="Has introducido un carácter incorrecto";
    errorName.classList.add("visible");
    return false;
}

if((patternName.test(fieldName)) && (fieldName.length<3)){
    errorName.classList.remove("valido", "visible");
    errorName.textContent="El nombre tiene que tener más de 3 carácteres";
    errorName.classList.add("visible");
    return true;
}

errorName.textContent="El nombre es válido";
errorName.classList.add("valido");
return true;
}


function emailValidation(){
    const fieldEmail=document.getElementById("email").value.trim();
    const errorEmail=document.getElementById("emailError");

    if(fieldEmail===""){
        errorEmail.classList.remove("valido", "visible");
        errorEmail.textContent="El campo está vacío";
        errorEmail.classList.add("visible");
        return false;
    }

    if(!patternEmail.test(fieldEmail)){
        errorEmail.classList.remove("valido", "visible");
        errorEmail.textContent="El email es incorrecto, solo aceptamos correos de gmail";
        errorEmail.classList.add("visible");
        return false;
    }

    errorEmail.textContent="Correo válido";
    errorEmail.classList.add("valido");
    return true;
}


function passwordValidation(){
    const fieldPass=document.getElementById("password").value.trim();
    const errorPass=document.getElementById("passError");

    if(fieldPass===""){
        errorPass.classList.remove("valido", "visible");
        errorPass.textContent="El campo está vacío";
        errorPass.classList.add("visible");
        return false;
    }

    if(!patternPass.test(fieldPass)){
        errorPass.classList.remove("valido", "visible");
        errorPass.textContent="La contraseña debe tener al menos 8 letrás, minimo una mayúscula, un carácter especial y números";
        errorPass.classList.add("visible");
        return false;
    }

    errorPass.textContent="Contraseña válida";
    errorPass.classList.add("valido");
    return true;

}

document.getElementById("name").addEventListener("blur", nameValidation);

document.getElementById("email").addEventListener("blur", emailValidation);

document.getElementById("password").addEventListener("blur",passwordValidation);

