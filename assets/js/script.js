document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    const congrats = document.querySelector('.congrats');
    const container = document.querySelector('.container');
    const backgroundVideoFireworks = document.getElementById('background-video-fireworks');
    const backgroundMusic = document.getElementById('background-music');
    const copyButton = document.querySelector('.copy-button');
    const steamKey = 'IK20Z-7VDL5-HMJ8T';
  
    let hiddenElements = [];
  
    noButton.addEventListener('click', () => {
      hiddenElements = Array.from(document.querySelectorAll('.container h1, .buttons-container'));
      hiddenElements.forEach(el => el.style.display = 'none');
  
      yesButton.style.display = 'none';
      noButton.style.display = 'none';
  
      const hesitationText = document.createElement('p');
      hesitationText.textContent = 'Эм...';
      hesitationText.style.fontSize = '3rem';
      hesitationText.style.marginTop = '30px';
      container.appendChild(hesitationText);
  
      setTimeout(() => {
        hesitationText.remove();
  
        const newText = document.createElement('p');
        newText.textContent = 'Ну давай по-другому)';
        newText.style.fontSize = '3rem';
        newText.style.marginTop = '30px';
        container.appendChild(newText);
  
        setTimeout(() => {
          newText.remove();
  
          hiddenElements.forEach(el => {
            if (el !== noButton) {
              el.style.display = 'flex';
            }
          });
  
          yesButton.style.display = 'flex';
        }, 3000);
      }, 3000);
    });
  
    yesButton.addEventListener('click', () => {
      yesButton.style.animation = 'spin-and-explode 1s ease-out forwards';
      setTimeout(() => {
        yesButton.remove();
        noButton.remove();
        container.querySelector('h1').remove();
        backgroundVideoFireworks.style.display = 'block';
  
        backgroundMusic.volume = 0.2;
  
        setTimeout(() => {
          backgroundMusic.play();
        }, 2000);
  
        setTimeout(() => {
          congrats.classList.remove('hidden');
          copyButton.classList.remove('hidden');
          copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(steamKey)
              .then(() => {
                alert('Ключ Steam скопирован в буфер обмена!');
              })
              .catch((err) => {
                console.error('Ошибка при копировании текста: ', err);
              });
          });
        }, 1000);
      }, 1000);
    });
  });
  