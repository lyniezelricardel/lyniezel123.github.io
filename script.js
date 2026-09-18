// Navbar dropdown implemented with Vanilla JavaScript only.
const dropdownButton = document.querySelector("#dropdownBtn");
const dropdownMenu = document.querySelector("#dropdownMenu");
const dropdownArrow = document.querySelector("#dropdownArrow");

if (dropdownButton && dropdownMenu) {
  const closeDropdown = function () {
    dropdownMenu.classList.remove("show");
    dropdownButton.setAttribute("aria-expanded", "false");
    if (dropdownArrow) dropdownArrow.textContent = "▼";
  };

  dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation();

    // Required DOM activity behavior: toggle a CSS class on each click.
    const isOpen = dropdownMenu.classList.toggle("show");
    dropdownButton.setAttribute("aria-expanded", String(isOpen));

    // Bonus: change the arrow indicator while the menu is open.
    if (dropdownArrow) dropdownArrow.textContent = isOpen ? "▲" : "▼";
  });

  // Bonus: close the dropdown when the user clicks outside it.
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) closeDropdown();
  });

  // Close after selecting a dropdown link.
  dropdownMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeDropdown);
  });

  // Keyboard-friendly close behavior.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeDropdown();
      dropdownButton.focus();
    }
  });
}
