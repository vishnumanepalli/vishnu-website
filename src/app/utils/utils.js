export const handleSmoothScroll = (targetId) => (e) => {
  e.preventDefault(); // Prevent default anchor click behavior
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const offset = 60; // Adjust according to your navbar height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth", // For smooth scrolling
    });
  }
};

