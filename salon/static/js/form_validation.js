const btnEnviar = document.getElementById("btn-enviar");
const emailValido = (email) => {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

  const validation = (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    if (name.value.trim() === "") {
      alert("Por favor ingresa tu nombre!");
      name.focus();
      return false;
    }

    if (email.value.trim() === "") {
      alert("Por favor ingresa tu email!");
      email.focus();
      return false;
    }

    if (!emailValido(email.value)) {
      alert("Por favor ingresa un email valido!");
      email.focus();
      return false;
    }

    return true;
  };

btnEnviar.addEventListener("click", validation);