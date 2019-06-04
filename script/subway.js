window.addEventListener('load', () => {

  const picture = document.getElementById('subwayPic');
  const text = document.getElementById('subwayText');
  const map = document.getElementById('map');

  map.addEventListener('mouseover', () => {
    picture.style.opacity = '0';
    text.style.opacity = '1';
    text.style.display = 'inline';
  });

  map.addEventListener('mouseout', () => {
    picture.style.display = 'inline';
    text.style.opacity = '0';
    picture.style.opacity = '1';
  });

});
