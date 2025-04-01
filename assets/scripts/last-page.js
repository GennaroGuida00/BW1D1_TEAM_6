document.addEventListener("DOMContentLoaded", function () {
  // Seleziona tutti gli elementi con la classe "star-off"
  const starOff = document.querySelectorAll(".star-off");

  // Controlla che la selezione abbia funzionato
  console.log(starOff);

  starOff.forEach((star, index) => {
    star.addEventListener("click", function () {
      for (let i = 0; i <= index; i++) {
        starOff[i].src = "assets/star-on.svg";
      }
    });
  });
});
