const button = document.querySelector('.btn-danger');

export default function showPopover() {
  const popover = document.querySelector('.popover');
  const arrowPopover = document.querySelector('.arrow');
  popover.classList.toggle('hidden');

  if (popover.classList.contains('hidden')) return;

  popover.style.top = `${window.scrollY + button.getBoundingClientRect().top - popover.offsetHeight - arrowPopover.offsetHeight}px`;
  popover.style.left = `${window.scrollX + button.getBoundingClientRect().left - (popover.offsetWidth / 2 - button.offsetWidth / 2)}px`;
}

button.addEventListener('click', showPopover);
