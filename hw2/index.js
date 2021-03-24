// import 1 task
require("./converter");
// import 2 task (also imported array = students)
let arrayFilter = require("./arrayfilter");
    
          
        

// usage 1 task
console.log("===============TASK 1=============");
console.log(converter(["1",1,"a",{hello:"world"},"qwe"]));

//usage 2 task
console.log("==============TASK 2==============");
console.log("==============T2.1");
console.log(arrayFilter.citySearch('Minsk',arrayFilter.students));
console.log("==============T2.2");
console.log(arrayFilter.ageSearch(20,arrayFilter.students));
console.log("==============T2.3");
console.log(arrayFilter.alphabeticalNameSort(arrayFilter.students));
console.log("==============T2.4");
console.log(arrayFilter.marriedStatusFilter(true,"Female",arrayFilter.students));
console.log("==============T2.5");
console.log(arrayFilter.ageAndSexFilter(23,"Female",arrayFilter.students));
