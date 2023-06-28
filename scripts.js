//Skills images effect
const imgSkills = document.getElementsByClassName("img-skill");
const arrayImg = Array.from(imgSkills);
arrayImg.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    const positionImg = arrayImg.indexOf(img);
    arrayImg.forEach((img) => {
      img.setAttribute(
        "style",
        "filter: blur(2px) grayscale(0.8); transform: scale(0.75); transition: all .3s ease-in-out;"
      );
    });
    arrayImg[positionImg].setAttribute(
      "style",
      "transform: scale(1.2) contrast(1.1); transform: translateY(-5px); transition: all .3s ease-in-out"
    );
  });

  img.addEventListener("mouseleave", () => {
    arrayImg.forEach((img) => {
      img.setAttribute("style", "transition: all .3s ease-in-out");
    });
  });
});

//Navbar responsive
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.className = isOpen ? "fa fa-xing" : "fa fa-bars";
};
//Scroll redirection
const redirectSkills = () => {
  const skillsElement = document.querySelector(".button-warning");
  skillsElement.scrollIntoView({ behavior: "smooth" });
};
const redirectHome = () => {
  const homeElement = document.querySelector("main");
  homeElement.scrollIntoView({ behavior: "smooth" });
};
const redirectAbout = () => {
  const homeElement = document.querySelector(".about-title");
  homeElement.scrollIntoView({ behavior: "smooth" });
};
const redirectProjects = () => {
  const projectElement = document.querySelector(".projects-title");
  projectElement.scrollIntoView({ behavior: "smooth" });
};
const redirectContact = () => {
  const aboutElement = document.querySelector("form");
  aboutElement.scrollIntoView({ behavior: "smooth" });
};
