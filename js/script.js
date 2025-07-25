const editableElements = document.querySelectorAll('[contenteditable]');
editableElements.forEach(el => {
  const key = el.id;
  const saved = localStorage.getItem(key);
  if (saved) el.textContent = saved;
  el.addEventListener('input', () => {
    localStorage.setItem(key, el.textContent);
  });
});

function downloadPDF() {
  const element = document.body;
  html2pdf().from(element).save('resume.pdf');
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.textContent = 'Скачать PDF';
  btn.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:10px;background:#007acc;color:white;border:none;border-radius:4px;cursor:pointer;';
  btn.onclick = downloadPDF;
  document.body.appendChild(btn);
});
