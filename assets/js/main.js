//Задание 1
let name;
let admin;
name ='Джон';
admin = name;
alert(admin);

//Задание 2
let cityName = prompt('Укажите название города', 'name');
let cityYear = prompt('Укажите год образования города', 1982);
let cityPeople = prompt('Укажите население города', 1000000);
let year = 2024;

let cityAge = year - Number(cityYear);
alert(`Городу ${cityName} исполнилось ${cityAge} лет с момента его образования. Население - ${cityPeople} человек`);

//Задание 3 
let r = +prompt('Укажите радиус круга', 3);
let p = 3.14;
let S = p * (r*r);
alert(`Площадь круга составляет ${S}`);

//Задание 4
let a = +prompt('Введите первое число', 5);
let b = +prompt('Введите второе число', 2);
let sum = a+b;
let raz = a-b;
let ymn = a*b;
let del = a/b;
alert(`Сумма чисел - ${sum}, Разность чисел - ${raz}, Произведение чисел - ${ymn}, Частноe - ${del}`);