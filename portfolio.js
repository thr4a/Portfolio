const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const sections = document.querySelectorAll('section');

function showSection(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function navigate(direction) {
  if (direction === 'next') {
    currentIndex++;
    if (currentIndex >= sections.length) {
      currentIndex = 0;
    }
  } else if (direction === 'prev') {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = sections.length - 1;
    }
  }

  showSection(currentIndex);
}

prevBtn.addEventListener('click', () => navigate('prev'));
nextBtn.addEventListener('click', () => navigate('next'));

showSection(currentIndex);
