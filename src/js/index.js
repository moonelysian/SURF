import '../css/init.css';
import '../css/variables.css';
import '../css/style.css';

const pageSize = document.querySelector('.page').clientHeight - 10;
const pageIndex = document.getElementsByClassName('index-icon');

let beforeScroll = 0;

const handlePageIndex = currentScrollY => {
  const afterScroll = parseInt(currentScrollY / pageSize);
  if (beforeScroll !== afterScroll) {
    pageIndex[beforeScroll].classList.remove('active');
    pageIndex[afterScroll].classList.add('active');
    beforeScroll = afterScroll;
  }
};

window.addEventListener('scroll', () => handlePageIndex(window.scrollY));
