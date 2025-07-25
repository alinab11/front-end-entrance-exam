const editableElements = document.querySelectorAll('[contenteditable]');
editableElements.forEach(el => {
  const key = el.id;
  const saved = localStorage.getItem(key);
  if (saved) el.textContent = saved;
  el.addEventListener('input', () => {
    localStorage.setItem(key, el.textContent);
  });
});

const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', () => {
  const element = document.getElementById('resume');
  html2pdf().from(element).save("resume.pdf");
});

function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add("ripple-effect");
  const ripple = button.querySelector(".ripple-effect");
  if (ripple) ripple.remove();
  button.appendChild(circle);
}
downloadBtn.addEventListener("click", createRipple);
