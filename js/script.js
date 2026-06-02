document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");

  if(form){

    form.addEventListener("submit", () => {

      const button = form.querySelector("button");

      button.innerText = "Enviando...";

      button.disabled = true;

    });

  }

});
