window.addEventListener('DOMContentLoaded', (e: Event) => {
  const node = document.querySelector('.js-datetime') as HTMLElement;
  setInterval(() => node.innerHTML = new Date().toString(), 1000);
});
