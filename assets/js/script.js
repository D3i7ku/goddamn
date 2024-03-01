document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    const congrats = document.querySelector('.congrats');
    const container = document.querySelector('.container');
    const backgroundVideoFireworks = document.getElementById('background-video-fireworks');
    const backgroundMusic = document.getElementById('background-music'); // Добавьте эту строку
  
    // функция рандом
    const random = (min, max) => {
      const rand = min + Math.random() * (max - min + 1);
      return Math.floor(rand);
    };
  
    // повесим обработчик событий
    noButton.addEventListener('mouseenter', () => {
      const containerRect = container.getBoundingClientRect();
      let newLeft, newTop;
      do {
        newLeft = random(40, containerRect.width - noButton.clientWidth - 100);
        newTop = random(40, containerRect.height - noButton.clientHeight - 400);
      } while (distanceBetweenPoints({x: newLeft, y: newTop}, getMousePosition()) < 80);
  
      noButton.style.left = `${newLeft}px`;
      noButton.style.top = `${newTop}px`;
    });
  
    noButton.style.position = 'absolute';
    noButton.style.zIndex = '1';
  
    yesButton.addEventListener('click', () => {
      yesButton.style.animation = 'spin-and-explode 1s ease-out forwards';
      setTimeout(() => {
        yesButton.remove();
        noButton.remove();
        container.querySelector('h1').remove();
        backgroundVideoFireworks.style.display = 'block';
  
        // Установить громкость на 50%
        backgroundMusic.volume = 0.2;
  
        // Добавить задержку в 3 секунды перед воспроизведением музыки
        setTimeout(() => {
          backgroundMusic.play();
        }, 2000);
  
        setTimeout(() => {
          congrats.classList.remove('hidden');
        }, 1000);
      }, 1000);
    });
  
    // функция для расчета расстояния между двумя точками
    const distanceBetweenPoints = (point1, point2) => {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    };
  
    // функция для получения текущей позиции курсора
    const getMousePosition = () => {
      const event = new MouseEvent('mousemove', {
        clientX: 0,
        clientY: 0,
      });
      document.dispatchEvent(event);
      return {
        x: event.clientX,
        y: event.clientY,
      };
    };
  });
  