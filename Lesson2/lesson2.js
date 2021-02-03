

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
      var max = 15;
      var rnd = +((Math.random()*max).toFixed (0));
      alert (rnd);
      switch(rnd){
        case 1:
          console.log('1');
        case 2:
          console.log('2');
        case 3:
          console.log('3');
        case 4:
          console.log('4');
        case 5:
          console.log('5');
        case 6:
          console.log('6');
        case 7:
          console.log('7');
        case 8:
          console.log('8');
        case 9:
          console.log('9');
        case 10:
          console.log('10');
        case 11:
          console.log('11');
        case 12:
          console.log('12 ');
        case 13:
          console.log('13');
        case 14:
          console.log('14');
        case 15:
          console.log('15');
      }
    }

// Задание 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
function mathAddition(a,b){
    var addResult = (+a+(+b));
    alert ('Сумма чисел = '+(addResult));
    return addResult;
  }
  function mathSubtraction(a,b){
    var subResult = (a-b);
    alert ('Разность чисел = '+(subResult));
    return subResult;
  }
  function mathMultiplication(a,b){
    var multResult = (a*b);
    alert ('Результат умножения = '+(multResult));
    return multResult;
  }
  function mathDivision(a,b){
    var divResult = (a/b);
    alert ('Результат деления = '+(divResult).toFixed(2));
    return divResult;
    
  }
  
// Задание 6.
function mathOperation(arg1, arg2, operation){
  var operation = prompt('Введите символ желаемой математической операции (например: / (деление), * (умножение), + (сложение)  - (вычитание)');
      if (operation == "-"){
      arg1=+prompt('Введите делимое число');
      arg2=+prompt('Введите делитель');
    }
      else if(operation=="-"){
        arg1=+prompt('Введите уменьшаемое число');
        arg2=+prompt('Введите вычитаемое число');
      }
      else{
        arg1=+prompt('Введите первое число');
        arg2=+prompt('Введите второе число');
      }
      switch(operation){
        case "*":
          mathMultiplication(arg1, arg2);
          break;
        case "/":
          mathDivision(arg1,arg2);
          break;
        case "-":
          mathSubtraction(arg1,arg2);
          break;
        case "+":
          mathAddition(arg1,arg2);
          break;
      }
  }

// Задание 8*. Рекурсия
  function power(val,pow){
    if (pow == 1){
      return val;
    }
      else{
        return val*power(val, pow-1);
      }
    }
    
    function task_8(){
      var x = +prompt('Введите число');
      var y = +prompt('Введите степень');
      alert ('Результат вычисления: '+(power(x,y)));
    }
  
    
    