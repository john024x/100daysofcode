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

const obj1 = {
  name: 'juan',
  age: '22',
  approvedCourses: {
    courses: ['JavaScript', 'React', 'NodeJSX'],
  },
};

//shallow copy
const obj2 = {};
for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1);

const strObj1 = JSON.stringify(obj1); //convert object to string
const ObjStr1 = JSON.parse(strObj1); //convert string to object
