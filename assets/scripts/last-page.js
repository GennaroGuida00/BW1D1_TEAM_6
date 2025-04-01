document.addEventListener("DOMContentLoaded", function () {
  //const starOn = document.querySelectorAll(".star-on");
  const starOff = document.querySelectorAll(".star-off img");

  console.log(starOff);

  starOff.forEach((star) => {
    star.addEventListener("click", function () {
      star = document.createElement(".star-on");
      console.log(star);
    });
    //starOn.forEach((star) => {});
  });
});
