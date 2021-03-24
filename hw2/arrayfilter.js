const students = [
    {
        name: 'Sasya Pupkin',
        age: 17,
        sex: 'Male',
        isMarried: false,
        city: 'Mogilev',
    },
    {
        name: 'Zoya Petrovna',
        age: 23,
        sex: 'Female',
        isMarried: true,
        city: 'Mogilev',
    },
    {
        name: 'Petr Ivanov',
        age: 30,
        sex: 'Male',
        isMarried: true,
        city: 'Minsk',
    },
    {
        name: 'Vitali Ivanov',
        age: 19,
        sex: 'Male',
        isMarried: false,
        city: 'Vitebsk',
    },
    {
        name: 'Lavrenti Sakalov',
        age: 20,
        sex: 'Male',
        isMarried: true,
        city: 'Brest',
    },
    {
        name: 'Olga Sakalova',
        age: 23,
        sex: 'Female',
        isMarried: true,
        city: 'Grodno',
    },
];

// TASK 2.1
function citySearch(city,array){
    let filterArray = array.filter(element => element.city === city);
    return filterArray;
};

// TASK 2.2
function ageSearch(age,array){    
    let filterArray = [];
    array.forEach((element)  => {                      
        element.age <= age? filterArray.push(element):false;
     });
    return filterArray;
};

//TASK 2.3
function alphabeticalNameSort(array){
    let filterArray = array.map(element => element.name);
    filterArray.sort();
    return filterArray;
};

//TASK 2.4
function marriedStatusFilter(boolean, sex, array){           
    let marriedStatusFulter = array.filter(element => element.sex === sex && element.isMarried === boolean);
    return marriedStatusFulter;
};

//TASK 2.5
function ageAndSexFilter(age,sex,array){
    let ageAndSexFilter = array.filter(element => element.age === age && element.sex === sex);
    return ageAndSexFilter;
};

//TASK 2.6
const addNewStudent = (newStudent,array) => {
    array.unshift(newStudent)
    return array;
};

//TASK 2.7


//EXPORT
module.exports = {
    students,
    citySearch,
    ageSearch,
    alphabeticalNameSort,
    marriedStatusFilter,
    ageAndSexFilter,
    addNewStudent,
};