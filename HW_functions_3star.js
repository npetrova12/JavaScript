// 3**:
// Преобразовать задание 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number.

const age = 10;
const age_2 = 18;
const age_3 = 60;

const checkAge = function(age) {

    age = Number(age)

    if (!isNaN (age)) {

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

checkAge (61)
checkAge ('55')
checkAge ('2privet')
checkAge ('2')