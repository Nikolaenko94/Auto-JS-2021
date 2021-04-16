//created special type(used type guard) for main classes: tracks, alboms, artists
//we dont have an unambiguous answer which data type will be used 
//when declaring a class in a constructor.
//for type guard we will describe all valid types for any parameters 

type MainClassesTypes = string | number | object | Array<string> | Array<number> | Array<object> | Date;

export type {MainClassesTypes};