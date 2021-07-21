function init() {
    var img = document.getElementsByTagName("img");
    for (var i = 0; i < img.length; i++) {
      img[i].onclick = changeBigPic;
    }

    function changeBigPic(event) {
      var bigPicWrap = document.getElementById("big_picture");
      bigPicWrap.style.display = ('flex');
      
      bigPicWrap.innerHTML = "";
      var eventObj = event.target;
      var picSrc = eventObj.src.split("/");
      var picName = picSrc[picSrc.length - 1];
      var bigPic = document.createElement("img");
      bigPic.src = "big_pic/" + picName;
      bigPicWrap.append(bigPic);
      bigPic.onerror = function () {
        var errorMsg = document.createElement("h3");
        errorMsg.innerHTML =
          "Файл не найден. Проверьте имя или местоположение файла";
        bigPicWrap.append(errorMsg);
      };
    }
  }
  window.onload = init;