import '../css/init.css';
import '../css/variables.css';
import '../css/style.css';

const pageHight = document.querySelector('.page').clientHeight;
const triggerSize = pageHight - 5;
const pageIndicator = document.getElementsByClassName('index-icon');
const indicatorSection = document.querySelector('.index-section');
const logoSection = document.querySelector('.logo-section');
const checklist = document.querySelector('.checklist');

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

const handleLogo = () => {
  const clickme = document.querySelector('.clickme');
  const smiles = document.querySelector('.smile-section');
  const r = logoSection.querySelector("[data-text='r']");
  const l = logoSection.querySelector("[data-text='l']");
  smiles.classList.replace('hidden', 'appear');
  r.classList.add('hidden');
  clickme.classList.add('hidden');
  l.classList.replace('hidden', 'appear');
};

const handleChecklist = target => {
  const icon = target.closest('.checklist-item').querySelector('.check-icon');
  icon.classList.add('checked');
};

window.addEventListener('wheel', () => handleScroll(window.scrollY));
indicatorSection.addEventListener('click', event =>
  handleClick(Number(event.target.dataset['index'])),
);
logoSection.addEventListener('click', handleLogo);
checklist.addEventListener('click', e => handleChecklist(e.target));
