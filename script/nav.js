document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = document.querySelector('#navBurger')
  if ($navbarBurgers) {
    $navbarBurgers.addEventListener('click', () => {
        const target = $navbarBurgers.dataset.target;
        const $target = document.getElementById(target);
        $navbarBurgers.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
  }
});