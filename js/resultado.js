const params = new URLSearchParams(window.location.search);
const nombre = params.get("name");
const email = params.get("email");
const pass= params.get("password");
const resultado=document.getElementById("resultado");

resultado.innerHTML = `
  <p><strong>Nombre:</strong> ${nombre}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Contraseña:</strong> ${pass}</p>
  <button id="enviar" onclick="location.href='index.html'">Volver</button>
`;

