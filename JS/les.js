// Проверка задания №1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c); // 2
// d = b++; alert(d); // 1
// c = (2+ ++a); alert(c); // 5
// d = (2+ b++); alert(d); // 4
// alert(a); // 3
// alert(b); // 3

// задание №2

var a = 2;
var task2Value = 1 + (a *= 2);
document.getElementById("task2Value").innerHTML = task2Value;

// задание №3
// * если a и b положительные, вывести их разность;
// * если а и b отрицательные, вывести их произведение;
// * если а и b разных знаков, вывести их сумму; 
// ноль можно считать положительным числом.
function task3function(){
    var a1 = document.getElementById("task3a").value;
    var b = document.getElementById('task3b').value;
    if(a1>=0 && b>=0){
         task3Result = a1-b;
     }   else if(a1<0 && b<0){
         task3Result = a1*b;
         }   else if((a1>=0 && b<0)||(a1<0 && b>=0)){
             task3Result = Number(a1)+Number(b);
            } else {task3Result = 'Введенное значение некорректно';}
    document.getElementById("task3Value").innerHTML = 'Результат= '+ task3Result;
}
// задание №4
// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
function task4function(){
    var a2 = document.getElementById("task4a").value;
    a2 = Number(a2);
    switch(true){
        case a2<=0:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 0;},10);
        case a2<=1:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 1;},400);
        case a2<=2:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 2;},800);
        case a2<=3:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 3;},1200);
        case a2<=4:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 4;},1600);
        case a2<=5:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 5;},2000);
        case a2<=6:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 6;},2400);
        case a2<=7:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 7;},2800);
        case a2<=8:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 8;},3200);
        case a2<=9:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 9;},3600);
        case a2<=10:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 10;},4000);
        case a2<=11:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 11;},4400);
        case a2<=12:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 12;},4800);
        case a2<=13:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 13;},5200);
        case a2<=14:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 14;},5600);
        case a2<=15:
            setTimeout(function(){document.getElementById("task4Value").innerHTML = 15;},6000);
    }
}
// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

function task5function(){
    let a = document.getElementById("task5a").value;
    let b = document.getElementById('task5b').value;
    task5ValuePlus = task5functionPlus (a,b);
    task5ValueMultiply = task5functionMultiply(a,b);
    task5ValueMinus = task5functionMinus (a,b);
    task5ValueDivision = task5functionDivision (a,b);
    document.getElementById("task5ValuePlus").innerHTML = 'Сложение a и b = '+ task5ValuePlus;
    document.getElementById("task5ValueMultiply").innerHTML = 'Произведение a и b = '+ task5ValueMultiply;
    document.getElementById("task5ValueMinus").innerHTML = 'Разность a и b = '+ task5ValueMinus;
    document.getElementById("task5ValueDivision").innerHTML = 'Деление a и b = '+ task5ValueDivision;
    
    function task5functionPlus (task5a,task5b){
        return Number(task5a) + Number(task5b);
    }
    function task5functionMultiply (task5a,task5b){
        return task5a * task5b;
    }
    function task5functionMinus (task5a,task5b){
        return task5a - task5b;
    }
    function task5functionDivision (task5a,task5b){
        return task5a / task5b;
    }
}
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
function task6function(){
    let a = document.getElementById("task6a").value;
    let b = document.getElementById('task6b').value;
    let operation = document.getElementById("task6_operation").value;
    task6Value = task6functionOperation(a, b, operation);
    function task6functionOperation(task6a, task6b,task6_operation){
        switch (task6_operation){
            case'+':
                return Number(task6a) + Number(task6b);
            case'-':
                return Number(task6a) - Number(task6b);
            case'*':
                return Number(task6a) * Number(task6b);
            case'/':
                return Number(task6a) / Number(task6b);
            default:
                return 'введеный знак некорректен';
        }
        
    }
    document.getElementById("task6Value").innerHTML = 'Результат операции '+ a + operation + b + ' = ' + task6Value;
}
//Сравнить null и 0. Попробуйте объяснить результат
function task7function(){
    task7result1= null==0;
    task7result2= null>=0;
    task7result3= null===0;
    document.getElementById("task7Value1").innerHTML = 'Результат сравнения null==0 ' + task7result1;
    document.getElementById("task7Value2").innerHTML = 'Результат сравнения null>=0 ' + task7result2;
    document.getElementById("task7Value3").innerHTML = 'Результат сравнения null===0 ' + task7result3;
    document.getElementById("task7Value4").innerHTML = 'Значения null и undefined равны == друг другу и не равны ничему другому, но при этом алгоритмы проверки равенства == и сравнения >= > < <= работают по-разному, сранение приводит Null к 0 ';
}
// С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val – заданное число, pow – степень.
function task8function(){
    let a = document.getElementById("task8a").value;
    let degree = document.getElementById("task8_degree").value;
    task8result = power(a, degree);
    function power(val, pow){
         if (pow > 1) 
            val *= power(val,pow-1);
        return val;
    }
    document.getElementById("task8Result").innerHTML = 'Результат возведения '+a+' в степень '+ degree+' = ' + task8result;
}