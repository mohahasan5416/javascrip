// Toggle sidebar on smaller screens
const toggleSidebar = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Close sidebar when clicking outside of it
document.addEventListener("click", (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickInsideToggleBtn = toggleSidebar.contains(event.target);

  if (!isClickInsideSidebar && !isClickInsideToggleBtn) {
    sidebar.classList.remove("active");
  }
});