/* 
Задание 1
Реализуйте ф-ю, возвращающую сумму всех элементов двумерного массива
Входные данные - двумерный массив, выходные данные - число 
*/ 

function sumMatrix(matrix){
	let arr = [].concat(...matrix);
	let sum = arr.reduce(add, 0);
	function add(a, b){
		return a + b;
	}
	return sum;
}

let matrix1 = [  // 39
	[1, 0, 3],
	[8, 5, 5],
	[4, 8, 5]
];

let matrix2 = [ // 136
	[1,  2,  3,  4],
	[5,  6,  7,  8],
	[9,  10, 11, 12],
	[13, 14, 15, 16]
];

console.log(sumMatrix(matrix1)); // 39
console.log(sumMatrix(matrix2)); // 136

/*
Задание 2
Напишите ф-ю, "поворачивающую" матрицу на 90 градусов по часовой стрелке
таким образом, чтобы строки стали столбцами
*/



/*
Задание 3
Напишите ф-ю, принимающую в качестве аргумента текстовую строку,
и возвращающую кол-во уникальных символов в строке
Входные данные - строка, выходные данные - число 
*/

function filterUnique(str) {
	let set = new Set(str);
	return [...set].length;
}

let testString = 'Hello, world';

let testString2 = 'Test String 2';

console.log(filterUnique(testString));  // 9
console.log(filterUnique(testString2)); // 11

