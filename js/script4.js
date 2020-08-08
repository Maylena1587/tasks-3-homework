// Задача 3 - 4
// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму зарплаты работников и возвращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".
const countTotalSalary = function (employees) {
  "use strict";
  // Write code under this line
  let totalSalary = 0;
  Object.entries(employees);
  for (const employe of Object.values(employees)) {
    totalSalary += employe;
  }
  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500const countTotalSalary = function(employees) {  'use strict';  // Write code under this line};// Объекты и ожидаемый результатconst developers = {    mango: 300,    poly: 250,    alfred: 450,};// 1000const supports = {  kiwi: 200,  lux: 150,  chelsy: 150,}// 500
