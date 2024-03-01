document.addEventListener('DOMContentLoaded', () => {
  const yesButton = document.querySelector('.yes-button');
  const noButton = document.querySelector('.no-button');
  const congrats = document.querySelector('.congrats');
  const container = document.querySelector('.container');
  const backgroundVideoFireworks = document.getElementById('background-video-fireworks');
  const backgroundMusic = document.getElementById('background-music');

  let hiddenElements = [];

  noButton.addEventListener('click', () => {
    // Сохраняем все элементы, которые нужно спрятать
    hiddenElements = Array.from(document.querySelectorAll('.container h1, .buttons-container'));
    hiddenElements.forEach(el => el.style.display = 'none');

    // Показываем текст "Эм..."
    const hesitationText = document.createElement('p');
    hesitationText.textContent = 'Эм...';
    hesitationText.style.fontSize = '3rem';
    hesitationText.style.marginTop = '30px';
    container.appendChild(hesitationText);

    setTimeout(() => {
      // Удаляем текст "Эм..."
      hesitationText.remove();

      // Показываем текст "Ну давай по другому)"
      const newText = document.createElement('p');
      newText.textContent = 'Ну давай по-другому)';
      newText.style.fontSize = '3rem';
      newText.style.marginTop = '30px';
      container.appendChild(newText);

      setTimeout(() => {
        // Удаляем текст "Ну давай по другому)"
        newText.remove();

        // Возвращаем все элементы обратно
        hiddenElements.forEach(el => el.style.display = 'flex');

        // Скрываем кнопку "Нет"
        noButton.style.display = 'none';
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
});
