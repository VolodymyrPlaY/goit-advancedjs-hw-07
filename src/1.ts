class Student {
  constructor(
      public name: string,
      public age: number,
      public grade: string
  ) {}
}

// Приклад використання
const student = new Student('John Doe', 21, 'A');
console.log(student);
