// ***갤러리, 친구이름 li style 부여
const galleryLi = document.querySelectorAll('#gallery li');
const friendsLi = document.querySelectorAll('#friends li');

for (i=0; i<galleryLi.length; i++) {
  galleryLi[i].style.display = "flex";
  galleryLi[i].style.justifyContent = "center";
  galleryLi[i].style.position = "absolute";
  galleryLi[i].style.opacity = "0";
  galleryLi[0].style.opacity = "1";
  friendsLi[0].style.fontWeight = "600";
}

// ***이름 누르면 해당 아이의 이름을 진하게 + 작품 나오게 하기
for (i=0; i<friendsLi.length; i++) {
  friendsLi[i].addEventListener('click', function(event) {
    console.dir(event.target);
    if (event.target.textContent == "김리아") {
      event.target.style.fontWeight = "600";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "1";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "김민기") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "1";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "김승민") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "1";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "김준기") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "1";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "김태희") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "1";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "문 현") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "1";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "박시은") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "1";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "박천유") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "1";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "안강우") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "1";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "안시우") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "1";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "오근영") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "1";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "오시영") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "1";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "유영상") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[13].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "1";
      galleryLi[13].style.opacity = "0";
    }
    if (event.target.textContent == "조영현") {
      event.target.style.fontWeight = "600";
      friendsLi[0].style.fontWeight = "300";
      friendsLi[1].style.fontWeight = "300";
      friendsLi[2].style.fontWeight = "300";
      friendsLi[3].style.fontWeight = "300";
      friendsLi[4].style.fontWeight = "300";
      friendsLi[5].style.fontWeight = "300";
      friendsLi[6].style.fontWeight = "300";
      friendsLi[7].style.fontWeight = "300";
      friendsLi[8].style.fontWeight = "300";
      friendsLi[9].style.fontWeight = "300";
      friendsLi[10].style.fontWeight = "300";
      friendsLi[11].style.fontWeight = "300";
      friendsLi[12].style.fontWeight = "300";
      galleryLi[0].style.opacity = "0";
      galleryLi[1].style.opacity = "0";
      galleryLi[2].style.opacity = "0";
      galleryLi[3].style.opacity = "0";
      galleryLi[4].style.opacity = "0";
      galleryLi[5].style.opacity = "0";
      galleryLi[6].style.opacity = "0";
      galleryLi[7].style.opacity = "0";
      galleryLi[8].style.opacity = "0";
      galleryLi[9].style.opacity = "0";
      galleryLi[10].style.opacity = "0";
      galleryLi[11].style.opacity = "0";
      galleryLi[12].style.opacity = "0";
      galleryLi[13].style.opacity = "1";
    }
  });
}


// ***투표하기 버튼 누르면 투표 모달 띄우기
const voteBtn = document.querySelector('#vote-btn p');
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('#modal-close');

voteBtn.addEventListener('click', function(){
    modal.style.opacity = "1";
    modal.style.zIndex = "1";
});

modalClose.addEventListener('click', function(){
    modal.style.opacity = "0";
    modal.style.zIndex = "-1";
});