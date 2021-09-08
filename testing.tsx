interface IEmployee {
  empCode: number;
  name: string;
  salary: number;
  age: number;
  getPhone: () => number;
  setPhone: (arg0: number) => void;
}

export class Employee implements IEmployee {
  empCode: number;
  name: string;
  salary: number;
  age: number;
  private _phone!: number;
  // "There is a property called name with a type of string | undefined. It starts with a value of undefined. But every time I get or set that property, I want to treat it as type string.";
  constructor(code: number, name: string, salary: number, age: number) {
    this.empCode = code;
    this.name = name;
    this.salary = salary;
    this.age = age;
  }

  getPhone = (): number => {
    return this._phone;
  };
  setPhone = (value: number) => {
    this._phone = value;
  };
  private getdetails = () => {
    return `Name is ${this.name}. Age is ${this.age}. Salary is ${this.salary}. Phone number is ${this._phone}.`;
  };
  public descp = () => {
    return this.getdetails();
  };
}

////////////////////////////IMPLEMENTATION///////////////////////////////////
// import { Employee } from "./testing";
// function App() {
//   let emp = new Employee(1, "Aakash", 20000, 21);
//   emp.setPhone(99999999999);
//   console.log(emp.getPhone());
//   console.log(emp.descp());
//   // console.log(emp._phone);
//   console.log(emp.name);
//   return (
//     <>
//     </>
//   );
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////
