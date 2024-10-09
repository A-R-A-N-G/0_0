// 팝업 표시 함수 (특정 ID를 통해 팝업을 표시)
function showPopup(event, id) {
    event.preventDefault(); // 기본 동작 방지
    // 모든 팝업을 숨기기
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
    });

    // 선택한 팝업만 표시
    const selectedPopup = document.getElementById(id);
    if (selectedPopup) {
        selectedPopup.style.display = 'block';
    }
    
    // 오버레이 표시
    document.querySelector('.popup-overlay').style.display = 'block';
}

// 팝업 숨기기 함수
function hidePopup() {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
    });
    document.querySelector('.popup-overlay').style.display = 'none';
}

// 문서 전체에 클릭 이벤트 추가
document.addEventListener('click', function(event) {
    const popup = document.querySelector('.popup');

    // 팝업이 열린 상태일 때
    if (popup.style.display === 'block') {
        // 클릭된 요소가 팝업 내부이든 외부이든 닫기
        hidePopup();
    }
});

// 팝업 내부의 모든 요소에 클릭 이벤트 추가
document.querySelectorAll('.popup *').forEach(element => {
    element.addEventListener('click', function(event) {
        // 팝업 내부를 클릭했을 때도 팝업을 닫음
        hidePopup();
        event.stopPropagation(); // 이벤트 전파를 막음
    });
});





