const juan = {
  name: 'Juan',
  age: 22,
  job: 'Software Engineer',
  coursesApproved: ['JavaScript', 'React', 'NodeJSX'],
  approveCourse: function (course) {
    this.coursesApproved.push(course);
  },
};

//add new approved courses
juan.coursesApproved.push('MongoDB', 'ExpressJS');

function Student(name, age, job, coursesApproved) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.coursesApproved = coursesApproved;
}
//Create a protptype method for Student
Student.prototype.approveCourse = function (course) {
  this.coursesApproved.push(course);
};
const Angel = new Student('Angel', 21, 'Software Engineer', [
  'JavaScript',
  'HTML',
  'CSS',
]);

//Prototype with class syntax
class StudentClass {
  constructor(name, age, job, coursesApproved) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.coursesApproved = coursesApproved;
  }
  approveCourse(course) {
    this.coursesApproved.push(course);
  }
}
const Miguel = new StudentClass('Miguel', 21, 'Software Engineer', [
  'Buisness intelligence',
  'Data Science',
  'Machine Learning',
]);

class StudentClass_2 {
  constructor({ name, age, job, coursesApproved = [] }) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.coursesApproved = coursesApproved;
  }
  approveCourse(course) {
    this.coursesApproved.push(course);
  }
}
const Miguel_2 = new StudentClass_2({
  age: 28,
  name: 'Miguel',
  coursesApproved: ['React', 'NodeJS', 'NextJS'],
});

//Using literal objet notation
const Juan_1 = {
  name: 'Juan',
  username: 'juan_1',
  pints: 1000,
  socialMedia: {
    twitter: '@jfuentes_code',
    intagram: '@juanfuentes_code',
    facebook: undefined,
  },
  approvedCourses: ['JavaScript', 'React', 'NodeJS'],
  learningPaths: [
    {
      name: 'Web Developer',
      courses: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'],
    },
    {
      name: 'Data Science',
      courses: ['Python', 'R', 'SQL', 'Data Science'],
    },
  ],
};

//Using classes
class StudentClass_3 {
  constructor({
    name,
    username,
    email,
    twitter,
    facebook,
    intagram,
    approvedCourses,
    learningPaths,
  }) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.socialMedia = {
      twitter,
      facebook,
      intagram,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

class learningPathsClass {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}
const webDevelopment = new learningPathsClass('Web Developer', [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'NodeJS',
]);

const juan_2 = new StudentClass_3({
  name: 'Juan',
  username: 'jfuentes_code',
  email: 'juan_fuentes@avocadosnetwork.com',
  twitter: '@jfuentes_code',
});
