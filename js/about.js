// function classToggle() {
//   const nav = document.querySelectorAll(".nav-items");
//   navs.forEach(nav => nav.classList.toggle('navbar__ToggleShow'));
// }

// document.querySelector('.nav-icon')
//   .addEventListener('click', classToggle);

  const navIcon = document.getElementsByClassName("nav-icon")[0];
const navItems = document.getElementsByClassName("nav-items")[0];
navIcon.addEventListener("click", () =>{
  navItems.classList.toggle("active")
})


