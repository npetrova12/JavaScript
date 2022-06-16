//  1. Написать скрипт, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let i = 2;
let exp = 10;
let result = 1;
let count = 1;
while (count <= exp) {
	result = result*i
	console.log(result)
	count++
}

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

let string = "" 
let count1 = 1
while (count1 <= 5) {
string += ":)"
console.log(string)
count1++
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {
    let result = '';
    for (let i = 1; i<=numberOfRows; i++){
        result+=stroka
        console.log(result)   
    }
}
printSmile(':(', 5)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure2(word) {
    const vowels = 'aeiouy'.split('')
    const consonants = 'bcdfghjklmnpqrstvwxz'.split('')
    let numberOfVowels = 0;
    let numberofConsonants = 0;
    for(char of word.toLowerCase()) {
        if (vowels.includes(char)) numberOfVowels++;
        if (consonants.includes(char)) numberofConsonants++;
    }
    console.log(`Слово ${word} состоит из ${numberOfVowels} гласных и ${numberofConsonants} согласных букв`)
}

getWordStructure2('case')
getWordStructure2('Case')
getWordStructure2('Check-list')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
    let newStroka = '';
    for (i = word.length - 1; i >= 0; i --) {
         newStroka = newStroka + word[i];
       }
     if (word.toLowerCase() == newStroka.toLowerCase()) {
         console.log(word,'- палиндром',);
     } else {
       console.log(word,'- не палиндром',);
     } 
   }  
   
   isPalindrom('abba')
   isPalindrom('Abba')

