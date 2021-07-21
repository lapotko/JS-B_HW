let imgArray = document.querySelectorAll('#slider img');
let count = 0;

function next(){
    imgArray[count].style.display = 'none';
    count++;
    if(count > imgArray.length-1){
        count = 0;
        imgArray[count].style.display = 'inline';
    }
    imgArray[count].style.display = 'inline';
    }
function previous(){
    imgArray[count].style.display = 'none';
    count--;
    if(count<0){
        count = imgArray.length-1;
        imgArray[count].style.display = 'inline';
    }
    imgArray[count].style.display = 'inline';
    }


