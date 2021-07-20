
var goods = [
  {
    name: 'Товар 1',
    price: 20,
    img: '/small_pic/DSC_0.jpg'
    
  },
  { name: 'Товар 2',
    price: 30,
    img: '/small_pic/DSC_1.jpg'
    
  },
  {
    name: 'Товар 3',
    price: 10,
    img: '/small_pic/DSC_2.jpg'
  }

]
var cart = [];
var sum = 0;
var catalog = document.getElementById("catalog");

//Строим вёрстку в цикле
for (var i = 0; i < 3; i++){
    //Создаём необходимые переменные
    var itemName = document.createElement("p");
    var itemPrice = document.createElement("p");
    var good = document.createElement('div');
    good.className = ('good');
    var itemPicture = document.createElement("img");
    var button = document.createElement('button');
    var cartSum = document.getElementById('cartSum');
    var cartContent = document.createElement('div');
  
    cartContent.setAttribute("id",'cartContent');
    
    //присваиваем класс для дальнейшей возможной стилизации (в конкретном случае - необязательно)
    itemPrice.className = ('itemPrice'); 
    itemName.className = ('itemName');
    //заполняем элементы
    itemName.innerHTML = goods[i].name;
    itemPrice.innerHTML = ("Цена: "+ goods[i].price + ' руб.');
    button.innerText = "Купить";
    //Связываем кнопку с конкретным товаром. //TODO Необходимо заменить русский айди чем-то другим;
    button.setAttribute('id', goods[i].name); 
    //Присваиваем кнопке функцию добавления в корзину по нажатию
    button.onclick = addToCart;
    //Завершаем вёрстку
    catalog.append(good);
    good.append(itemName);
    good.append(itemPicture);
    itemPicture.src = goods[i].img;
    good.append(itemPrice);
    good.append(button);
}

//Функция добавления в корзину
function addToCart(){
//из id кнопки формируем индекс (число), указывающий на конкретный товар
var goodIndex = this.id.split(' ')[1]-1;

//добавляем товар  в корзину
cart.push(goods[goodIndex]);
goods[goodIndex].amount = 1;
this.setAttribute("disabled", true);

//Считаем и выводим сумму товаров в корзине:

sum += (goods[goodIndex].price*goods[goodIndex].amount);
cartSum.innerHTML = '';
cartSum.append("Сумма товаров в корзине: " + sum + " руб.");
document.querySelector('.cart').insertBefore(cartContent, cartSum);
//Запускаем функцию отрисовки корзины
cartRender();
}

//Функция отрисовки корзины
function cartRender(){

  var goodInCart = document.createElement('p');
  
  for (var i = 0; i < cart.length; i++){
    
    goodInCart.innerText = `${cart[i].name}. цена ${cart[i].price}, количество: ${cart[i].amount} шт. `;
    var plusButton = document.createElement('button');
    plusButton.innerText = '+';
    var minusButton = document.createElement('button');
    minusButton.innerText = '-';
    var inputAmount = document.createElement('input');
    inputAmount.setAttribute('type','number');
    inputAmount.setAttribute('value',cart[i].amount);
    goodInCart.append(plusButton);
    goodInCart.append(inputAmount);
    goodInCart.append(minusButton);
    cartContent.append(goodInCart);
  }
 
}


// TODO Реализовать функционал увеличения/уменьшения количества товаров при нажатии на кнопки + и -



