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

  window.addEventListener('mousemove', (event) => {
    let centerX = innerWidth / 2 - (innerHeight / 100) * 27;
    let centerY = innerHeight / 2 + (innerHeight / 100) * 16.8;

    line.clearRect(0, 0, canvas.width, canvas.height);
    line.beginPath();
    line.moveTo(centerX, centerY);
    line.lineTo(event.clientX, event.clientY);
    line.strokeStyle = '#c69143';
    line.stroke();

    if (event.clientX < centerX + 10 &&
        event.clientX > centerX - 10 &&
        event.clientY < centerY + 10 &&
        event.clientY > centerY - 10) {
          document.getElementsByClassName('taxiPage')[0].style.cursor = 'pointer';
        } else {
          document.getElementsByClassName('taxiPage')[0].style.cursor = 'default';
        }
  });

  window.addEventListener('click', (event) => {
    let centerX = innerWidth / 2 - (innerHeight / 100) * 27;
    let centerY = innerHeight / 2 + (innerHeight / 100) * 16.8;

    if (event.clientX < centerX + 10 &&
        event.clientX > centerX - 10 &&
        event.clientY < centerY + 10 &&
        event.clientY > centerY - 10) {
          setTimeout(() => {
            document.getElementById('circle').style.transform = 'scale(1.5, 1.5)';
            window.open('../pages/taxiHistory.html', '_self');
          }, 500);
        }
  });

  window.addEventListener('resize', () => {
    let canvas = document.getElementById('canvas');

    canvas.width = innerWidth;
    canvas.height = innerHeight;
  });
});
