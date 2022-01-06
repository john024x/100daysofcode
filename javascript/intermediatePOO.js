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

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 0;
function nonRecursiveFunction(obj) {
  for (let index = 0; i < nums.length; i++) {
    // num += index;
    num = nums[index];
    console.log(index, num);
  }
}
//recursive function
function RecursiveFunction(nums) {
  if (nums.length > 0) {
    const firstNumber = nums[0];
    console.log(firstNumber);
    nums.shift();
    return RecursiveFunction(nums);
  }
}
function isObject(subject) {
  return typeof subject === 'object' && subject !== null;
}
function isArray(subject) {
  return Array.isArray(subject);
}
//deep copy
function deepCopy(subject) {
  let copyCat;
  const subjectisArray = isArray(subject);
  const subjectisObject = isObject(subject);
  if (subjectisArray) {
    copyCat = [];
  } else if (subjectisObject) {
    copyCat = {};
  } else {
    return subject;
  }
  for (let key in subject) {
    let keyisObject = isObject(subject[key]);
    let keyisArray = isArray(subject[key]);
    if (keyisObject) {
      copyCat[key] = deepCopy(subject[key]);
    } else {
      if (subjectisArray) {
        copyCat.push(deepCopy(subject[key]));
      } else {
        copyCat[key] = subject[key];
      }
    }
  }
  // subjectisArray ? (copyCat = []) : (copyCat = {});
  return copyCat;
}
