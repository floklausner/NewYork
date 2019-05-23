window.addEventListener('load', () => {

  const colors = ['yellow', 'blue', 'green', 'violet', 'orange', '#d50000'];

  for (let i = 0; i < colors.length; i++) {

    let contentWrapper = document.getElementById('colorPanelWrapper');
    let newColor = document.createElement('div');

    let colorBox = document.createElement('div');

    let eintragData = [colors[i]];
    let outputArr = [colorBox];

    for (let i = 0; i < outputArr.length; i++) {
      setTimeout(() => {
        outputArr[i].addEventListener('click', () => {
          const heading  = document.getElementById('headline');
          // const burger = document.getElementById('menuBurger');
          const burger = document.getElementsByClassName('title')[0].firstElementChild.firstElementChild;
          const arrow = document.getElementById('arrowDown');

          const elements = [heading, burger];

          heading.addEventListener('mouseover', () => {
            for (let i = 0; i < elements.length; i++) {
              elements[i].style.color = eintragData[i];
            }
            heading.style.color = eintragData[i];
            burger.style.color = eintragData[i];
          });

          heading.addEventListener('mouseout', () => {
            for (let i = 0; i < elements.length; i++) {
              elements[i].style.color = 'black';
            }
            heading.style.color = 'black';
            burger.style.color = 'black';
          });
        });
        outputArr[i].style.backgroundColor = eintragData[i];
        newColor.appendChild(outputArr[i]);
      }, 250);
    }
    contentWrapper.appendChild(newColor);
  }
});
