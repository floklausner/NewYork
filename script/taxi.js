window.addEventListener('load', () => {
  let navbar = document.getElementById('navbar');
  let maxHeight = navbar.clientHeight;

  navbar.style.display = 'none';

  document.getElementById('menu').addEventListener('click', () => {
    if (navbar.style.display === 'none') {
        navbar.style.display = 'block';
   } else {
     navbar.style.display = 'none';
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
