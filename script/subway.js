window.addEventListener('load', () => {

  const picture = document.getElementById('subwayPic');
  const text = document.getElementById('subwayText');

  picture.addEventListener('mouseover', () => {
    picture.style.display = 'none';
    text.style.display = 'inline';
  });

  picture.addEventListener('mouseout', () => {
    text.style.display = 'none';
  });

});
