window.addEventListener('load', () => {

  const heading  = document.getElementById('headline');
  const burger = document.getElementById('menu');
  const gallery = document.getElementById('navGallery');
  const subway = document.getElementById('navSubway');
  const taxi = document.getElementById('navTaxi');
  const times = document.getElementById('navTimes');
  const contact = document.getElementById('navContact');
  const about = document.getElementById('navAbout');
  const footer = document.getElementById('timesFooter');
  const instagram = document.getElementById('timesIG');
  const twitter = document.getElementById('timesTW');
  const youtube = document.getElementById('timesYT');
  let hoverColor;

  if (!sessionStorage.getItem('hoverColor')) {
    sessionStorage.setItem('hoverColor', '#d50000');
  } else {
    hoverColor = sessionStorage.getItem('hoverColor');
  }

  heading.addEventListener('mouseover', () => {
    heading.style.color = hoverColor;
  });

  heading.addEventListener('mouseout', () => {
    heading.style.color = 'black';
  });

  // Burger
  burger.addEventListener('mouseover', () => {
    burger.style.color = hoverColor;
  });

  burger.addEventListener('mouseout', () => {
    burger.style.color = 'black';
  });

  // Gallery
  gallery.addEventListener('mouseover', () => {
    gallery.style.color = hoverColor;
  });

  gallery.addEventListener('mouseout', () => {
    gallery.style.color = 'black';
  });

  // Subway
  subway.addEventListener('mouseover', () => {
    subway.style.color = hoverColor;
  });

  subway.addEventListener('mouseout', () => {
    subway.style.color = 'black';
  });

  // Taxi
  taxi.addEventListener('mouseover', () => {
    taxi.style.color = hoverColor;
  });

  taxi.addEventListener('mouseout', () => {
    taxi.style.color = 'black';
  });

  // Times
  times.addEventListener('mouseover', () => {
    times.style.color = hoverColor;
  });

  times.addEventListener('mouseout', () => {
    times.style.color = 'black';
  });

  // Contact
  contact.addEventListener('mouseover', () => {
    contact.style.color = hoverColor;
  });

  contact.addEventListener('mouseout', () => {
    contact.style.color = 'black';
  });

  // About
  about.addEventListener('mouseover', () => {
    about.style.color = hoverColor;
  });

  about.addEventListener('mouseout', () => {
    about.style.color = 'black';
  });

  // Times footer
  footer.addEventListener('mouseover', () => {
    footer.style.color = hoverColor;
  });

  footer.addEventListener('mouseout', () => {
    footer.style.color = 'black';
  });

  // Instagram
  instagram.addEventListener('mouseover', () => {
    instagram.style.color = hoverColor;
  });

  instagram.addEventListener('mouseout', () => {
    instagram.style.color = 'black';
  });

  // Twitter
  twitter.addEventListener('mouseover', () => {
    twitter.style.color = hoverColor;
  });

  twitter.addEventListener('mouseout', () => {
    twitter.style.color = 'black';
  });

  // Youtube
  youtube.addEventListener('mouseover', () => {
    youtube.style.color = hoverColor;
  });

  youtube.addEventListener('mouseout', () => {
    youtube.style.color = 'black';
  });

  const colors = ['#8904B1', 'blue', 'orange', 'yellow', 'green', '#d50000'];

  for (let i = 0; i < colors.length; i++) {

    let contentWrapper = document.getElementById('colorPanelWrapper');
    let newColor = document.createElement('div');

    let colorBox = document.createElement('div');

    let eintragData = [colors[i]];
    let outputArr = [colorBox];

    for (let i = 0; i < outputArr.length; i++) {
        outputArr[i].addEventListener('click', () => {

          sessionStorage.setItem('hoverColor', eintragData[i]);

          // Heading
          heading.addEventListener('mouseover', () => {
            heading.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          heading.addEventListener('mouseout', () => {
            heading.style.color = 'black';
          });

          // Burger
          burger.addEventListener('mouseover', () => {
            burger.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          burger.addEventListener('mouseout', () => {
            burger.style.color = 'black';
          });

          // Arrow
          arrow.addEventListener('mouseover', () => {
            arrow.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          arrow.addEventListener('mouseout', () => {
            arrow.style.color = 'black';
          });

          // Gallery
          gallery.addEventListener('mouseover', () => {
            gallery.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          gallery.addEventListener('mouseout', () => {
            gallery.style.color = 'black';
          });

          // Subway
          subway.addEventListener('mouseover', () => {
            subway.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          subway.addEventListener('mouseout', () => {
            subway.style.color = 'black';
          });

          // Taxi
          taxi.addEventListener('mouseover', () => {
            taxi.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          taxi.addEventListener('mouseout', () => {
            taxi.style.color = 'black';
          });

          // Times
          times.addEventListener('mouseover', () => {
            times.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          times.addEventListener('mouseout', () => {
            times.style.color = 'black';
          });

          // Contact
          contact.addEventListener('mouseover', () => {
            contact.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          contact.addEventListener('mouseout', () => {
            contact.style.color = 'black';
          });

          // About
          about.addEventListener('mouseover', () => {
            about.style.color = eintragData[i];
            sessionStorage.setItem('hoverColor', eintragData[i]);
          });

          about.addEventListener('mouseout', () => {
            about.style.color = 'black';
          });

        });
        outputArr[i].style.backgroundColor = eintragData[i];
        newColor.appendChild(outputArr[i]);
    }
    contentWrapper.appendChild(newColor);
  }

});
