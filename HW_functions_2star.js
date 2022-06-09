// 2*:
// Преобразовать задание 1* таким образом, чтобы сначала в функции проверялся тип данных. И если он не Number - выдавалась ошибка.

const age = 10;
const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {

    if (typeof age == 'number') {

    if (age < age_2) {
        console.log('You dont have access cause your age is ' + age + '. It’s less then ' + age_2)
    }  
    else if (age >= age_2 && age < age_3) {
        console.log('Welcome!')
    } 
    else if (age > age_3) {
        console.log('Keep calm and look Culture channel')
    }
    else {
        console.log('Technical work')
    }
} else {console.log("Not integer value")}
}

checkAge (17)
checkAge ('Privet')
