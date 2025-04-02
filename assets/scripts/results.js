/*document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star-off");

  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", function () {
      if (stars[i].src.includes("star-off.png")) {
        stars[i].src = "assets/star-on.svg";
      } else {
        stars[i].src = "assets/star-off.png";
      }
    });
  }
});*/

/*document.addEventListener("DOMContentLoaded", function () {
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
});*/

/*document.addEventListener("DOMContentLoaded", function () {
  const starOff = document.querySelectorAll(".star-off");
  starOff.forEach((star, index) => {
    star.addEventListener("click", function () {
      for (let i = 0; i < starOff.length; i++) {
        if (i <= index) {
          starOff[i].src = "assets/star-on.svg";
        } else {
          starOff[i].src = "assets/star-off.png";
        }
      }
    });
  });
});
*/
