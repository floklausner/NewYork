window.addEventListener('load', () => {

  const picture = document.getElementById('subwayPic');
  const text = document.getElementById('subwayText');
  const map = document.getElementById('map');

  map.addEventListener('mouseover', () => {
    picture.style.display = 'none';
    text.style.display = 'inline';
  });

  map.addEventListener('mouseout', () => {
    picture.style.display = 'inline';
    text.style.display = 'none';
  });

});
