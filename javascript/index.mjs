function videoPlay(id) {
  const url = `https://www.youtube.com/embed/${id}?autoplay=1`;
  console.log('the video is playing on url : ' + url);
}
function videoStop(id) {
  console.log('the video is stopped');
}
export class protytpeClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }
  play() {
    videoPlay(this.videoID);
  }
  stop() {
    videoStop(this.videoID);
  }
}
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

// class Course {
//   constructor({ name, classes = [] }) {
//     this.name = name;
//     this.classes = classes;
//   }
// }

//Encapsulation
class Course {
  constructor({ name, classes = [] }) {
    this._name = name; //Convention for private variables
    this.classes = classes;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length > 12) {
      this._name = value;
    } else {
      console.error('Name must be at least 12 characters');
    }
  }
}

class Classes {
  constructor({
    name,
    description,
    startDate,
    endDate,
    students = [],
    teachers = [],
  }) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.students = students;
    this.teachers = teachers;
  }
}
const CS50 = new Course({
  name: 'CS50',
});
const webDevelopment = new learningPathsClass({
  name: 'Web Developer',
  courses: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'],
});
const dataScience = new learningPathsClass({
  name: 'Data sciene',
  courses: ['Buisness Intelligence', 'DataViz'],
});
const gameDevelompent = new learningPathsClass({
  name: 'Game Developer',
  courses: ['Unity', 'C#', 'C++', 'Game Development'],
});

const juan_2 = new StudentClass_3({
  name: 'Juan',
  username: 'jfuentes_code',
  email: 'juan_fuentes@avocadosnetwork.com',
  twitter: '@jfuentes_code',
  learningPaths: [webDevelopment, dataScience, gameDevelompent],
});
