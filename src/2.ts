class Employee {
  // Властивість name буде доступною всім (public).
  public name: string;

  // Властивість department доступна тільки всередині класу Employee (private).
  private department: string;

  // Властивість salary доступна тільки всередині класу Employee та його підкласів (protected).
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  // Метод для отримання деталей про працівника
  public getEmployeeDetails(): string {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    // Виклик конструктора суперкласу Employee
    super(name, department, salary + 10000); // Збільшення зарплати на 10000
  }
}

// Приклад використання:
const manager = new Manager('John Doe', 'HR', 50000);
console.log(manager.getEmployeeDetails()); // Name: John Doe, Department: HR, Salary: 60000

export {};
