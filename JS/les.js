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