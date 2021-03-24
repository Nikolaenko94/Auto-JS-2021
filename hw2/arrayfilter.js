const students = [
    {
        name: 'Vasya Pupkin',
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

module.exports = {
    students,
    citySearch
};