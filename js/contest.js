// ***갤러리, 친구이름 li style 부여
const galleryLi = document.querySelectorAll('#gallery li');
const friends = document.querySelector('#friends');

for (i=0; i<galleryLi.length; i++) {
  galleryLi[i].style.display = "flex";
  galleryLi[i].style.justifyContent = "center";
  galleryLi[i].style.position = "absolute";
  galleryLi[0].style.opacity = "1";
  friends.children[0].style.fontWeight = "600";
}

// ***이름 누르면 해당 아이의 이름을 진하게 + 작품 나오게 하기

  friends.addEventListener('click', function(event) {
    console.log(event.target);
    // friends li의 fontWeight 값 300으로 설정
    for (i=0; i<friends.children.length; i++) {
      friends.children[i].style.fontWeight = "300";
    }
    // 이벤트타겟인 friends li의 데이터셋 값을 불러와서 이벤트타겟만 fontWeight 600으로 설정
    let getFriendsDataset = event.target.dataset.friends;
    friends.children[getFriendsDataset].style.fontWeight = "600";
    // gallery li의 opacity 0으로 설정
    for (i=0; i<galleryLi.length; i++) {
      galleryLi[i].style.opacity = "0";
    }
    // friends li의 데이터겟 값(gallery li의 dataset 순서와 동일)으로 해당하는 이미지의 opacity 1로 설정
    galleryLi[getFriendsDataset].style.opacity = "1";
  });


// ***투표하기 버튼 누르면 투표 모달 띄우기
const voteBtn1 = document.querySelector('#vote-btn1 p');
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('#modal-close');
// 버튼(투표하기) 클릭시 모달창 띄우기(pc)
voteBtn1.addEventListener('click', function(){
  modal.style.opacity = "1";
  modal.style.zIndex = "1";
});
// 닫기 버튼 클릭시 모달창 닫기
modalClose.addEventListener('click', function(){
  modal.style.opacity = "0";
  modal.style.zIndex = "-1";
});


// ***모바일(max-width:480)일 때 iframe 없애기
const modalIframe = document.querySelector('#modal iframe');
if (document.body.offsetWidth <= 480) {
  modal.removeChild(modalIframe);
}