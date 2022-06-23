import '../css/init.css';
import '../css/variables.css';
import '../css/style.css';

const pageHight = document.querySelector('.page').clientHeight;
const triggerSize = pageHight - 5;
const pageIndicator = document.getElementsByClassName('index-icon');
const indicatorSection = document.querySelector('.index-section');

let startPoint = 0;

const handleScroll = currentScrollY => {
  const destination =
    parseInt(currentScrollY / triggerSize) % pageIndicator.length;
  handleIndicator(destination);
  return;
};

const handleClick = dataset => {
  if (!dataset) {
    return;
  }
  const clickedIndex = dataset - 1;
  if (clickedIndex !== startPoint) {
    window.scroll({ top: pageHight * clickedIndex, behavior: 'smooth' });
    handleIndicator(clickedIndex);
    return;
  }
  return;
};

const handleIndicator = destination => {
  if (startPoint !== destination) {
    pageIndicator[startPoint].classList.remove('active');
    pageIndicator[destination].classList.add('active');
    startPoint = destination;
    return;
  }
  return;
};

window.addEventListener('wheel', () => handleScroll(window.scrollY));
indicatorSection.addEventListener('click', event =>
  handleClick(Number(event.target.dataset['index'])),
);
