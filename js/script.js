const collapsibleIcons = document.querySelectorAll(".collapsible__icon");

collapsibleIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const collapsible = icon.closest(".collapsible");
    collapsible.classList.toggle("collapsible--expanded");
  });
});
