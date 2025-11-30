const form=document.querySelector("form");
const patternName=/^[A-Za-zÁÉÍÓÚáéíóúÑñÜüçÇ'\s\-]+$/; // --> nombres sin numeros,acentos,',guiones
const patternEmail=/^[^\s@.#]+@gmail\.(com|es)$/ // --> correos solo de gmail
//contraseña de +8 caracteres, minimo 1 mayuscula, min 1 digito, 1 caracter especial. No permite espacios
const patternPass=/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).[\S]{8,}$/;
const emptyField="El campo está vacío";
//const enviar=document.getElementById("enviar");


form.addEventListener("submit",(e)=>{
e.preventDefault();

const nameOK=nameValidation();
const emailOK=emailValidation();
const passOK=passwordValidation();

if(!nameOK || !emailOK || !passOK) return alert("Te faltan datos por rellenar");

const fieldName=document.getElementById("name").value.trim();
const fieldEmail=document.getElementById("email").value.trim();
const fieldPass=document.getElementById("password").value.trim();
const errorName=document.getElementById("nameError");
const errorEmail=document.getElementById("emailError");
const errorPass=document.getElementById("passError");

alert(`¡Datos del formulario!\n\n` +
        `Nombre: ${fieldName}\n` +
        `Email: ${fieldEmail}\n` +
        `Contraseña: ${fieldPass}`);
errorName.classList.remove("valido","visible");
errorEmail.classList.remove("valido","visible");
errorPass.classList.remove("valido","visible");

form.reset();


})


/*enviar.addEventListener("submit",(e)=>{
e.preventDefault();

const nameOK=nameValidation();
const emailOK=emailValidation();
const passOK=passwordValidation();

if(!nameOK || !emailOK || !passOK) return alert("Te faltan datos por rellenar");

const fieldName=document.getElementById("name").value.trim();
const fieldEmail=document.getElementById("email").value.trim();
const fieldPass=document.getElementById("password").value.trim();
const errorName=document.getElementById("nameError");
const errorEmail=document.getElementById("emailError");
const errorPass=document.getElementById("passError");

alert(`¡Datos del formulario!\n\n` +
        `Nombre: ${fieldName}\n` +
        `Email: ${fieldEmail}\n` +
        `Contraseña: ${fieldPass}`);
errorName.classList.remove("valido","visible");
errorEmail.classList.remove("valido","visible");
errorPass.classList.remove("valido","visible");

form.reset();

})*/

function nameValidation(){
    const fieldName=document.getElementById("name").value.trim();
    const errorName=document.getElementById("nameError");

    if(fieldName===""){
        errorName.classList.remove("valido");
        errorName.textContent=emptyField;
        errorName.classList.add("visible");
        return false;
    }

    if(!patternName.test(fieldName)){
        errorName.classList.remove("valido");
        errorName.textContent="Has introducido un carácter inválido";
        errorName.classList.add("visible");
        return false;
    }

    if((patternName.test(fieldName)) && (fieldName.length<2)){
        errorName.classList.remove("valido");
        errorName.textContent="El nombre tiene que tener más de 1 letra";
        errorName.classList.add("visible");
        return false;
    }


        errorName.textContent="El nombre es válido";
        errorName.classList.add("valido");
        return true;
}

document.getElementById("name").addEventListener("blur",nameValidation);



function emailValidation(){
    const fieldEmail=document.getElementById("email").value.trim();
    const errorEmail=document.getElementById("emailError");

    if(fieldEmail===""){
        errorEmail.classList.remove("valido");
        errorEmail.textContent=emptyField;
        errorEmail.classList.add("visible");
        return false;
    }

    if(!patternEmail.test(fieldEmail)){
        errorEmail.classList.remove("valido");
        errorEmail.textContent="El formato del email está mal, solo acepta correos de gmail con extension .com o .es";
        errorEmail.classList.add("visible");
        return false;
    }
    errorEmail.textContent="Correo válido";
    errorEmail.classList.add("valido");
    return true;

}
document.getElementById("email").addEventListener("blur",emailValidation);


function passwordValidation(){
    const fieldPass=document.getElementById("password").value.trim();
    const errorPass=document.getElementById("passError");

    if(fieldPass===""){
        errorPass.classList.remove("valido");
        errorPass.textContent=emptyField;
        errorPass.classList.add("visible");
        return false;
    }

    if(!patternPass.test(fieldPass)){
        errorPass.classList.remove("valido");
        errorPass.textContent="La contraseña tiene que ser de minimo 8 caracteres, 1 mayuscula, 1 numero, 1 caracter especial";
        errorPass.classList.add("visible");
        return false;
    }

    errorPass.textContent="Contraseña válida";
    errorPass.classList.add("valido");
    return true;
}
document.getElementById("password").addEventListener("blur",passwordValidation);