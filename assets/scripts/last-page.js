document.addEventListener("DOMContentLoaded", function () {
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
  const button = document.querySelector(".hover-button");
  const textform = document.getElementById("textform");
  button.addEventListener("click", function () {
    if (textform.value === "") {
      alert("fill the text field");
    } else {
      alert("Feedback sent!");
    }
  });
});
