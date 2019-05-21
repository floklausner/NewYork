window.addEventListener('load', () => {
    const navbar = document.getElementById('navbar');
    let visible = false;

    document.getElementById('menu').addEventListener('click', () => {
      if (visible) {
        navbar.style.left = '-14vw';
        visible = false;
      } else {
        navbar.style.left = '0vw';
        visible = true;
      }
    });
});
