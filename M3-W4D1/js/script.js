const sections = document.querySelectorAll(".animation-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    rootMargin: "-200px",
  },
);

sections.forEach((section) => observer.observe(section));

const menuDropdown = document.getElementById("menu-dropdown");
menuDropdown.addEventListener("click", () => {
  menuDropdown.classList.toggle("active");
});