//created special type for main classes: tracks, alboms, artists
//we dont have an unambiguous answer which data type will be used 
//when declaring a class in a constructor.
type MainClassesTypes = string | number | object | Array<string> | Array<number> | Array<object> | Date;
//MainClassesTypes includes Generics type : Array<number> and Array<object>
export type {MainClassesTypes};