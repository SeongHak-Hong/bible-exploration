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
      else if (event.target.id == 'notice-btn') // 안내문 버튼 클릭시
        window.scrollTo({left: 0, top: (getBodyHeight / 5) * 1, behavior: 'smooth'});
      else if (event.target.id == 'ani-btn') //애니메이션 버튼 클릭시
        window.scrollTo({left: 0, top: (getBodyHeight / 5) * 2, behavior: 'smooth'});
      else if (event.target.id == 'letter-btn') //초대장 버튼 클릭시
        window.scrollTo({left: 0, top: (getBodyHeight / 5) * 3, behavior: 'smooth'});
      else if (event.target.id == 'contact-btn') //문의 버튼 클릭시
        window.scrollTo({left: 0, top: getBodyHeight, behavior: 'smooth'});
    });
  }
})

