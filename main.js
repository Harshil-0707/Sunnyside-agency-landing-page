const links = document.getElementById("links");
const hamburger = document.getElementById("hamburger");

hamburger.onclick = () => {
  console.log(hamburger);
  links.classList.toggle("active");
};
