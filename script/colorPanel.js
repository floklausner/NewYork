window.addEventListener('load', () => {

  const colors = ['yellow', 'blue', 'green', '#8904B1', 'orange', '#d50000'];

  for (let i = 0; i < colors.length; i++) {

    let contentWrapper = document.getElementById('colorPanelWrapper');
    let newColor = document.createElement('div');

    let colorBox = document.createElement('div');

    let eintragData = [colors[i]];
    let outputArr = [colorBox];

    for (let i = 0; i < outputArr.length; i++) {
        outputArr[i].addEventListener('click', () => {
          const heading  = document.getElementById('headline');
          const burger = document.getElementById('menu');
          const arrow = document.getElementById('arrowDown');

          heading.addEventListener('mouseover', () => {
            heading.style.color = eintragData[i];
          });

          heading.addEventListener('mouseout', () => {
            heading.style.color = 'black';
          });

          burger.addEventListener('mouseover', () => {
            burger.style.color = eintragData[i];
          });

          burger.addEventListener('mouseout', () => {
            burger.style.color = 'black';
          });

          arrow.addEventListener('mouseover', () => {
            arrow.style.color = eintragData[i];
          });

          arrow.addEventListener('mouseout', () => {
            arrow.style.color = 'black';
          });

        });
        outputArr[i].style.backgroundColor = eintragData[i];
        newColor.appendChild(outputArr[i]);
    }
    contentWrapper.appendChild(newColor);
  }
});
