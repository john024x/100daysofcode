class Comment {
  constructor({ content, student, role = 'student' }) {
    this.content = content;
    this.student = student;
    this.role = role;
    this.likes = 0;
  }
  publish() {
    console.log(this.student + ' (' + this.role + ')');
    console.log(this.likes + ' likes');
    console.log(this.content);
  }
}

class Course {
  constructor({ name, classes = [] }) {
    this._name = name; //Convention for private variables
    this.classes = classes;
    isFree = false;
    lang = 'spanish';
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
const CS50 = new Course({
  name: 'CS50',
  lang: 'english',
});

const CS50_Certificate = new Course({
  name: 'CS50',
  isFree: true,
  lang: 'spanish',
});

class SuperStudent {
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
  publishComment(commentContent) {
    const comment = new Comment({
      content: commentContent,
      student: this.name,
      // role: 'student',
    });
    comment.publish();
  }
}

class freeSudent extends SuperStudent {
  constructor(props) {
    super(props);
  }

  approvedCourses(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn('This course is not free');
    }
  }
}

class basicSudent extends SuperStudent {
  constructor(props) {
    super(props);
  }

  approvedCourses(newCourse) {
    if (newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn('This course is in English');
    }
  }
}

class expertStudent extends SuperStudent {
  constructor(props) {
    super(props);
  }
}
class Teacher extends SuperStudent {
  constructor(props) {
    super(props);
  }
  publishComment(commentContent) {
    const comment = new Comment({
      content: commentContent,
      student: this.name,
      role: 'teacher',
    });
    comment.publish();
  }
}
const juan_2 = new expertStudent({
  name: 'Juan',
  username: 'jfuentes_code',
  email: 'juan_fuentes@avocadosnetwork.com',
  twitter: '@jfuentes_code',
  learningPaths: [webDevelopment, dataScience, gameDevelompent],
});

const Angel = new expertStudent({
  name: 'Angel',
  username: 'Angel_code',
  email: 'juan_fuentes@avocadosnetwork.com',
  twitter: '@jfuentes_code',
});
