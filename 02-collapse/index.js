/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */

const visible = document.querySelector('.collapsible__action--visible');
const hidden = document.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

visible.style.display = 'none';
content.style.display = 'none';

let options = {
  duration: 700,
  fill: 'forwards',
  easing: 'ease-in-out',
}

let keyframesDown = [
  {
    transform: 'translateY(0)',
    opacity: 0
  },
  {
    transform: 'translateY(50%)',
    opacity: 1
  }
]

let keyframesUp = [
  {
    transform: 'translateY(50%)',
    opacity: 1
  }, {

    transform: 'translateY(0)',
    opacity: 0
  },

]

visible.addEventListener('click', () => {
  content.animate(keyframesUp, options);
  hidden.style.display = 'block';
  visible.style.display = 'none';
 
});

hidden.addEventListener('click', () => {
  content.animate(keyframesDown, options);
  content.style.display = 'block';
  hidden.style.display = 'none';
  visible.style.display = 'block';
  
});
