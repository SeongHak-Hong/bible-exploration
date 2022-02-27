// *** 열어보기 버튼 클릭시 편지지 팝업
const more = document.querySelector('#more-btn p');
const letter2 = document.querySelector('#letter2 img');
const letterPaper = document.querySelector('#letter-paper');
const letterText = document.querySelector('#letter-text');
const closeBtn = document.querySelector('#close-btn');
const firework = document.querySelector('.pyro');

letterText.style.display = "block";
letterPaper.style.display = "none";
letterPaper.style.opacity = 0;
// letterPaper.style.transition = .3 +"s";
letterText.style.zIndex = 1;

letter2.classList.add('letter2-ani');

more.addEventListener('click', function(){
  if (letterPaper.style.display == "none") {
    letter2.classList.remove('letter2-ani');
    letter2.classList.add('letter2-open');
    const letterNone = setTimeout(() => {
      letterPaper.style.display = "block";
      letterPaper.style.opacity = 1;
      letterText.style.zIndex = -1;
      firework.style.display = 'block';
    }, 800);
    
  }
});
closeBtn.addEventListener('click', function(){
  letterPaper.style.display = "none";
  letterPaper.style.opacity = 0;
  letterText.style.zIndex = 1;
  letter2.classList.add('letter2-ani');
  letter2.classList.remove('letter2-open');
  firework.style.display = 'none';
});