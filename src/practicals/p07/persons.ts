export interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

export function sortPersons(persons: Person[]): Person[] {
  const p = persons
    .filter(p => p.firstName)
    .filter(p => p.lastName)
    .filter(p => p.age)
    .filter(p => p.age! >= 0 && p.age! <= 100)
  return p.sort((a, b) => {
    if (a.age! > b.age!) return 1
    if (a.age! < b.age!) return -1
    return (a.firstName!.localeCompare(b.firstName!)) || a.lastName!.localeCompare(b.lastName!)
  })
}


const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

// console.log(sortPersons(persons))