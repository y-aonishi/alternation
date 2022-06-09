$(function(){
	// html 共通部分読み込み
    $("#background").load("/html/common/background.html");
    $("#header").load("/html/common/header.html");
    $("#footer").load("/html/common/footer.html");
});

// ピンチイン・ピンチアウト禁止
  document.documentElement.addEventListener('touchstart', function (e) {
    if (e.touches.length >= 2) {e.preventDefault();}
  }, {passive: false});


	