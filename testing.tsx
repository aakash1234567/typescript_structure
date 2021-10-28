// Example typescript file for demonstration of node module

// Employee class interface
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

// Clock class interface
interface IClock {
  date: Date;
}
export class Clock implements IClock {
  date: Date;
  constructor() {
    this.date = new Date();
  }
  public datenow = () => {
    return `It is ${this.date}`;
  };
}

// Vehicle class interface
interface IVehicle {
  model: string;
  name: string;
  type: string;
  price: number;
  getPlateNo: () => number;
  setPlateNo: (arg0: number) => void;
}
export class Vehicle implements IVehicle {
  model: string;
  name: string;
  type: string;
  price: number;
  private _plateNo!: number;
  constructor(mod: string, name: string, type: string, price: number) {
    this.model = mod;
    this.name = name;
    this.type = type;
    this.price = price;
  }

  getPlateNo = (): number => {
    return this._plateNo;
  };
  setPlateNo = (value: number) => {
    this._plateNo = value;
  };
}
////////////////////////////IMPLEMENTATION///////////////////////////////////
// import { Employee, Clock, Vehicle } from "./testing";
// function App() {
// let emp = new Employee(1, "Steve", 20000, 21);
// emp.setPhone(99999999999);
// console.log(emp.getPhone());
// console.log(emp.descp());
// // console.log(emp._phone);
// console.log(emp.name);
// let clk = new Clock();
// console.log(clk.datenow());
// let vehicle = new Vehicle("suzuki", "Steve", "car", 2100000);
// vehicle.setPlateNo(8853);
// console.log(vehicle.getPlateNo());
//   return (
//     <>
//     </>
//   );
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////
//Contributed by: Aakash
//Name: Typescript learn
