class Student {
  constructor(firstName, lastName, track) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._track = track;
  }

  get name() {
    return [this.firstName, this.lastName];
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get track() {
    return this._track;
  }
}

let student = new Student('Kay', 'Oakley', 'JavaScript');
console.log(`${student.name.join(' ')} ${student.track}`);
// Kay Oakley JavaScript
console.log(`${student.firstName} ${student.lastName}`);
// Kay Oakley

student.firstName = 'hello';

console.log(student);


