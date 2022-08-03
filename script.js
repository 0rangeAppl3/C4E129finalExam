const search = () => {
  const name = document.querySelector("#name-input").value;
  document.querySelectorAll(".card-name").forEach((cardName) => {
    if (cardName.innerHTML.indexOf(name) === -1) {
      cardName.parentNode.parentNode.classList.add("hidden");
    } else {
      cardName.parentNode.parentNode.classList.remove("hidden");
    }
  });
};
