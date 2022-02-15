const body = document.querySelector('body');
const menuLi = document.querySelectorAll('#menu div');
const sec = document.querySelectorAll('section');
const getSectionHeight = sec[0].offsetHeight;
console.log(getSectionHeight);
console.dir(menuLi[0]);

// ***메뉴버튼 클릭시 해당 섹션으로 이동
for (i = 0; i < menuLi.length; i++) {
  menuLi[i].addEventListener('click', function(event) {
    if (event.target.id == 'home-btn') // 홈버튼 클릭시
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    else if (event.target.id == 'notice-btn') // 안내문버튼 클릭시
      window.scrollTo({left: 0, top: getSectionHeight, behavior: 'smooth'});
    else if (event.target.id == 'ani-btn') //애니메이션버튼 클릭시
      window.scrollTo({left: 0, top: getSectionHeight * 2, behavior: 'smooth'});
    else if (event.target.id == 'invite-btn') //초대장버튼 클릭시
      window.scrollTo({left: 0, top: getSectionHeight * 3, behavior: 'smooth'});
  });
    
  
  // *** 휠제어
  let order = 0;

  body.addEventListener('wheel', function (event) {
    // 휠 기본기능 막기
    event.preventDefault();
    // li의 높이값
    console.log(event.target);
    let getHeight = sec[0].offsetHeight;
    console.log(getHeight);
    // event.deltaY값이 0 이상
    if(event.deltaY > order) {
      // order값이 li의 길이보다 작을 때
      if(order < sec.length) {
        order++;
        console.log(order);
        console.log('scroll down');
        body.scrollTo({
          top:getHeight * order,
          behavior : "smooth", 
        });
      } else {
        console.log("lastElement");
      }
    } else {
      if(order > 0) {
        order--;
        console.log(order);
        console.log('scroll up');
        body.scrollTo({
          top:getHeight * order,
          behavior : "smooth"
        });
      } else {
        console.log("firstElement");
      }
      console.log('scroll up');
    }
  })
};