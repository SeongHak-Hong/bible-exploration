window.addEventListener('DOMContentLoaded', function() {
	const body = document.querySelector('body');
  const menuLi = document.querySelectorAll('#menu div');
  const getBodyHeight = body.offsetHeight;
  console.log(getBodyHeight);
  // console.dir(menuLi[0]);

  // ***메뉴버튼 클릭시 해당 섹션으로 이동
  for (i = 0; i < menuLi.length; i++) {
    menuLi[i].addEventListener('click', function(event) {
      if (event.target.id == 'home-btn') // 홈 버튼 클릭시
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      else if (event.target.id == 'letter-btn') // 안내문 버튼 클릭시
        window.scrollTo({left: 0, top: (getBodyHeight / 5) * 1, behavior: 'smooth'});
      else if (event.target.id == 'ani-btn') //애니메이션 버튼 클릭시
        window.scrollTo({left: 0, top: (getBodyHeight / 5) * 2, behavior: 'smooth'});
      else if (event.target.id == 'notice-btn') //초대장 버튼 클릭시
        window.scrollTo({left: 0, top: (getBodyHeight / 5) * 3, behavior: 'smooth'});
      else if (event.target.id == 'contact-btn') //문의 버튼 클릭시
        window.scrollTo({left: 0, top: getBodyHeight, behavior: 'smooth'});
    });
  }

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
});



