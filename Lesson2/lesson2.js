

//Задание 3
function task_3 (a,b){
    var a = +prompt('Введите первую цифру');
    var b = +prompt('Введите вторую цифру');
    if(a>=0 && b>=0){
    alert('Разность чисел: '+(a - b));
    }else if(a<0&&b<0){
      alert('Произведение чисел: '+(a*b));
    }else {
      alert('Сумма чисел: '+(a+b));
    }
    
    }
    
    // Задание 4 
    function task_4 (){
      var rnd = +((Math.random()*15).toFixed (0));
      alert (rnd);
      switch(rnd){
        case 1:
          alert('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
        case 2:
          alert('2 3 4 5 6 7 8 9 10 11 12 13 14 15');
          break;
        case 3:
          alert('3 4 5 6 7 8 9 10 11 12 13 14 15');
          break;
        case 4:
          alert('4 5 6 7 8 9 10 11 12 13 14 15');
          break;
        case 5:
          alert('5 6 7 8 9 10 11 12 13 14 15');
          break;
        case 6:
          alert('6 7 8 9 10 11 12 13 14 15');
          break;
        case 7:
          alert('7 8 9 10 11 12 13 14 15');
          break;
        case 8:
          alert('8 9 10 11 12 13 14 15');
          break;
        case 9:
          alert('9 10 11 12 13 14 15');
          break;
        case 10:
          alert('10 11 12 13 14 15');
          break;
        case 11:
          alert('11 12 13 14 15');
          break;
        case 12:
          alert('12 13 14 15');
          break;
        case 13:
          alert('13 14 15');
          break;
        case 14:
          alert('14 15');
          break;
        case 15:
          alert('15');
          break;
      }
    }

    // Задание 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
function mathAddition(a,b){
    var addResult = +a+(+b);
    return;
  }
  function mathSubtraction(a,b){
    var subResult = a-b;
    return;
  }
  function mathMultiplication(a,b){
    var multResult = a*b;
    return;
  }
  function mathDivision(a,b){
    var divResult = a/b;
    return;
  }
  
    
    