const body = document.querySelector('body');
const menuLi = document.querySelectorAll('#menu div');
const sec = document.querySelectorAll('section');
const getSectionHeight = sec[0].offsetHeight;
// console.log(getSectionHeight);
// console.dir(menuLi[0]);

// ***메뉴버튼 클릭시 해당 섹션으로 이동
// for (i = 0; i < menuLi.length; i++) {
//   menuLi[i].addEventListener('click', function(event) {
//     if (event.target.id == 'home-btn') // 홈버튼 클릭시
//       window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
//     else if (event.target.id == 'notice-btn') // 안내문버튼 클릭시
//       window.scrollTo({left: 0, top: getSectionHeight, behavior: 'smooth'});
//     else if (event.target.id == 'ani-btn') //애니메이션버튼 클릭시
//       window.scrollTo({left: 0, top: getSectionHeight * 2, behavior: 'smooth'});
//     else if (event.target.id == 'invite-btn') //초대장버튼 클릭시
//       window.scrollTo({left: 0, top: getSectionHeight * 3, behavior: 'smooth'});
//   });



// 강사님 안녕하세요! 새 사이트 만들고 있는데요.
// 마우스휠 기본기능 막는 함수가 안 먹혀서 메일드려요. ㅜㅜ
// index.js 27번째줄입니다!!







// body.addEventListener('wheel', function (event) {
//   // 휠 기본기능 막기

//   // check point : 1
//   // 디버깅 결과 wheel 이벤트에 prevntDefalut(); 메서드 작동문제를 발견함
//   event.preventDefault();
//   // li의 높이값
//   console.log(event.target);
//   let getHeight = sec[0].offsetHeight;
//   console.log(getHeight);
//   // event.deltaY값이 0 이상
//   if(event.deltaY > order) {
//     // order값이 li의 길이보다 작을 때
//     if(order < sec.length) {
//       order++;
//       console.log(order);
//       console.log('scroll down');
//       body.scrollTo({
//         top:getHeight * order,
//         behavior : "smooth", 
//       });
//     } else {
//       console.log("lastElement");
//     }
//   } else {
//     if(order > 0) {
//       order--;
//       console.log(order);
//       console.log('scroll up');
//       body.scrollTo({
//         top:getHeight * order,
//         behavior : "smooth"
//       });
//     } else {
//       console.log("firstElement");
//     }
//     console.log('scroll up');
//   }
// })


// };


// *** 휠제어
let order = 0;
let bodyTotalHeight = body.offsetHeight;
// body의 최종 전체 높이값  === section 4개 높이값 전체와 같다는 점 착안
console.log(bodyTotalHeight / 4);
let currentHeightValue = 0;
// 저장용 변수 로 current(현재값) 이라는 관습적인 핸들러 변수 할당
console.log(sec.length);
window.addEventListener('wheel', function (event) {
  // event.preventDefalut(); <--  삭제 

  // 휠이 움직이는 방향에 따라 양수 혹은 음수의 150 값만 나오기 때문에 풀지 않아도 
  // 양수 음수 에 대한 기준 조건식으로 해결 가능

  // event.preventDefalut()를 해제하려는 경우 addEventListener 함수의 숨겨진(?) 옵션 파라미터를 설정해야 함
  
  // document.addEventListener('wheel', function(event) {
  //   console.log('scrolling');
  //   event.preventDefault();
  // }, { passive: false}); <-- 3번째 매개변수 자리는 option 자리이며 강의내에서 한번도 사용하지 않은 기능

  if (event.deltaY > 0) {
    // deltaY가 양수일때
    console.log(event.deltaY);
    console.log("wheel down");
    order++;

    if (order < sec.length) {
      currentHeightValue = currentHeightValue + (bodyTotalHeight / 4);
      // 현재값은 ->  현재값 + 자식높이값이다.
      console.log(currentHeightValue);
      this.scrollTo({
        top: currentHeightValue,
        behavior: 'smooth'
      });
    }
    console.log(order);

  } else {
    console.log(event.deltaY);
    console.log("wheel up");
    order--;
    if (order < sec.length) {
      currentHeightValue = currentHeightValue - (bodyTotalHeight / 4);
      console.log(currentHeightValue);
      this.scrollTo({
        top: currentHeightValue,
        behavior: 'smooth'
      });
    }
  }

});