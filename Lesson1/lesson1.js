//Задание 1
var tempCelcius = +prompt('Введите температуру по Цельсию');
var tempFar = ((9/5)*tempCelcius + 32);
alert (tempFar);

//Задание 2
var name = "Василий";
var admin = name;
console.log (admin);

/* Задание 3
JS-выражение 1000 + "108" будет равно 1000108 потому что в данном случае происходит конкатенация числа и строки*/

/* Задание 4. Атрибуты async и defer
Если я всё правильно понял, то...

В общем случае, при загрузке страницы, в момент когда браузер находит скрипт, он останавливает загрузку страницы 
до тех пор, пока не будет загружен и выполнен скрипт. Это может сильно замедлять отображение страницы.
Для того чтобы этого избежать, используют два атрибута тэга script:

    defer - позволяет браузеру загружать скрип в фоне не препятствуя загрузке страницы, но выполнит его только после того, 
            как страница загрузится.
    async - делает загрузку и исполнение скрипта и остальных элементов страницы независимыми друг от друга.
            Первым будет исполняться и отображаться то, что будет загружено.  */

// Задание 5. Обмен значениями между двумя переменными, без использования третьей.
            var a = +prompt('Введите число а');
            var b = +prompt('Введите число b');
            a = a+b;
            b = a-b;
            a = a-b;
            document.write(`Теперь в переменной "а" число ${a}, а в переменной "b" число ${b}`);
