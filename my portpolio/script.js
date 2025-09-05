function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  // Show selected section with animation
  const section = document.getElementById(sectionId);
  section.classList.add("active");
}
