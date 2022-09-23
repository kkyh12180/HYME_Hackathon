window.onfocus=function(){
}
window.onload=function(){
    window.focus(); // 현재 window 즉 익스플러러를 윈도우 최상단에 위치
    window.moveTo(0,0); // 웹 페이지의 창 위치를 0,0 (왼쪽 최상단) 으로 고정
    window.resizeTo(350,723); // 웹페이지의 크기를 가로 1280 , 세로 800 으로 고정(확장 및 축소)
}