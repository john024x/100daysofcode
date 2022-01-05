const juan = {
  name: 'juan',
  age: '22',
  approvedCourses: ['JavaScript', 'React', 'NodeJSX'],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, 'NewTest', {
  value: 'NewTest',
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(juan, 'prueba', {
  value: 'Mars',
  writable: false,
  enumerable: false,
  configurable: true,
});

Object.seal(juan); //prevents the deletion of properties and prevents the modification of existing properties
Object.freeze(juan); //all properties are non-writable and non-configurable
