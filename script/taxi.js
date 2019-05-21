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

  let canvas = document.getElementById('canvas');
  let line = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  document.getElementById('taxi').addEventListener('click', () => {
    document.getElementById('circle').style.transform = 'scale(1.5, 1.5)';

    setTimeout(() => {
      window.open('../pages/taxiHistory.html', '_self');
    }, 500);
  });

  window.addEventListener('mousemove', (event) => {
    line.clearRect(0, 0, canvas.width, canvas.height);
    line.beginPath();
    line.moveTo(innerWidth / 2 - (innerHeight / 100) * 21.5, innerHeight / 2 + (innerHeight / 100) * 16.8);
    line.lineTo(event.clientX, event.clientY);
    line.strokeStyle = '#c69143';
    line.stroke();
  });

  window.addEventListener('resize', () => {
    let canvas = document.getElementById('canvas');

    canvas.width = innerWidth;
    canvas.height = innerHeight;
  });
});
