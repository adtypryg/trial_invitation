const welcomePage = document.querySelector('.welcome-page');
const textPage1 = document.querySelector('section.page-1')
const textPage2 = document.querySelector('section.page-2')

welcomePage.addEventListener('click', e => {
  console.log(e.target);
  if (e.target.className === 'buka-undangan'){
    welcomePage.classList.add('opened');
    textPage1.children[0].classList.add('opened');
    textPage1.children[1].classList.add('opened');
  };
});

window.addEventListener('scroll', function(){
  console.log(visualViewport.height);
  if (window.scrollY > 0.7*visualViewport.height){
    textPage2.children[0].classList.add('opened');
    textPage2.children[1].classList.add('opened');
  }
});