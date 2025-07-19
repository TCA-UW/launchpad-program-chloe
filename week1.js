function rectArea(length, width){
    const rectangle_formula = length*width;

    return rectangle_formula;
}

function posNeg(num){
    if(num == 0){
        return 'zero';
    } else if(num < 0){
        return 'negative';
    } else{
        return 'positive';
    }
}

let fruits = ['apple', 'banana', 'cherry', 'mango'];

function fruitPrintFor(fruits){
    for(i = 0; i<fruits.length; i++){
        console.log(fruits[i]) ;
    }
}

function fruitPrintWhile(fruits){
    let j = 0;
    while(j<fruits.length){
        console.log(fruits[j]);
        j++;
    }
}

function calculator(a, b, operation){
    if(operation == '+'){
        console.log(a+ b);
    } else if(operation == '-'){
        console.log(a-b);
    } else if(operation == '*'){
        console.log(a*b);
    } else if(operation == '/'){
        console.log(a/b);
    } else{
        console.log('Not a valid operation');
    }
}

let student = {
    name: 'John',
    mathGrade: 4.0,
    scienceGrade: 3.5,
    engGrade: 2.0
};

function avgGrade(student){
    return ((student.mathGrade + student.scienceGrade + student.engGrade)/3);
}

function letterGrade(student){
    studentGrade = avgGrade(student);
    if(studentGrade >= 3.5 ){
        return 'A';
    } else if(studentGrade > 3.0 ){
        return 'B';
    } else if(studentGrade > 2.0){
        return 'C';
    } else if(studentGrade > 1.0){
        return 'D';
    } else{ return 'F'}
}

function highestGrade(student){
    return Math.max(student.mathGrade, student.scienceGrade, student.engGrade);
}

function summary(student){
    console.log('Name: ' + student.name);
    console.log('Average Grade: ' + avgGrade(student));
    console.log('Letter Grade: ' + letterGrade(student));
    console.log('Highest Grade: ' + highestGrade(student));
}