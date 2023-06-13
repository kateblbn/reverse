>>> forEach()
Метод forEach() выполняет функцию  один раз для каждого элемента, 
находящегося в массиве.
*****************************************
sintaksis

const words = ['a', 'b', 'c'];

words.forEach((word) => {
    console.log(word)
});
word = const words = ['a', 'b', 'c'];


words.forEach((word) => {
    console.log(word)
});
word - параметр через который виден каждый элемент массива
*******************************************
1)
const students = ['John', 'Sara', 'Jack'];
используя forEach выведите элементы массива в console.log()
но перед кждым добавьте 'hi'
Результат:
hi John
hi Sara
hi Jack



const names = ['John', 'Sara', 'Jack'];
names.forEach( name => {
console.log( 'Hi ' + name)
}) 



2)
Прочитай
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push

const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];
используя forEach и метод push отправьте элементы из arrayItems  в copyItems 

const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];

arrayItems.forEach( elem => {
copyItems.push(elem);
  console.log(copyItems)
}) 



3)
const scores = [5, 8, 3, 10, 7];
 a) Перебрать каждый элемент массива с помощью forEach и вывести его в консоль после умножения на 3.
 b)Используйте метод includes, чтобы узнать, существует ли число 8 в массиве.

const scores = [5, 8, 3, 10, 7];
scores.forEach( elem => {
let result = scores.includes(8)? true : false;
  console.log(result)
}) 




*********************************************************************
Теория:
Второй параметр
const words = ['a', 'b', 'c'];


words.forEach((word, index) => {
    console.log(word)
});
как уже увидели word выводит  каждый элемент массива
index выводит порядковый номер каждого элемента массива
**********************************************************************
4)
const courses = ['Biology', 'Mathematics', 'Chemistry', 'Physics'];
Выведите в console.log() элементы массива и их порядковый номер
 Результат:
0: Biology
1: Mathematics
2: Chemistry
3: Physics


const courses = ['Biology', 'Mathematics', 'Chemistry', 'Physics'];
courses.forEach( (elem, index) => {
console.log(index + ': ' + elem)
}) 


======================================================================
5)
const grade = [33, 90, 78, 94, 56, 88, 97]; 
const grades = []; 
используя forEach и метод push отправьте элементы из grades в grades. 
Но только те кто больше 70


const grade = [33, 90, 78, 94, 56, 88, 97]; 
const grades = []; 
grade.forEach( elem => {
 if (elem > 70) {
grades.push(elem) ;
} 
})
console.log(grades) 



6)
 const actors = [
	{ firstName: 'Charles', lastName: 'Chaplin' },
	{ firstName: 'Gary', lastName: 'Cooper' },
	{ firstName: 'Cary', lastName: 'Grant' },
];
выведите массив на странице  браузерa
(создайте в html div и там отобразите)

const pushArray = document.querySelector('.pushArray');
const actors = [
	{ firstName: 'Charles', lastName: 'Chaplin' },
	{ firstName: 'Gary', lastName: 'Cooper' },
	{ firstName: 'Cary', lastName: 'Grant' },
];


actors.forEach( actor => {
    let a = `
    <div class="name">Name: ${actor.firstName}</div>
    <div class="surname">Surname: ${actor.lastName}</div>
    `
    pushArray.innerHTML += a;
})



7) Eсть массив [5, 6, 7, 8, 9]. 
     Создайте новый массив, состоящий из квадратов этих чисел

let arr = [5, 6, 7, 8, 9];
arr.forEach( elem => {
console.log(elem ** 2)})


    ---------
    дополнительная информация для решения 7-й задачи
    -> https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push