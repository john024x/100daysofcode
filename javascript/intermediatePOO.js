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

const StudentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    facebook: undefined,
    instagram: undefined,
  },
};

const juan = deepCopy(StudentBase);
Object.seal(juan);
Object.isSealed(juan); // check if object is sealed
// Object.defineProperty(juan, 'name', {
//   value: 'juan',
//   configurable: false,
// });

//Fabric pattern & RORO pattern
function requeriedParms(param) {
  throw new Error('Missing required parameters: ' + param);
}
function createLearningPath({ name = requeriedParms('name'), courses = [] }) {
  const private = {
    _name: name,
    _courses: courses,
  };
  const public = {
    get name() {
      return private._name;
    },
    set name(newName) {
      if (newName.length < 1) {
        private._name = newName;
      } else {
        throw new Error('Name must be at least 1 character');
      }
      return private._name;
    },
    get courses() {
      return private._courses;
    },
  };
  return public;
}

function createStudent({
  name = requeriedParms('name'),
  age,
  email = requeriedParms('email'),
  twitter,
  facebook,
  instagram,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
    _learningPaths: learningPaths,
  };
  const public = {
    age,
    email,
    approvedCourses,
    socialMedia: {
      twitter,
      facebook,
      instagram,
    },
    get name() {
      return private._name;
    },
    set name(newName) {
      if (newName.length < 1) {
        private._name = newName;
      } else {
        throw new Error('Name must be at least 1 character');
      }
      return private._name;
    },
    get learningPaths() {
      return private._name;
    },
    set learningPaths(newNameLP) {
      if (!newNameLP.name) {
        throw new Error('Name must have a name');
        return;
      }
      if (!newNameLP.courses) {
        throw new Error('Name must have a name of courses');
        return;
      }
      if (!isArray.courses) {
        throw new Error('Name must have a course in arrays');
        return;
      }
      private._learningPaths.push(newNameLP);
    },
    // changeName(newName) {
    //   private._name = newName;
    // },
    // readName() {
    //   return private._name;
    // },
  };
  Object.defineProperty(public, 'readName', {
    configurable: false, // prevents the modification of the property
  });
  Object.defineProperty(public, 'changeName', {
    configurable: false, // prevents the modification of the property
  });
  return public;
}
