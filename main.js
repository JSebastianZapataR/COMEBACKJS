const rules = document.querySelectorAll('.rule');
const paragraphs = document.querySelectorAll('.paragraph');

for (let i = 0; i < rules.length; i++) {
  rules[i].addEventListener('mouseover', () => {
    paragraphs[i].classList.add('show');
  });

  rules[i].addEventListener('mouseout', () => {
    paragraphs[i].classList.remove('show');
  });
}

//this will continue